import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import DeckList from "./components/DeckList.jsx";
import DeckForm from "./components/DeckForm.jsx";
import CardList from "./components/CardList.jsx";
import CardForm from "./components/CardForm.jsx";
import StudyView from "./components/StudyView.jsx";
import Stats from "./components/Stats.jsx";

// Seed data for initial decks
const seedDecks = [
  {
    id: 1,
    name: "React Basics",
    cards: [
      { id: 1, front: "What is JSX?", back: "A syntax extension for JavaScript that looks like HTML." },
      { id: 2, front: "What hook manages state?", back: "useState." },
    ],
  },
  {
    id: 2,
    name: "SQL Terms",
    cards: [
      { id: 1, front: "PRIMARY KEY", back: "Uniquely identifies a row in a table." },
    ],
  },
];

export default function App() {
  // App-level state management
  const [decks, setDecks] = useState(seedDecks);
  const [activeDeckId, setActiveDeckId] = useState(null);
  const [mode, setMode] = useState("home"); // "home" | "manage" | "study" | "stats"
  const [studyResults, setStudyResults] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const activeDeck = decks.find((d) => d.id === activeDeckId) || null;

  // Deck CRUD operations
  const addDeck = (name) => {
    const nextId = decks.length ? Math.max(...decks.map((d) => d.id)) + 1 : 1;
    setDecks([...decks, { id: nextId, name, cards: [] }]);
  };

  const deleteDeck = (deckId) => {
    setDecks(decks.filter((d) => d.id !== deckId));
    if (activeDeckId === deckId) {
      setActiveDeckId(null);
      setMode("home");
    }
  };

  // Card CRUD operations
  const addCard = (deckId, front, back) => {
    setDecks(
      decks.map((d) => {
        if (d.id !== deckId) return d;
        const nextId = d.cards.length ? Math.max(...d.cards.map((c) => c.id)) + 1 : 1;
        return { ...d, cards: [...d.cards, { id: nextId, front, back }] };
      })
    );
  };

  const updateCard = (deckId, cardId, front, back) => {
    setDecks(
      decks.map((d) =>
        d.id === deckId
          ? { ...d, cards: d.cards.map((c) => (c.id === cardId ? { ...c, front, back } : c)) }
          : d
      )
    );
  };

  const deleteCard = (deckId, cardId) => {
    setDecks(
      decks.map((d) =>
        d.id === deckId ? { ...d, cards: d.cards.filter((c) => c.id !== cardId) } : d
      )
    );
  };

  // Navigation handlers
  const handleHome = () => {
    setMode("home");
    setActiveDeckId(null);
  };

  const handleFinishStudy = (results) => {
    setStudyResults(results);
    setMode("stats");
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <Header onHome={handleHome} darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />

        {mode === "home" && (
        <>
          <h2>Your Decks</h2>
          <DeckList
            decks={decks}
            onOpen={(id) => {
              setActiveDeckId(id);
              setMode("manage");
            }}
            onDelete={deleteDeck}
          />
          <hr />
          <DeckForm onCreate={addDeck} />
        </>
        )}

        {mode === "manage" && activeDeck && (
        <>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <h2>
              Manage Deck: <span className="badge">{activeDeck.name}</span>
            </h2>
            <div className="row">
              <button className="button ghost" onClick={() => setMode("study")}>
                Start Study
              </button>
              <button className="button" onClick={handleHome}>
                Back
              </button>
            </div>
          </div>
          <CardList
            deck={activeDeck}
            onDelete={(cardId) => deleteCard(activeDeck.id, cardId)}
            onUpdate={updateCard}
          />
          <hr />
          <CardForm onSubmit={(front, back) => addCard(activeDeck.id, front, back)} />
        </>
        )}

        {mode === "study" && activeDeck && (
        <StudyView
          deck={activeDeck}
          onExit={() => setMode("manage")}
          onFinish={handleFinishStudy}
        />
        )}

        {mode === "stats" && activeDeck && studyResults && (
        <Stats
          deck={activeDeck}
          studyResults={studyResults}
          onDone={() => setMode("manage")}
        />
        )}
      </div>
    </div>
  );
}
