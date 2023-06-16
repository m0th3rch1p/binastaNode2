import React from 'react'

function Table({columns, data, actions = null}: {columns: string[], data: string[], actions: [string, Function][] | null}) {
  return (
    <div className="table-responsive" tabIndex={1} style={
        {
            overflow: 'hidden',
            outline: "none"
        }
    }>
        <table className="table table-custom table-lg mb-0" id="customers">
            <thead>
            <tr>
                {
                    columns.map((column) => (
                        <th>{ column }</th>
                    ))
                }
                actions ?? <th className="text-end">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                {
                    data.map((value) => (
                        <td>{ value }</td>
                    ))   
                }
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#1</a>
                </td>
                <td>
                    <div className="avatar avatar-info">
                        <span className="avatar-text rounded-circle">A</span>
                    </div>
                </td>
                
                <td>apond0@nytimes.com</td>
                <td>Brazil</td>
                <td>1/11/2021</td>
                <td>
                    <span className="badge bg-success">Active</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#2</a>
                </td>
                <td>
                    <div className="avatar avatar-secondary">
                        <span className="avatar-text rounded-circle">B</span>
                    </div>
                </td>
                <td>Billi Cicero</td>
                <td>bcicero1@wiley.com</td>
                <td>Indonesia</td>
                <td>11/20/2020</td>
                <td>
                    <span className="badge bg-danger">Passive</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#3</a>
                </td>
                <td>
                    <div className="avatar avatar-warning">
                        <span className="avatar-text rounded-circle">T</span>
                    </div>
                </td>
                <td>Thorpe Hawksley</td>
                <td>thawksley2@senate.gov</td>
                <td>France</td>
                <td>10/20/2020</td>
                <td>
                    <span className="badge bg-success">Active</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#4</a>
                </td>
                <td>
                    <div className="avatar avatar-danger">
                        <span className="avatar-text rounded-circle">H</span>
                    </div>
                </td>
                <td>Horacio Versey</td>
                <td>hversey3@illinois.edu</td>
                <td>China</td>
                <td>1/15/2021</td>
                <td>
                    <span className="badge bg-success">Active</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#5</a>
                </td>
                <td>
                    <div className="avatar avatar-success">
                        <span className="avatar-text rounded-circle">R</span>
                    </div>
                </td>
                <td>Raphael Dampney</td>
                <td>rdampney4@reference.com</td>
                <td>Portugal</td>
                <td>8/17/2020</td>
                <td>
                    <span className="badge bg-success">Active</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#6</a>
                </td>
                <td>
                    <div className="avatar avatar-info">
                        <span className="avatar-text rounded-circle">A</span>
                    </div>
                </td>
                <td>Arlan Pond</td>
                <td>apond0@nytimes.com</td>
                <td>Brazil</td>
                <td>1/11/2021</td>
                <td>
                    <span className="badge bg-success">Active</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#7</a>
                </td>
                <td>
                    <div className="avatar avatar-secondary">
                        <span className="avatar-text rounded-circle">B</span>
                    </div>
                </td>
                <td>Billi Cicero</td>
                <td>bcicero1@wiley.com</td>
                <td>Indonesia</td>
                <td>11/20/2020</td>
                <td>
                    <span className="badge bg-danger">Passive</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#8</a>
                </td>
                <td>
                    <div className="avatar avatar-warning">
                        <span className="avatar-text rounded-circle">T</span>
                    </div>
                </td>
                <td>Thorpe Hawksley</td>
                <td>thawksley2@senate.gov</td>
                <td>France</td>
                <td>10/20/2020</td>
                <td>
                    <span className="badge bg-success">Active</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#9</a>
                </td>
                <td>
                    <div className="avatar avatar-danger">
                        <span className="avatar-text rounded-circle">H</span>
                    </div>
                </td>
                <td>Horacio Versey</td>
                <td>hversey3@illinois.edu</td>
                <td>China</td>
                <td>1/15/2021</td>
                <td>
                    <span className="badge bg-success">Active</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox" />
                </td>
                <td>
                    <a href="#">#10</a>
                </td>
                <td>
                    <div className="avatar avatar-success">
                        <span className="avatar-text rounded-circle">R</span>
                    </div>
                </td>
                <td>Raphael Dampney</td>
                <td>rdampney4@reference.com</td>
                <td>Portugal</td>
                <td>8/17/2020</td>
                <td>
                    <span className="badge bg-success">Active</span>
                </td>
                <td className="text-end">
                    <div className="d-flex">
                        <div className="dropdown ms-auto">
                            <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item">Show</a>
                                <a href="#" className="dropdown-item">Edit</a>
                                <a href="#" className="dropdown-item">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table