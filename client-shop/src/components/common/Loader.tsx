
import LoaderIcon from "@/assets/images/loading.gif";
function Loader() {
  return (
    <div className="preloader-inner position-relative">
        <div className="text-center">
            <img src={ LoaderIcon } alt="" loading="lazy" />
        </div>
    </div>
  )
}

export default Loader;