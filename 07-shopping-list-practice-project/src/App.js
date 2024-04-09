export default function App() {
  return (
    <div className="app">
      <ItemsCartDetails />
      <ItemsList />
      <AddNewItems />
    </div>
  );
}

function ItemsCartDetails() {
  return (
    <div className="cart-details-section">
      <p>Total Items : </p>
      <p>Total Balance : </p>
    </div>
  );
}
function ItemsList() {
  return <div className="items-list">hi</div>;
}
function AddNewItems() {
  return <div>hi</div>;
}
