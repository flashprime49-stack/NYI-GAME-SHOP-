import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");

  const menu = [
    "🏠 Home",
    "🛒 Order",
    "💰 Wallet",
    "📜 History",
    "👤 Profile",
  ];

  return (
    <div className="app">

      <header className="header">
        <h1>🎮 NYI GAME SHOP</h1>
      </header>

      <main className="content">

        {page === "🏠 Home" && (
          <>
            <div className="banner">
              🔥 Welcome To NYI GAME SHOP
            </div>

            <h2>🎮 Game List</h2>
            <div className="games">
              <div>Mobile Legends</div>
              <div>PUBG Mobile</div>
              <div>Free Fire</div>
            </div>

            <h2>⭐ Featured Top Up</h2>
            <div className="card">
              MLBB Diamonds<br />
              PUBG UC<br />
              Game Credits
            </div>
          </>
        )}

        {page === "🛒 Order" && (
          <div className="card">
            <h2>🛒 Order</h2>
            <p>Current Order</p>
            <p>Pending</p>
            <p>Completed</p>
            <p>Order ID</p>
          </div>
        )}

        {page === "💰 Wallet" && (
          <div className="card">
            <h2>💰 Wallet</h2>
            <h3>Balance: 0 MMK</h3>
            <p>KBZPay</p>
            <p>WavePay</p>
            <p>Deposit History</p>
          </div>
        )}

        {page === "📜 History" && (
          <div className="card">
            <h2>📜 History</h2>
            <p>Top Up History</p>
            <p>Deposit History</p>
            <p>Transaction</p>
          </div>
        )}

        {page === "👤 Profile" && (
          <div className="card">
            <h2>👤 Profile</h2>
            <p>Username</p>
            <p>Level / VIP</p>
            <p>Settings</p>
            <p>Logout</p>
          </div>
        )}

      </main>


      <nav className="bottom-nav">
        {menu.map((item) => (
          <button 
            key={item}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
      </nav>

    </div>
  );
}

export default App;
