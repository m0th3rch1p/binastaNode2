import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { Outlet } from 'react-router-dom'

function FrontLayout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default FrontLayout