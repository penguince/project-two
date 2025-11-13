# Flashcards Trainer# React + Vite



A single-page React application for creating and studying flashcard decks. Built to demonstrate React fundamentals including components, state management, props, and event handling.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## FeaturesCurrently, two official plugins are available:



- Create and manage multiple flashcard decks- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- Add, edit, and delete flashcards- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Study mode with flip cards and progress tracking

- Mark cards as correct or incorrect## React Compiler

- View study session statistics

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Tech Stack

## Expanding the ESLint configuration

- React 19

- ViteIf you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- useState for state management
- Component-based architecture
- CSS for styling

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit http://localhost:5173 to view the app.

## Build

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

Deploy the contents of the `dist` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── DeckList.jsx        # Display all decks
│   ├── DeckForm.jsx        # Create new deck form
│   ├── CardList.jsx        # Display and edit cards
│   ├── CardForm.jsx        # Add new card form
│   ├── StudyView.jsx       # Study mode interface
│   ├── ProgressBar.jsx     # Progress indicator
│   └── Stats.jsx           # Session results
├── App.jsx                 # Main app with state management
├── App.css                 # Application styles
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## Component Architecture

The app uses a clear parent-child component hierarchy:

- **App.jsx**: Parent component managing all state (decks, active deck, mode)
- **Child Components**: Receive data and callbacks via props
- **State Flow**: Parent state updates trigger child re-renders
- **Event Handling**: Forms and buttons use React event system

## State Management

Uses React's `useState` hook for:
- Deck management (add, delete)
- Card CRUD operations (create, read, update, delete)
- Study session tracking (current card, correct/incorrect counts)
- UI mode switching (home, manage, study, stats)

## License

MIT
