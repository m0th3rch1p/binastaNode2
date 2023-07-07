import AccountMenu from '@/components/common/AccountMenu'
import DesktopHeader from '@/components/common/DesktopHeader'
import Footer from '@/components/common/Footer'
import MobileHeader from '@/components/common/MobileHeader'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <>
        <DesktopHeader />
        <MobileHeader />
        <main className="main pages">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
                    <span></span> Pages <span></span> My Account
                </div>
            </div>
        </div>
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="row">
                            <div className="col-md-3">
                                <AccountMenu />
                            </div>
                            <div className="col-md-9">
                                <div className="tab-content account dashboard-content pl-50">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        <Footer />
    </>
  )
}

export default DashboardLayout