import "../../../style/home/allProduct.css";
import { ProductProps } from "./AllProduct";

const Checkin: React.FC<{ products: ProductProps[] }> = ({ products }) => {
  return (
    <div className="allProductImageContainer">
      {products.map((product) => (
        <div key={product.id} className="allProductContain">
          <img
            src={product.image}
            alt={product.title}
            className="allProductImage"
          />
          <h4>{product.title}</h4>
          <p>price: 30000만원</p>
          <div className="allProductHoverBtn">
            <button>ADD</button>
            <button>WISH</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Checkin;
