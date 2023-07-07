import { Link } from "react-router-dom"

function Sidebar () {
  return (
    <div className='menu' data-v-7588be3f=''>
      <div className='menu-header' data-v-7588be3f=''>
        <Link className='menu-header-logo' to='/' data-v-7588be3f=''>
          <img
            src='/build/assets/flogo.d291505f.png'
            alt='logo'
            data-v-7588be3f=''
          />
        </Link>
        <Link
          to='/dashboard'
          className='btn btn-sm menu-close-btn'
          data-v-7588be3f=''
        >
          <i className='bi bi-x' data-v-7588be3f=''></i>
        </Link>
      </div>
      <div
        className='menu-body'
        tabIndex={2}
        data-v-7588be3f=''
        style={{
          overflow: 'scroll',
          outline: 'none',
        }}
      >
        <ul data-v-7588be3f=''>
          <li className='menu-divider' data-v-7588be3f=''>
            My Dashboard
          </li>
          <li data-v-7588be3f=''>
            <Link className='' to='/dashboard' data-v-7588be3f=''>
              <span className='nav-link-icon' data-v-7588be3f=''>
                <i className='bi bi-house' data-v-7588be3f=''></i>
              </span>
              <span data-v-7588be3f=''>Dashboard</span>
            </Link>
          </li>
          <li data-v-7588be3f=''>
            <Link className='' to='/addresses' data-v-7588be3f=''>
              <span className='nav-link-icon' data-v-7588be3f=''>
                <i className='bi bi-globe' data-v-7588be3f=''></i>
              </span>
              <span data-v-7588be3f=''>My Addresses</span>
            </Link>
          </li>
          <li data-v-7588be3f=''>
            <Link className='active' to='/shop' data-v-7588be3f=''>
              <span className='nav-link-icon' data-v-7588be3f=''>
                <i className='bi bi-gear' data-v-7588be3f=''></i>
              </span>
              <span data-v-7588be3f=''>Add Products</span>
            </Link>
          </li>
          <li className='menu-divider' data-v-7588be3f=''>
            My Shop
          </li>
          <li data-v-7588be3f=''>
            <Link className='' to='/shop_products' data-v-7588be3f=''>
              <span className='nav-link-icon' data-v-7588be3f=''>
                <i className='bi bi-card-list' data-v-7588be3f=''></i>
              </span>
              <span data-v-7588be3f=''>Shop Products</span>
            </Link>
          </li>
          <li data-v-7588be3f=''>
            <Link className='' to='/customers' data-v-7588be3f=''>
              <span className='nav-link-icon' data-v-7588be3f=''>
                <i className='bi bi-box' data-v-7588be3f=''></i>
              </span>
              <span data-v-7588be3f=''>Customers</span>
            </Link>
          </li>
          <li data-v-7588be3f=''>
            <Link className='' to='/customer_addresses' data-v-7588be3f=''>
              <span className='nav-link-icon' data-v-7588be3f=''>
                <i className='bi bi-percent' data-v-7588be3f=''></i>
              </span>
              <span data-v-7588be3f=''>Customer Addresses</span>
            </Link>
          </li>
          <li data-v-7588be3f=''>
            <Link className='' to='/customer_orders' data-v-7588be3f=''>
              <span className='nav-link-icon' data-v-7588be3f=''>
                <i className='bi bi-percent' data-v-7588be3f=''></i>
              </span>
              <span data-v-7588be3f=''>Customer Orders</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        id='ascrail2001'
        className='nicescroll-rails nicescroll-rails-vr'
        data-v-7588be3f=''
        style={{
          width: '8px',
          zIndex: 998,
          cursor: 'default',
          position: 'absolute',
          top: '98px',
          left: '342px',
          height: '346px',
          opacity: '0',
          display: 'block',
        }}
      >
        <div
          className='nicescroll-cursors'
          data-v-7588be3f=''
          style={{
            position: 'relative',
            top: '0px',
            float: 'right',
            width: '6px',
            height: '397px',
            backgroundColor: 'rgb(66, 66, 66)',
            border: '1px solid rgb(255, 255, 255)',
            backgroundClip: 'padding-box',
            borderRadius: '5px',
          }}
        ></div>
      </div>
      <div
        id='ascrail2001-hr'
        className='nicescroll-rails nicescroll-rails-hr'
        data-v-7588be3f=''
        style={{
          height: '8px',
          zIndex: 998,
          top: '446px',
          left: '0px',
          position: 'absolute',
          cursor: 'default',
          display: 'none',
          width: '342px',
          opacity: 0,
        }}
      >
        <div
          className='nicescroll-cursors'
          data-v-7588be3f=''
          style={{
            position: 'absolute',
            top: '0px',
            height: '6px',
            width: '350px',
            backgroundColor: 'rgb(66, 66, 66)',
            border: '1px solid rgb(255, 255, 255)',
            backgroundClip: 'padding-box',
            borderRadius: '5px',
            left: '0px',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
