export default function Header({ onHome, darkMode, onToggleTheme }) {
  return (
    <header className="header">
      <h1 className="logo-text">Flashcards Trainer</h1>
      <div className="header-actions">
        <button className="button theme-toggle" onClick={onToggleTheme} title="Toggle theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button className="button primary" onClick={onHome}>
          Home
        </button>
      </div>
    </header>
  );
}
