import React, { useEffect, useState } from "react";
import Chicken from "./Chicken";
import "../../../style/home/allProduct.css";
import Pagination from "./Pagination";
import axios from "axios";
import { ProductDetail } from "../../../types";
import { useSearchParams } from "react-router-dom";

const AllChickenApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage] = useState<number>(16);
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [product, setProduct] = useState<ProductDetail[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [sortView, setSortView] = useState<string>(""); // 정렬 기준 상태
  

  // 필터가 변경될 때마다 가져오는 데이터 필터링
  const filter = searchParams.get('category') || '';
  
    const fetchData = async (type: string) => {
      try {
        const response = await axios.get("http://localhost:3001/poductList"); // JSON 파일 URL로 변경
        const filteredProducts = response.data.filter((product: ProductDetail) => 
          product.category.includes('닭가슴살_육류') ||
          product.productType.includes(type)
        );
        setProducts(filteredProducts);
      } catch (err: any) {
        setError('데이터를 불러오는 중 에러가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

  // 정렬 함수
  const sortedProducts = [...products].sort((a, b) => {
    if (sortView === "view") {
      // return b. - a.; // 조회수를 기준으로 내림차순 정렬
    }
    if (sortView === "cheap") {
      return a.price - b.price; // 가격 오름차순 정렬 (낮은 순)
    }
    if (sortView === "expensive") {
      return b.price - a.price; // 가격 내림차순 정렬 (높은 순)
    }
    if (sortView === "nomal") {
      return a.productId - b.productId; // 등록순 (ID 기준)
    }
    return 0; // 기본: 정렬하지 않음
  });

  // 정렬 기준을 설정하는 함수
  const handleSort = (standard: string) => {
    setSortView(standard); // 정렬 기준을 동적으로 설정
  };

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;

  // 필터 적용 후 정렬된 상품 리스트
  const filteredProducts = sortedProducts.filter(product => 
    filter === '' || product.category.includes(filter)
  );

  // 페이지네이션 처리
  const currentProducts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // 필터 변경 핸들러
  const handleFilter = (filterValue: string) => {
    fetchData(filterValue);
    fet
    setSearchParams({ productType: filterValue });
    setCurrentPage(1); // 필터 변경 시 페이지를 1로 초기화
  };

  // if (loading) return <p>로딩 중...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <div className="allProductbBox">
      <h2 onClick={() => handleFilter('닭가슴살_육류')}>닭가슴살/육류</h2>

      <ul className="allProductButtonList">
        <li>
          <button onClick={() => handleFilter('닭가슴살')}>닭가슴살</button>
        </li>
        <li>
          <button onClick={() => handleFilter('달걀')}>달걀</button>
        </li>
        <li>
          <button onClick={() => handleFilter('소고기')}>소고기</button>
        </li>
      </ul>

      <div className="itemCotianer">
        <ul className="allProductSelectBtn">
          <li value="">
            <button onClick={() => handleSort("nomal")}>등록순</button>
          </li>
          <li>|</li>
          <li value="">
            {/* <button onClick={() => handleSort("view")}>조회순</button> */}
          </li>
          <li>|</li>
          <li value="">
            <button onClick={() => handleSort("expensive")}>가격 높은순</button>
          </li>
          <li>|</li>
          <li value="">
            <button onClick={() => handleSort("cheap")}>가격 낮은순</button>
          </li>
        </ul>
      </div>

      <div className="allProductList">
        <Chicken products={currentProducts} />
      </div>

      <Pagination
        productPerPage={productPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AllChickenApp;

