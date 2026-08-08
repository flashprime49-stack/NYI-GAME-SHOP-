function Wallet() {

  return (
    <div>

      <h2>💰 Wallet</h2>


      <div className="wallet-card">

        <h3>Current Balance</h3>

        <h1>
          0 MMK
        </h1>

      </div>



      <div className="card">

        <h3>💳 Deposit Method</h3>

        <button className="pay-btn">
          KBZPay
        </button>


        <button className="pay-btn">
          WavePay
        </button>

      </div>



      <div className="card">

        <h3>📜 Deposit History</h3>

        <p>
          No Deposit History
        </p>

      </div>


    </div>
  );
}


export default Wallet;
