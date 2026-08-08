import { useState } from "react";

import Home from "./pages/Home.jsx";
import Order from "./pages/Order.jsx";

function App() {

  const [page, setPage] = useState("Home");

  return (
    <div className="app">

      <header className="header">
        <h1>🎮 NYI GAME SHOP</h1>
      </header>


      <main className="content">

        {page === "Home" && <Home />}

        {page === "Order" && <Order />}

        {page === "Wallet" && (
          <div className="card">
            <h2>💰 Wallet</h2>
            <p>Balance: 0 MMK</p>
            <p>KBZPay</p>
            <p>WavePay</p>
            <p>Deposit History</p>
          </div>
        )}


        {page === "History" && (
          <div className="card">
            <h2>📜 History</h2>
            <p>Top Up History</p>
            <p>Deposit History</p>
            <p>Transaction</p>
          </div>
        )}


        {page === "Profile" && (
          <div className="card">
            <h2>👤 Profile</h2>
            <p>Account Info</p>
            <p>Username</p>
            <p>Level / VIP</p>
            <p>Settings</p>
            <p>Logout</p>
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
