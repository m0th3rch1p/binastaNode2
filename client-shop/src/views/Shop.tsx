import Products from "@/components/shop/Products";
import Categories from "@/components/shop/Categories";
import PageHeader from "@/components/shop/PageHeader";

function Shop() {
  return (
    <>
      <PageHeader />
      <div className="container mb-30" style={{
          transform: "none"
      }}>
          <div className="row flex-row-reverse" style={{
              transform: "none"
          }}>
              <Products />
              <Categories />
          </div>
      </div>
    </>
  )
}

export default Shop;