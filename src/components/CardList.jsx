import { useState } from "react";

// CardList displays cards with edit and delete functionality
export default function CardList({ deck, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleEdit(card) {
    setEditingId(card.id);
    setFront(card.front);
    setBack(card.back);
  }

  function handleSave() {
    if (!front.trim() || !back.trim()) return;
    onUpdate(deck.id, editingId, front.trim(), back.trim());
    setEditingId(null);
  }

  function handleCancel() {
    setEditingId(null);
    setFront("");
    setBack("");
  }

  return (
    <div className="grid">
      {deck.cards.map((card) => (
        <div key={card.id} className="card">
          {editingId === card.id ? (
            <>
              <input
                className="input"
                value={front}
                onChange={(e) => setFront(e.target.value)}
              />
              <textarea
                className="input"
                rows={3}
                value={back}
                onChange={(e) => setBack(e.target.value)}
              />
              <div className="row-right">
                <button className="button primary" onClick={handleSave}>
                  Save
                </button>
                <button className="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <strong>{card.front}</strong>
              <p className="small">{card.back}</p>
              <div className="row-right">
                <button className="button ghost" onClick={() => handleEdit(card)}>
                  Edit
                </button>
                <button className="button" onClick={() => onDelete(card.id)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
