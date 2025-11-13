// Stats component displays study session results
export default function Stats({ deck, studyResults, onDone }) {
  const { correct, incorrect, total } = studyResults;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="card">
      <h3>Session Complete</h3>
      <p className="small">
        Nice work studying: <span className="badge">{deck.name}</span>
      </p>
      <p>You finished all {total} cards.</p>

      <div style={{ background: "#f0fdf4", padding: "1rem", borderRadius: "8px", margin: "1rem 0" }}>
        <h4 style={{ margin: "0 0 0.5rem 0" }}>Results:</h4>
        <p style={{ margin: "0.25rem 0" }}>Correct: <strong>{correct}</strong></p>
        <p style={{ margin: "0.25rem 0" }}>Incorrect: <strong>{incorrect}</strong></p>
        <p style={{ margin: "0.25rem 0" }}>Accuracy: <strong>{percentage}%</strong></p>
      </div>

      <button className="button primary" onClick={onDone}>
        Back to Deck
      </button>
    </div>
  );
}
