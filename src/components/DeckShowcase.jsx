// Sample deck showcase component for testing
export default function DeckShowcase({ decks }) {
  const totalCards = decks.reduce((sum, deck) => sum + deck.cards.length, 0);
  
  return (
    <div className="deck-showcase">
      <div className="showcase-header">
        <h3>Available Study Sets</h3>
        <div className="showcase-stats">
          <span className="badge">{decks.length} Decks</span>
          <span className="badge">{totalCards} Total Cards</span>
        </div>
      </div>
      
      <div className="showcase-topics">
        {decks.map(deck => (
          <div key={deck.id} className="topic-tag">
            {deck.name}
          </div>
        ))}
      </div>
    </div>
  );
}
