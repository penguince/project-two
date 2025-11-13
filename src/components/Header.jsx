// Header component receives callback function to navigate home
export default function Header({ onHome }) {
  return (
    <header className="header">
      <h1>Flashcards Trainer</h1>
      <button className="button primary" onClick={onHome}>
        Home
      </button>
    </header>
  );
}
