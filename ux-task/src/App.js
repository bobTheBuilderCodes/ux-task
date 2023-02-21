import ProductCard from "./components/ProductCard/ProductCard";
import products from "./productsData";

function App() {
  console.log(products);
  return (
    <>
    <input placeholder="Search for a product" />
    <div className="productContainer">
      {products.map(({id, productName , price , discountPrice, imageUrl, description , isOpen}) => (
        <ProductCard
        key={id}
        name={productName}
        description={description}
        price={price}
        discountPrice={discountPrice}
        imageUrl={imageUrl}
        isOpen={isOpen}
        />
        ))}
    </div>
        </>
  );
}

export default App;
