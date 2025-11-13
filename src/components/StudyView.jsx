import { useState } from "react";
import ProgressBar from "./ProgressBar.jsx";

// StudyView component handles flashcard study session
export default function StudyView({ deck, onExit, onFinish }) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const total = deck.cards.length;
  const card = deck.cards[index];

  function handleNext() {
    const nextIndex = index + 1;
    if (nextIndex >= total) {
      onFinish({ correct, incorrect, total });
    } else {
      setIndex(nextIndex);
      setShowBack(false);
    }
  }

  function handleCorrect() {
    setCorrect(correct + 1);
    handleNext();
  }

  function handleIncorrect() {
    setIncorrect(incorrect + 1);
    handleNext();
  }

  if (!total) {
    return (
      <div className="card">
        <p>No cards in this deck yet.</p>
        <button className="button" onClick={onExit}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h3>
          Studying: <span className="badge">{deck.name}</span>
        </h3>
        <span className="small">
          Card {index + 1} / {total}
        </span>
      </div>

      <div className="card" style={{ background: "#f8fafc", minHeight: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p>
          <strong>{showBack ? card.back : card.front}</strong>
        </p>
      </div>

      <div className="row">
        <button className="button ghost" onClick={() => setShowBack(!showBack)}>
          Flip
        </button>
        <button className="button primary" onClick={handleCorrect}>
          Correct
        </button>
        <button className="button" onClick={handleIncorrect}>
          Incorrect
        </button>
      </div>

      <hr />
      <ProgressBar value={(index / total) * 100} />
      <p className="small">
        Correct: {correct} | Incorrect: {incorrect}
      </p>
      <div className="row-right">
        <button className="button" onClick={onExit}>
          Exit
        </button>
      </div>
    </div>
  );
}
