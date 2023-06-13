function HowItWorks() {
  return (
    <>
      <section className='page-banner'>
        <div className='container'>
          <div className='row align-items-center justify-content-center page-bn-height'>
            <div className='col-12 text-center'>
              <h3>How It Works</h3>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb site-breadcumb-1 justify-content-center'>
                  <li className='breadcrumb-item'>
                    <a className='' href='/'>
                      Home
                    </a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    How It Works
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='health-guide'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src='https://binasta.co.ke/main/images/how-it-works.jpg'
                data-src='/main/images/how-it-works.jpg'
                className='img-fluid'
                alt=''
              />
            </div>
            <div className='col-md-6'>
              <h3 className='section-title'>Binasta compensation plan</h3>
              <p>
                By selling high quality Binasta products, affiliates have a
                chance to earn passive income and grow their income based on
                their own initiative and hard work.
              </p>
              <p>The company’s compensation plan is based on a binary plan.</p>
              <p>
                The company provides free training and in-depth products
                informations to the affiliates.
              </p>
              <p>
                Affiliates can join our free web seminars and our many online
                forums to acquire more knowledge on good nutrition and personal
                care.
              </p>
              <p>
                We hold team building activities to bring together our
                affiliates and share the smiles. Bonuses and coupons include:{' '}
              </p>
              <ul>
                <li>volume bonuses</li>
                <li>anniversary bonuses</li>
                <li>leadership bonuses</li>
                <li>lifestyle bonuses</li>
                <li>entertainment bonuses (stars bonus)</li>
              </ul>
              <p></p>
              <h3 className='section-title'>BINAPOINTS</h3>
              <p>
                {' '}
                Every stage in the growth of your business is measured by
                binapoints. These are transparent trackers for measuring your
                progression along the path to being a fully fledged global
                ambassador with all the accompanying rewards{' '}
              </p>
              <h3 className='section-title'>Stars Products</h3>
              <p>
                {' '}
                We aim for the stars! The Binasta Nutrition product range has
                been designed to support your wellness goals – no matter how
                simple or complex they might be. We deal with the best market
                leading products to make sure you achieve optimal results, be it
                in weight management, skin and hair care, or specialized
                nutrition. Take the first step towards a better and healthier
                you today!{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
