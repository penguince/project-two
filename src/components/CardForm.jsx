import { useState } from "react";

// Form component for creating new cards
export default function CardForm({ onSubmit }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;
    onSubmit(front.trim(), back.trim());
    setFront("");
    setBack("");
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>New Card</h3>
      <input
        className="input"
        placeholder="Front (question/term)"
        value={front}
        onChange={(e) => setFront(e.target.value)}
      />
      <textarea
        className="input"
        rows={3}
        placeholder="Back (answer/definition)"
        value={back}
        onChange={(e) => setBack(e.target.value)}
      />
      <button className="button primary" type="submit">
        Add Card
      </button>
    </form>
  );
}
