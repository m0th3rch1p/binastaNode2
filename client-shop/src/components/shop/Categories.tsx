import mpesaImg from "@/assets/images/mpesa.jpg";
import { ProductCategory } from "@/store/reducers/productCategorySlice";

function Categories({ categories, selectCategory }: { categories: ProductCategory[], selectCategory: (category: string) => void }) {

    return (
        <>
            <div className="col-lg-1-5 primary-sidebar sticky-sidebar" style={{
                position: "relative",
                overflow: "visible",
                boxSizing: "border-box",
                minHeight: "1px"
            }}>

                <div className="theiaStickySidebar" style={{
                    paddingTop: "0px",
                    paddingBottom: "1px",
                    position: "static",
                    transform: "none"
                }}><div className="sidebar-widget widget-category-2 mb-30">
                        <h5 className="section-title style-1 mb-30">Category</h5>
                        <ul>
                            {
                                categories?.map(category => (
                                    <li>
                                        <a href="#0" onClick={() => selectCategory(category.slug as string)}> <img src={`/${category.image_path}`} alt="" />{ category.name }</a><span className="count">{ category.products_count }</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none animated" style={{
                        visibility: "visible"
                    }}>
                        <img src={mpesaImg} alt="" />
                    </div></div></div>
        </>
    )
}

export default Categories