import React from 'react'

function NotFoundPage() {
  return (
    <>
      <div className="row mb-4">
        <div className="col-md-4 m-auto">
            <figure>
                <img className="img-fluid" src="https://vetra.laborasyon.com/assets/svg/404.svg" alt="image" />
            </figure>
        </div>
    </div>
    <h2 className="display-6">Page not found</h2>
    <p className="text-muted my-4">The page you want to go is not currently available</p>
    </>
  )
}

export default NotFoundPage