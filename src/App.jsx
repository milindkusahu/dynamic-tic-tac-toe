import React from "react";
import "./App.css";
import TicTacToe from "./components/tic-tac-toe";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="app-container">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Dynamic Tic Tac Toe Game - Play Online Now!</title>
        <meta
          name="description"
          content="Play the Dynamic Tic Tac Toe Game online with customizable board sizes. Enjoy a quick game or a challenging one, with board sizes ranging from 3x3 to 6x6."
        />
        <meta
          name="keywords"
          content="tic tac toe, tic tac toe game, play tic tac toe online, tic tac toe customizable board"
        />
        <meta name="author" content="Milind Kusahu" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://dynamic-tic-tac-toe-eight.vercel.app/"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Dynamic Tic Tac Toe Game - Play Online Now!"
        />
        <meta
          property="og:description"
          content="Challenge your friends to a customizable Tic Tac Toe game. Play online with different board sizes from 3x3 to 6x6."
        />
        <meta
          property="og:image"
          content="https://dynamic-tic-tac-toe-eight.vercel.app/src/dynamic-tic-tac-toe-game.webp"
        />
        <meta
          property="og:url"
          content="https://dynamic-tic-tac-toe-eight.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dynamic Tic Tac Toe Game - Play Online Now!"
        />
        <meta
          name="twitter:description"
          content="Enjoy playing a customizable Tic Tac Toe game online. Challenge your friends!"
        />
        <meta
          name="twitter:image"
          content="https://dynamic-tic-tac-toe-eight.vercel.app/src/dynamic-tic-tac-toe-game.webp"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Game",
              "name": "Dynamic Tic Tac Toe Game",
              "description": "Play a customizable Tic Tac Toe game with board sizes from 3x3 to 6x6.",
              "author": {
                "@type": "Person",
                "name": "Milind Kusahu"
              },
              "url": "https://dynamic-tic-tac-toe-eight.vercel.app/",
              "image": "https://dynamic-tic-tac-toe-eight.vercel.app/src/dynamic-tic-tac-toe-game.webp",
              "operatingSystem": "All",
              "gamePlatform": "Online",
              "genre": "Puzzle"
            }
          `}
        </script>
      </Helmet>

      <h1 className="main-title">Dynamic Tic Tac Toe Game</h1>
      <div className="game-wrapper">
        <TicTacToe initialBoardSize={3} />
      </div>
      <section className="info-section">
        <p>
          Welcome to the <strong>Dynamic Tic Tac Toe Game</strong>! This tool
          allows you to play Tic Tac Toe with a customizable board size from 3x3
          to 6x6. Select the board size, take turns, and enjoy playing this
          classic game. Whether you want a quick game or a longer challenge,
          this tool adapts to your preferences.
        </p>
      </section>

      <footer className="footer">
        <a
          href="https://github.com/milindkusahu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub Logo"
            className="github-logo"
          />
          <span>Visit My GitHub</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
