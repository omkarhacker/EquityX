import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      // console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
      {allOrders.length === 0 ? (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to="/" className="btn">
              Get started
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {/* Render your orders here */}

          <h3 className="title">Orders ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>price</th>
                <th>mode</th>
              </tr>
              {allOrders.map((stock, index) => {
                const Name = stock.name;
                const Qty = stock.qty;
                const Price = stock.price;
                const Mode = stock.mode;

                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{stock.mode}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
