function GameCard({ image, name }) {
  return (
    <div className="game-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button>Top Up</button>
    </div>
  );
}

export default GameCard;
