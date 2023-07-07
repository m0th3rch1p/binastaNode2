import LineChart from '@/components/common/LineChart'

function Dashboard() {
    const data = [
        {
            "id": "Product Count",
            "color": "#05b171",
            "data": [
                {
                    "x": "LC7",
                    "y": 228
                },
                {
                    "x": "Rossmass",
                    "y": 78
                },
                {
                    "x": "Linamohill",
                    "y": 190
                },
                {
                    "x": "Cynohills",
                    "y": 62
                },
                {
                    "x": "Leiferax",
                    "y": 197
                },
                {
                    "x": "Prod1",
                    "y": 127
                },
                {
                    "x": "Prod2",
                    "y": 227
                },
                {
                    "x": "Prod3",
                    "y": 327
                },
            ]
        },
        {
            "id": "france",
            "color": "hsl(352, 70%, 50%)",
            "data": [
                {
                    "x": "LC7",
                    "y": 103
                },
                {
                    "x": "Rossmass",
                    "y": 281
                },
                {
                    "x": "Linamohill",
                    "y": 172
                },
                {
                    "x": "Cynohills",
                    "y": 45
                },
                {
                    "x": "Leiferax",
                    "y": 138
                },
                {
                    "x": "Prod1",
                    "y": 187
                },
                {
                    "x": "Prod2",
                    "y": 327
                },
                {
                    "x": "Prod3",
                    "y": 927
                },
            ]
        },
    ]
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col-lg-7 col-md-12">
                <div className="card widget h-100">
                    <div className="card-header d-flex">
                        <h6 className="card-title">
                            Sales Chart
                            <a href="#" className="bi bi-question-circle ms-1 small" data-bs-toggle="tooltip" title="" data-bs-original-title="Daily orders and sales" aria-label="Daily orders and sales"></a>
                        </h6>
                        <div className="d-flex gap-3 align-items-center ms-auto">

                        </div>
                    </div>
                    <div className="card-body" style={{
                        position: 'relative',
                    }}>
                        <LineChart data={data} curveType='linear' xLabel='Products' yLabel='Sale Count / Sale Amount' />
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-12">
                <div className="card widget">
                    <div className="card-header d-flex">
                        <h6 className="card-title">
                            Current Growth
                            <a href="#" className="bi bi-question-circle ms-1 small" data-bs-toggle="tooltip" title="" data-bs-original-title="Channels where your products are sold" aria-label="Channels where your products are sold"></a>
                        </h6>
                        <div className="d-flex gap-3 align-items-center ms-auto">
                            <div className="dropdown">
                                <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item">View Detail</a>
                                    <a href="#" className="dropdown-item">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{
                        position: "relative"
                    }}>
                        <div className="row text-center mb-5 mt-4">
                            <div className="col-4">
                                <div className="display-7">48%</div>
                                <div className="text-success my-2 small">
                                    <i className="bi bi-arrow-up me-1 small"></i>30.50%
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="bi bi-circle-fill text-orange me-2 small"></i>
                                    <span className="text-muted">Referals</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="display-7">30%</div>
                                <div className="text-danger my-2 small">
                                    <i className="bi bi-arrow-down me-1 small"></i>15.20%
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="bi bi-circle-fill text-cyan me-2 small"></i>
                                    <span className="text-muted">Orders</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="display-7">22%</div>
                                <div className="text-success my-2 small">
                                    <i className="bi bi-arrow-up me-1 small"></i>1.80%
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="bi bi-circle-fill text-indigo me-2 small"></i>
                                    <span className="text-muted">Customers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3 mb-3">
                    <div className="card-body">
                        <div className="d-flex mb-3">
                            <div className="display-7">
                                <i className="bi bi-award-fill"></i>
                            </div>
                            <div className="dropdown ms-auto">
                                <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item">View Detail</a>
                                    <a href="#" className="dropdown-item">Download</a>
                                </div>
                            </div>
                        </div>
                        <h4 className="mb-3">Total Binapoints</h4>
                        <div className="d-flex mb-3" style={{
                            position: "relative"
                        }}>
                            <div className="display-7">3100</div>
                            <div className="ms-auto" id="total-orders" style={{
                                minHeight: "35px",
                                height: "70px"
                            }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-2">
                    <div className="card-body">
                        <div className="d-flex mb-3">
                            <div className="display-7">
                                <i className="bi bi-currency-dollar"></i>
                            </div>
                            <div className="dropdown ms-auto">
                                <a href="#" data-bs-toggle="dropdown" className="btn btn-sm" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item">View Detail</a>
                                    <a href="#" className="dropdown-item">Download</a>
                                </div>
                            </div>
                        </div>
                        <h4 className="mb-3">Total Profits</h4>
                        <div className="d-flex mb-3" style={{
                            position: "relative"
                        }}>
                            <div className="display-7">ksh.37459,00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard