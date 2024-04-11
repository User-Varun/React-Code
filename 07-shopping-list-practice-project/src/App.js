import React, { useEffect } from "react";
import { useState } from "react";

const initialItems = [
  { price: 10, itemName: "shoes", quantity: 1 },
  { price: 100, itemName: "keyboard", quantity: 1 },
  { price: 5000, itemName: "watch", quantity: 1 },
];

export default function App() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleTotalItems() {
    const sum = initialItems.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.quantity),
      0
    );
    return setTotalItems(sum);
  }

  function handleTotalPrice() {
    const calculatedtotalPrice = initialItems.reduce(
      (acc, cur) => acc + cur.price,
      0
    );

    return setTotalPrice(calculatedtotalPrice);
  }

  function handleForm(e) {
    e.preventDefault();
  }

  useEffect(() => {
    handleTotalItems();
    handleTotalPrice();
  });

  return (
    <div className="app">
      <ItemsCartDetails totalItems={totalItems} totalPrice={totalPrice} />
      <ItemsList />
      <AddNewItems onHandleForm={handleForm} />
    </div>
  );
}

function ItemsCartDetails({ totalItems, totalPrice }) {
  return (
    <div className="cart-details-section">
      <span>
        Subtotal ({totalItems} Items): <strong>₹{totalPrice}</strong>
      </span>
    </div>
  );
}
function ItemsList() {
  return (
    <div className="items-list">
      {initialItems.map((item, index) => (
        <Item item={item} index={index} key={item.itemName} />
      ))}
    </div>
  );
}

function Item({ item, index }) {
  return (
    <div className="item">
      <span className="emoji">🛒</span>
      <div>
        <span>
          <strong>{item.itemName}</strong>
        </span>
        <p className="quantity-section">
          <button className="btn-change">-</button>
          <strong>{item.quantity}</strong>{" "}
          <button className="btn-change">+</button>
        </p>
      </div>
      <span className="price">
        ₹<strong>{item.price} </strong>
      </span>
    </div>
  );
}

function AddNewItems({ onHandleForm }) {
  const [itemName, setItemName] = useState("");
  const [howMany, setHowMany] = useState("");
  const [price, setPrice] = useState("");

  // const dataFormat = [
  //   {
  //     itemName,
  //     price,
  //     quantity,
  //   },
  // ];

  return (
    <>
      <form className="add-new-items" onSubmit={(e) => onHandleForm(e)}>
        <label className="add-new-items-label">
          Add new items to the Cart 😎
        </label>

        <div className="form-layout">
          <label>
            <strong>Item's name?</strong>
          </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          ></input>
        </div>
        <div className="form-layout">
          <label>
            <strong>How many?</strong>{" "}
          </label>
          <input
            type="number"
            value={howMany}
            onChange={(e) => setHowMany(Number(e.target.value))}
          ></input>
        </div>
        <div className="form-layout">
          <label>
            <strong>Price?</strong>
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          ></input>
        </div>
        <button className="btn">Submit</button>
      </form>
      <button className="btn">Close</button>
    </>
  );
}
