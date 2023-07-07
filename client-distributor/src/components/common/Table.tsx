import React from "react";

export interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  renderRow: (row: T) => any
}

export interface TableProps<T> {
  data: T[] | null;
  columns: TableColumn<T>[];
}

const Table = <T extends Record<string, any>>({ data, columns }: TableProps<T>) => {
  return (
    <div className="table-responsive" tabIndex={1} style={{ overflow: "hidden", outline: "none" }}>
      <table className="table table-custom table-lg mb-0" id="products">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.header}>{column.header}</th>
            ))}
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.header}>{column.renderRow(item)}</td>
                ))}
                <td className="text-end">
                  <div className="d-flex">
                    <div className="dropdown ms-auto">
                      <a href="#" data-bs-toggle="dropdown" className="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">Action</a>
                        <a href="#" className="dropdown-item">Another action</a>
                        <a href="#" className="dropdown-item">Something else here</a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1}><h5>Loading...</h5></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;