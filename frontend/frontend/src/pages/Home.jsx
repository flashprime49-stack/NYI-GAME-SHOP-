import GameCard from "../components/GameCard.jsx";

function Home() {
  return (
    <>
      <div className="banner">
        🔥 Welcome To NYI GAME SHOP
      </div>

      <h2>🎮 Game List</h2>

      <div className="games">

        <GameCard
          image="https://via.placeholder.com/150"
          name="Mobile Legends"
        />

        <GameCard
          image="https://via.placeholder.com/150"
          name="PUBG Mobile"
        />

        <GameCard
          image="https://via.placeholder.com/150"
          name="Free Fire"
        />

      </div>


      <h2>🎁 Promotion</h2>

      <div className="card">
        🔥 Special Discount Coming Soon
      </div>


      <h2>⭐ Featured Top Up</h2>

      <div className="card">
        MLBB Diamonds<br/>
        PUBG UC<br/>
        Game Credits
      </div>
    </>
  );
}

export default Home;
