import { useState } from "react";

import Home from "./pages/Home.jsx";

function App() {

  const [page, setPage] = useState("Home");

  return (
    <div className="app">

      <header className="header">
        <h1>🎮 NYI GAME SHOP</h1>
      </header>


      <main className="content">

        {page === "Home" && <Home />}

        {page === "Order" && (
          <div className="card">
            🛒 Order Page
          </div>
        )}

        {page === "Wallet" && (
          <div className="card">
            💰 Wallet Page
          </div>
        )}

        {page === "History" && (
          <div className="card">
            📜 History Page
          </div>
        )}

        {page === "Profile" && (
          <div className="card">
            👤 Profile Page
          </div>
        )}

      </main>


      <nav className="bottom-nav">

        <button onClick={() => setPage("Home")}>
          🏠 Home
        </button>

        <button onClick={() => setPage("Order")}>
          🛒 Order
        </button>

        <button onClick={() => setPage("Wallet")}>
          💰 Wallet
        </button>

        <button onClick={() => setPage("History")}>
          📜 History
        </button>

        <button onClick={() => setPage("Profile")}>
          👤 Profile
        </button>

      </nav>

    </div>
  );
}

export default App;
