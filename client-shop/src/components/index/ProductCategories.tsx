import Slider from "react-slick";
import useFetchProductCategories from "@/hooks/useFetchProductCategories";
import Loader from "../common/Loader";
import { Link } from "react-router-dom";

function ProductCategories() {
    const { categories, isLoading, isSuccess, isError } = useFetchProductCategories();

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        loop: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
    };

  return (
    <section className="popular-categories section-padding">
            <div className="container wow animate__animated animate__fadeIn">
                <div className="section-title">
                    <div className="title">
                        <h3>Featured Categories</h3>
                    </div>
                    <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows"></div>
                </div>
                <div className="carausel-10-columns-cover position-relative">
                    <div className="carausel-10-columns" id="carausel-10-columns">
                        <Slider { ...settings }>
                            {
                                categories?.map(category => (
                                    <div className="card-2 bg-9 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        <figure className="img-hover-scale overflow-hidden">
                                            <Link to={`/shop?cat=${category.slug}`}><img src={category.image_path} alt="" /></Link>
                                        </figure>
                                        <h6><a href="shop-grid-right.html">{ category.name }</a></h6>
                                    <span>26 items</span>
                        </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ProductCategories;