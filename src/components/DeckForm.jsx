import { useState } from "react";

// Form component for creating new decks
export default function DeckForm({ onCreate }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate(name.trim());
    setName("");
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>New Deck</h3>
      <div className="row">
        <input
          className="input"
          placeholder="Deck name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="button primary" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
