function Order() {

  const orders = [
    {
      id: "NYI10001",
      game: "Mobile Legends",
      item: "257 Diamonds",
      status: "Pending"
    },
    {
      id: "NYI10002",
      game: "PUBG Mobile",
      item: "325 UC",
      status: "Completed"
    }
  ];


  return (
    <div>

      <h2>🛒 Order</h2>


      {orders.map((order) => (

        <div className="card" key={order.id}>

          <h3>Order ID: {order.id}</h3>

          <p>
            🎮 Game: {order.game}
          </p>

          <p>
            💎 Package: {order.item}
          </p>

          <p>
            Status:
            <b> {order.status}</b>
          </p>

        </div>

      ))}


      <div className="card">

        <h3>Order Status</h3>

        ✅ Completed<br/>
        ⏳ Pending<br/>
        🔍 Order ID Check

      </div>


    </div>
  );
}


export default Order;
