import { Outlet } from "react-router-dom"

function GuestLayout() {
  document.body.classList.add("auth");
  return (
    <Outlet />
  )
}

export default GuestLayout;