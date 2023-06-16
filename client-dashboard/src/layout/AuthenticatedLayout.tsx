import { Outlet } from 'react-router-dom'

import PageHeader from "@/components/common/PageHeader"
import Sidebar from "@/components/common/Sidebar"
import Footer from '@/components/common/Footer'

function AuthenticatedLayout() {
  document.body.classList.remove("auth");
  return (
    <>
        <Sidebar />
        <div className="layout-wrapper">
            <PageHeader />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    </>
  )
}

export default AuthenticatedLayout