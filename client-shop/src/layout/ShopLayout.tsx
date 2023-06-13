import DesktopHeader from "@/components/common/DesktopHeader"
import MobileHeader from "@/components/common/MobileHeader"
import Footer from "@/components/common/Footer"

import "@/assets/shop/css/plugins/animate.min.css"
import "@/assets/shop/css/main17e6.css"
import { Outlet } from "react-router-dom"

function ShopLayout() {
  return (
    <>
        <DesktopHeader />
        <MobileHeader />
        <main className="main">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default ShopLayout;