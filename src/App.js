import storeItems from "./items.json";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <Products items={storeItems} />
    </>
  );
}

export default App;
