// DeckList displays all decks in a grid layout
export default function DeckList({ decks, onOpen, onDelete }) {
  return (
    <div className="grid">
      {decks.map((deck) => (
        <div key={deck.id} className="card">
          <h3>{deck.name}</h3>
          <p className="small">{deck.cards.length} cards</p>
          <div className="row">
            <button className="button primary" onClick={() => onOpen(deck.id)}>
              Open
            </button>
            <button className="button ghost" onClick={() => onDelete(deck.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
