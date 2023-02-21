import ProductCard from "./components/ProductCard/ProductCard";
import products from "./productsData";

function App() {
  console.log(products);
  return (
    <div className="App">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.productName}
          price={product.price}
          discountPrice={product.discountPrice}
          imageUrl={product.imageUrl}
        />
      ))}
      <h1>Hello</h1>
    </div>
  );
}

export default App;
