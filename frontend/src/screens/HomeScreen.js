import React, { useEffect, useState } from "react";
import Product from "../components/sub-components/Product";
import SimpleBox from "../components/sub-components/SimpleBox";
import BoxWithSearch from "../components/sub-components/BoxWithSearch";
import LoadingBox from "../components/sub-components/LoadingBox";
import MessageBox from "../components/sub-components/MessageBox";
import Cart from "../components/sub-components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, listTags } from "../actions/productActions";
import { listCompanies } from "../actions/companyActions";
import ReactPaginate from "react-paginate";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [currentPage, setCurrentPage] = useState(1);
  const [firstState, setFirstState] = useState(false);

  useEffect(() => {
    dispatch(listProducts(currentPage));
  }, [dispatch, currentPage]);
  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    // scroll to the top
    window.scrollTo(0, 0);
  };

  const companyList = useSelector((state) => state.companyList);
  const { companies } = companyList;
  useEffect(() => {
    dispatch(listCompanies());
  }, [dispatch]);


  const [mugSelected, setMugSelected] = useState(false);
  const [shirtSelected, setShirtSelected] = useState(false);
  const [filteredProductList, setFilteredProductList] = useState(products);



  const tagList = () => {
    const tags = filteredProductList.reduce(
      (initial, current) => [...initial, ...current.tags],
      []
    );

    return Array.from(new Set(tags));
  };
  const [uniqueTags, setUniqueTags] = useState([]);

  const filterList = () => {
    let filteredList = products;
    if (mugSelected && shirtSelected) {
      filteredList = products.filter(
        (product) =>
          product.itemType.toLowerCase() === "mug" ||
          product.itemType.toLowerCase() === "shirt"
      );
      setFilteredProductList(filteredList);
    } else if (mugSelected && !shirtSelected) {
      filteredList = products.filter(
        (product) => product.itemType.toLowerCase() === "mug"
      );
      setFilteredProductList(filteredList);
    } else if (!mugSelected && shirtSelected) {
      filteredList = products.filter(
        (product) => product.itemType.toLowerCase() === "shirt"
      );
      setFilteredProductList(filteredList);
    } else {
      setFilteredProductList(filteredList);
    }
    return filteredList;
  }

  useEffect(()=> {
    setUniqueTags(tagList());
    filterList();
  },[]);
  
  console.log(uniqueTags);
  useEffect(() => {
    filterList();
  }, [mugSelected, shirtSelected]);

  const handleMugToggle = () => {
    setMugSelected((prevState) => !prevState);
  };
  const handleShirtToggle = () => {
    setShirtSelected((prevState) => !prevState);
  };

  
  
  console.log(uniqueTags)

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <h3 className="title">Sorting</h3>
          <SimpleBox />
          <h3 className="title">Brands</h3>
          <BoxWithSearch type={"companies"} property={companies} />
          <h3 className="title">Tags</h3>
          {/* <BoxWithSearch type={"tags"} property={itemType}/> */}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <h2 className="title">Products</h2>
          <div className="product-type-filter">
            <button
              className={mugSelected ? "clicked" : null}
              onClick={handleMugToggle}
            >
              Mug
            </button>
            <button
              className={shirtSelected ? "clicked" : null}
              onClick={handleShirtToggle}
            >
              Shirt
            </button>
          </div>
          <div className="products">
            <div className="row">
              <div>
                {loading ? (
                  <LoadingBox></LoadingBox>
                ) : error ? (
                  <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                  <div className="row center">
                    {filteredProductList.map((product, index) => (
                      <Product key={index} product={product} ></Product>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={40}
            marginPagesDisplayed={4}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <Cart />
        </div>
      </div>
    </div>
  );
}
