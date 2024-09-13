import React, { useEffect, useState } from "react";
import Chicken from "./Chicken";
import "../../../style/home/allProduct.css";
import Pagination from "./Pagination";
import axios from "axios";
import { ProductProps } from "../../../types";
import { Link, Route, Routes } from "react-router-dom";
import ChickenBreast from "./ChickenBreast";
import Category from "./Category";


const AllChickenApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage] = useState<number>(16);
  const [products, setProducts] = useState<ProductProps[]>([]); 

  const fetchUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/ProductChicken`);
      
      const data = response.data;

      setProducts(data);
    } catch (e) {
      console.error("Error fetching data: ", e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="allProductbBox">
      <h2>닭가슴살/육류</h2>

<ul className="allProductButtonList">
  <li>
    <Link to={'/chickenbreast'}><button>닭가슴살</button></Link>
  </li>
  <li>
    <button>달걀</button>
  </li>
  <li>
    <button>소고기</button>
  </li>
</ul>
<div className="itemCotianer">
  <ul className="allProductSelectBtn">
    <li value="">
      <button>조회순</button>
    </li>
    <li>|</li>
    <li value="">
      <button>가격 높은순</button>
    </li>
    <li>|</li>
    <li value="">
      <button>가격 낮은순</button>
    </li>
  </ul>
  </div>
      <div className="allProductList">
      <Route path="/" element={<Chicken products={currentProducts} />}/>
        </div>
      <Pagination
        productPerPage={productPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
        />

    </div>

  );
};
export default AllChickenApp;

