import Table, { TableColumn } from "@/components/common/Table";
import { ShopProductVariation, useFetchShopProductBySlugQuery } from "@/store/reducers/ShopProductSlice"
import { useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SingleShopProduct() {
    const params = useParams();
    const { data: product, isLoading } = useFetchShopProductBySlugQuery({ slug: params.slug as string });
    const columns: TableColumn<ShopProductVariation>[] = [
        {
            header: "Variation",
            accessor: "variation",
            renderRow: (row: ShopProductVariation) => row.variation
        },
        {
            header: "Buying Price",
            accessor: "buying_price",
            renderRow: (row: ShopProductVariation) => `ksh.${row.buying_price}`
        },
        {
            header: "Selling Price",
            accessor: "selling_price",
            renderRow: (row: ShopProductVariation) => `ksh.${row.selling_price}`
        },
        {
            header: "Recommended Price",
            accessor: "recomended_price",
            renderRow: (row: ShopProductVariation) => `ksh.${row.recomended_price}`
        }, 
        {
            header: "Profit %",
            accessor: "recomended_price",
            renderRow: (row: ShopProductVariation) => <span className={`badge ${((row.selling_price as number) - (row.buying_price as number)) > 0 ? 'bg-success' : 'bg-danger'} `}>{ ((((row.selling_price as number) - (row.buying_price as number)) / (row.buying_price as number)) * 100).toFixed(2) }%</span>
        },
        {
            header: "Sold",
            accessor: "sold",
            renderRow: (row: ShopProductVariation) => row.sold
        }
    ]

    const slickSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 500,
    };
    
    return (
     <>
        {
        (product && !isLoading) ? (
            <div className="row">
        <div className="col-md-12">

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-5">
                            <Slider {...slickSettings}>
                                {
                                    product.images?.map((image, index) => (
                                        <img key={index} src={`/${image.url}`} className="w-100 rounded" alt={ product.name } />
                                    ))
                                }
                            </Slider>
                            <div></div>
                        </div>
                        <div className="col-md-7">
                            <div className="d-flex justify-content-between align-items-start mt-4 mt-md-0">
                                <div>
                                    <div className="small text-muted mb-2">{ product.category_name }</div>
                                    <h2>{ product.name }</h2>
                                    <p>
                                        <span className="badge bg-success">In stock</span>
                                    </p>
                                    <p>{ product.description }</p>
                                    <div className="d-flex gap-2 mb-3">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-muted"></i>
                                        <span>(3)</span>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-icon flex-shrink-0">
                                    <i className="bi bi-heart-fill text-danger"></i> 50
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Descriptions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (3)</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="sss-tab" data-bs-toggle="tab" href="#sss" role="tab" aria-controls="sss" aria-selected="false">SSS</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                            <Table columns={columns} data={product.variations ?? []} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
        ) : (<>Loading ....</>)
     }
     </>
  )
}

export default SingleShopProduct