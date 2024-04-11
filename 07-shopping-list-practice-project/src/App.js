import React, { useEffect } from "react";
import { useState } from "react";

// const initialItems = [{ price: 10, itemName: "shoes", quantity: 1, id: 111 }];

export default function App() {
  const [cartInfo, setCartInfo] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleTotalPrice() {
    let calculatedtotalPrice = cartInfo.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );

    return setTotalPrice(calculatedtotalPrice);
  }

  function handleTotalItems() {
    const sum = cartInfo.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.quantity),
      0
    );
    return setTotalItems(sum);
  }

  function handleAddItem(item) {
    setCartInfo((items) => [...items, item]);
  }

  useEffect(() => {
    handleTotalPrice();
    handleTotalItems();
  });

  return (
    <div className="app">
      <ItemsCartDetails totalItems={totalItems} totalPrice={totalPrice} />
      <ItemsList cartInfo={cartInfo} setTotalItems={setTotalItems} />
      <AddNewItems onAddItem={handleAddItem} />
      <p className="notice">
        The Quantity increase and decrease Feature does not work currently.{" "}
      </p>
    </div>
  );
}

function ItemsCartDetails({ totalItems, totalPrice }) {
  return (
    <div className="cart-details-section">
      <span>
        Subtotal (<strong>{totalItems}</strong> Items):{" "}
        <strong>₹{totalPrice}</strong>
      </span>
    </div>
  );
}

function ItemsList({ cartInfo, setTotalItems }) {
  return (
    <div className="items-list">
      {cartInfo.length === 0 ? (
        <p className="empty-item-list">Add some items to see here :)</p>
      ) : (
        cartInfo.map((item) => (
          <Item
            item={item}
            key={item.itemName}
            cartInfo={cartInfo}
            setTotalItems={setTotalItems}
          />
        ))
      )}
    </div>
  );
}

function Item({ item }) {
  const [IndividualQuantity, setIndividualQuantity] = useState(item.quantity);

  return (
    <div className="item">
      <span className="emoji">🛒</span>
      <div>
        <span>
          <strong>{item.itemName}</strong>
        </span>
        <p className="quantity-section">
          <button
            className="btn-change"
            // onClick={() => setIndividualQuantity(item.quantity--)}
          >
            -
          </button>
          <strong>{IndividualQuantity}</strong>{" "}
          <button
            className="btn-change"
            // onClick={() => setIndividualQuantity(item.quantity++)}
          >
            +
          </button>
        </p>
      </div>
      <span className="price">
        ₹<strong>{item.price} </strong>
      </span>
    </div>
  );
}

function AddNewItems({ onAddItem }) {
  const [itemName, setItemName] = useState();
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [isopen, setIsOpen] = useState(false);

  function handleForm(e) {
    e.preventDefault();

    if (!itemName || !quantity || !price) return;

    const dataFormat = {
      itemName,
      price,
      quantity,
    };

    onAddItem(dataFormat);
    console.log(dataFormat);

    setItemName("");
    setQuantity("");
    setPrice("");
  }

  return (
    <>
      {isopen ? (
        <form className="add-new-items" onSubmit={(e) => handleForm(e)}>
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
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
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
      ) : (
        ""
      )}
      <button className="btn" onClick={() => setIsOpen(!isopen)}>
        {isopen ? "Close" : "Add Item"}
      </button>
    </>
  );
}
