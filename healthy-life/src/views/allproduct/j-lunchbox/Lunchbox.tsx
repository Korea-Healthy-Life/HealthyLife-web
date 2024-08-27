import React, { useState } from "react";
import "../../../style/home/allProduct.css";
import Pagination from "./Pagination";
import LunchboxContent from "./LuchboxContent";
import { useSearchParams } from "react-router-dom";


export interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: string;
  tag: string;
}

const products: ProductProps[] = [
  {
    id: 1,
    title: "Produt 3",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "20000원",
    tag: '볶음밥'
  },
  {
    id: 2,
    title: "Produt 3",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "20000원",
    tag: '볶음밥'
  },
  {
    id: 3,
    title: "Produt 3",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "20000원",
    tag: '볶음밥'
  },
  {
    id: 4,
    title: "Produt 4",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "30000원",
    tag: '볶음밥'
  },
  {
    id: 5,
    title: "Produt 5",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "29,000원",
    tag: '볶음밥'
  },
  {
    id: 6,
    title: "Produt 6",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "25,000원",
    tag: '볶음밥'
  },
  {
    id: 7,
    title: "Produt 7",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "25,000원",
    tag: '주먹밥'
  },
  {
    id: 8,
    title: "Produt 8",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "25,000원",
    tag: '주먹밥'
  },
  {
    id: 9,
    title: "Produt 9",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "25,000원",
    tag: '주먹밥'
  },
  {
    id: 10,
    title: "Produt 10",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "25,500원",
    tag: '주먹밥'
  },
  {
    id: 11,
    title: "Product 11",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "6000원",
    tag: '주먹밥'
  },
  {
    id: 12,
    title: "Produt 12",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 13,
    title: "Produt 13",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 14,
    title: "Produt 14",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 15,
    title: "Produt 15",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "13,500원",
    tag: '즉석밥'
  },
  {
    id: 16,
    title: "Produt 16",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 17,
    title: "Produt 17",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 18,
    title: "Produt 18",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 19,
    title: "Produt 19",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 20,
    title: "Produt 20",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 21,
    title: "Product 21",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 22,
    title: "Produt 22",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 23,
    title: "Produt 23",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '즉석밥'
  },
  {
    id: 24,
    title: "Produt 24",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '주먹밥'
  },
  {
    id: 25,
    title: "Produt 25",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '주먹밥'
  },
  {
    id: 26,
    title: "Produt 26",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '주먹밥'
  },
  {
    id: 27,
    title: "Produt 27",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '주먹밥'
  },
  {
    id: 28,
    title: "Produt 28",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '볶음밥'
  },
  {
    id: 29,
    title: "Produt 29",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8000원",
    tag: '볶음밥'
  },
  {
    id: 30,
    title: "Produt 30",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "8,000원",
    tag: '볶음밥'
  },
  {
    id: 31,
    title: "Produt 31",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "10,900원",
    tag: '볶음밥'
  },
  {
    id: 32,
    title: "Produt 32",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "10,900원",
    tag: '볶음밥'
  },
  {
    id: 33,
    title: "Produt 33",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "10,900원",
    tag: '볶음밥'
  },
  {
    id: 34,
    title: "Produt 34",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "10,900원",
    tag: '볶음밥'
  },
  {
    id: 35,
    title: "Produt 35",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "10,900원",
    tag: '볶음밥'
  },
  {
    id: 36,
    title: "Produt 36",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "10,900원",
    tag: '볶음밥'
  },
  {
    id: 37,
    title: "Produt 37",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '볶음밥'
  },
  {
    id: 38,
    title: "Produt 38",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '볶음밥'
  },
  {
    id: 39,
    title: "Produt 39",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '주먹밥'
  },
  {
    id: 40,
    title: "Produt 40",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '주먹밥'
  },
  {
    id: 41,
    title: "Produt 41",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '주먹밥'
  },
  {
    id: 42,
    title: "Produt 42",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '볶음밥'
  },
  {
    id: 43,
    title: "Produt 43",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "31,000원",
    tag: '즉석밥'
  },
  {
    id: 44,
    title: "Produt 44",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "41,000원",
    tag: '즉석밥'
  },
  {
    id: 45,
    title: "Produt 45",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '즉석밥'
  },
  {
    id: 46,
    title: "Produt 46",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "39,900원",
    tag: '볶음밥'

  },
  {
    id: 47,
    title: "Produt 47",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "32,000원",
    tag: '볶음밥'
  },
  {
    id: 48,
    title: "Produt 48",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '즉석밥'
  },
  {
    id: 49,
    title: "Produt 49",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '즉석밥'
  },
  {
    id: 50,
    title: "Produt 50",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '즉석밥'
  },
  {
    id: 51,
    title: "Produt 51",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '즉석밥'
  },
  {
    id: 52,
    title: "Produt 52",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '즉석밥'
  },
  {
    id: 53,
    title: "Produt 53",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "15,000원",
    tag: '즉석밥'
  },
  {
    id: 54,
    title: "Produt 54",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "21,000원",
    tag: '즉석밥'
  },
  {
    id: 55,
    title: "Produt 55",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "13,500원",
    tag: '주먹밥'
  },
  {
    id: 56,
    title: "Produt 56",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "13,500원",
    tag: '주먹밥'
  },
  {
    id: 57,
    title: "Produt 57",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '주먹밥'
  },
  {
    id: 58,
    title: "Produt 58",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,500원",
    tag: '주먹밥'
  },
  {
    id: 59,
    title: "Produt 59",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "11,000원",
    tag: '주먹밥'
  },
  {
    id: 60,
    title: "Produt 60",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg",
    price: "13,000원",
    tag: '주먹밥'
  },

];

const Lunchbox:React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [checkinPerPage] = useState<number>(16);

  const [tagFilter, setTagFilter] = useSearchParams();
  //카테고리
  const filter = tagFilter.get('tag') || '';

  const handleFilter = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setTagFilter({tag: e.target.value})
  }

  const indexOfLastPost = currentPage * checkinPerPage;
  const indexOfFirstPost = indexOfLastPost - checkinPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="allProductbBox">
      <h2>도시락</h2>

      <select className="allProductButtonList" value={filter} onChange={handleFilter}>
          <option value={"볶음밥"}>볶음밥</option>
          <option value={"주먹밥"}>주먹밥</option>
          <option value={"즉석밥"}>즉석밥</option>
      </select>
      <div className="itemCotianer">
        <ul className="allProductFilterBtn">
          <li value="">
            <button>전체</button>
          </li>
          <li>|</li>
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

        <div className="allProductList">
          <LunchboxContent products={currentProducts} />
        </div>
      </div>
      <Pagination
        productPerPage={checkinPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Lunchbox;

export interface PaginationProps {
  checkinPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}
