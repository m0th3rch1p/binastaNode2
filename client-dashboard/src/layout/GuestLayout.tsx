import { Outlet } from "react-router";

function GuestLayout() {
    document.body.classList.add('auth');
       
    return (
        <>
            <Outlet />
        </>
    )
}

export default GuestLayout