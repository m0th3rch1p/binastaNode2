import { Link } from "react-router-dom"

function PageHeader() {
    return (
        <>
            <div className='page-header mt-30 mb-50'>
                <div className='container'>
                    <div className='archive-header'>
                        <div className='row align-items-center'>
                            <div className='col-xl-3'>
                                <h1 className='mb-15'>Snack</h1>
                                <div className='breadcrumb'>
                                    <Link to='/' rel='nofollow'>
                                        <i className='fi-rs-home mr-5'></i>Home
                                    </Link>
                                    <span></span> Shop
                                </div>
                            </div>
                            <div className='col-xl-9 text-end d-none d-xl-block'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHeader
