import Products from "@/components/shop/Products";
import Categories from "@/components/shop/Categories";
import PageHeader from "@/components/shop/PageHeader";
import { Product, useFetchProductsQuery } from "@/store/reducers/productsSlice";
import { ProductCategory, useFetchProductCategoriesQuery } from "@/store/reducers/productCategorySlice";
import { useState } from "react";

function Shop() {
  const [shopState, setShopState] = useState<{offset: number, per_page: number, cat: string | null}>({
    offset: 0,
    per_page: 10,
    cat: null
  });
  
  

  const { data: products } = useFetchProductsQuery({ ...shopState });
  const { data: categories } = useFetchProductCategoriesQuery();

  const onPageNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setShopState((state) => ({
      ...state,
      offset: state.offset + state.per_page
    }));
  };

  const onPagePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (shopState.offset === 0) return;

    let newOffset = shopState.offset - shopState.per_page
    if (newOffset <= 0 ) newOffset = 0;

    setShopState((state) => ({
        ...state,
        offset: newOffset
    }));
  }

  const selectCategory = (category: string) => {
    setShopState((state) => ({
      ...state,
      cat: category
    }))
  }

  return (
    <>
      <PageHeader />
      <div className="container mb-30" style={{
        transform: "none"
      }}>
        <div className="row flex-row-reverse" style={{
          transform: "none"
        }}>
          <div className="col-lg-4-5">
            <div className="shop-product-fillter">
              <div className="totall-product">
                <p>We found <strong className="text-brand">{products?.length}</strong> items for you!</p>
              </div>
              <div className="sort-by-product-area">
                <div className="sort-by-cover mr-10">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span><i className="fi-rs-apps"></i>Show:</span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span> 50 <i className="fi-rs-angle-small-down"></i></span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li><a className="active" href="#">50</a></li>
                      <li><a href="#">100</a></li>
                      <li><a href="#">150</a></li>
                      <li><a href="#">200</a></li>
                      <li><a href="#">All</a></li>
                    </ul>
                  </div>
                </div>
                <div className="sort-by-cover">
                  <div className="sort-by-product-wrap">
                    <div className="sort-by">
                      <span><i className="fi-rs-apps-sort"></i>Sort by:</span>
                    </div>
                    <div className="sort-by-dropdown-wrap">
                      <span> Featured <i className="fi-rs-angle-small-down"></i></span>
                    </div>
                  </div>
                  <div className="sort-by-dropdown">
                    <ul>
                      <li><a className="active" href="#">Featured</a></li>
                      <li><a href="#">Price: Low to High</a></li>
                      <li><a href="#">Price: High to Low</a></li>
                      <li><a href="#">Release Date</a></li>
                      <li><a href="#">Avg. Rating</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Products products={products as Product[]} />

            <div className="pagination-area mt-20 mb-20">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-middle">
                            <li className="page-item">
                                <button onClick={onPagePrev} className="page-link"><i className="fi-rs-arrow-small-left"></i></button>
                            </li>
                            <li className="page-item">
                                <button onClick={onPageNext} className="page-link"><i className="fi-rs-arrow-small-right"></i></button>
                            </li>
                        </ul>
                    </nav>
                </div>
          </div>
          <Categories selectCategory={selectCategory}  categories={categories as ProductCategory[]} />
        </div>
      </div>
    </>
  )
}

export default Shop;