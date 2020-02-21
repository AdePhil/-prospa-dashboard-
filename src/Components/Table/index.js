import React from "react";
import "./table.scss";
const Table = ({ data: { date, isExportable }, setViewTransaction }) => {
  return (
    <div className="table">
      <div className="table__heading">
        <h3>{date}</h3>
        {isExportable && (
          <div className="buttons">
            <button className="btn export-btn">
              <img src="/export.svg" alt="Export" />
              <span>Export data</span>
            </button>

            <button className="btn filter-btn">
              <img src="/filter.svg" alt="Filter" />
              <span>Filter</span>
            </button>
          </div>
        )}
      </div>

      <table className="table__container">
        <tbody>
          <tr className="tr" onClick={setViewTransaction}>
            <td className="td">
              <div className="icon" style={{ backgroundColor: "#A7E521" }}>
                <img src="/sales.svg" alt="" />
              </div>
            </td>
            <td className="td">
              <div>
                <span className="text-blue">Terry Williams</span>
                <span>sales</span>
              </div>
            </td>
            <td className="td">7:30pm</td>
            <td className="td blue">₦250,500.00</td>
          </tr>
          <tr className="tr" onClick={setViewTransaction}>
            <td className="td">
              <div className="icon">
                <img src="/house.svg" alt="" />
              </div>
            </td>
            <td className="td">
              <div>
                <span className="text-blue">Rental Company</span>
                <span>Office Rent</span>
              </div>
            </td>
            <td className="td">7:30pm</td>
            <td className="td blue">₦250,500.00</td>
          </tr>
          <tr className="tr" onClick={setViewTransaction}>
            <td className="td">
              <div className="icon" style={{ backgroundColor: "#74D4F0" }}>
                <img src="/plane.svg" alt="" />
              </div>
            </td>
            <td className="td">
              <div>
                <span className="text-blue">Terry Williams</span>
                <span>sales</span>
              </div>
            </td>
            <td className="td">7:30pm</td>
            <td className="td blue">₦250,500.00</td>
          </tr>
          <tr className="tr" onClick={setViewTransaction}>
            <td className="td">
              <div className="icon">
                <img src="/house.svg" alt="" />
              </div>
            </td>
            <td className="td">
              <div>
                <span className="text-blue">Terry Williams</span>
                <span>sales</span>
              </div>
            </td>
            <td className="td">7:30pm</td>
            <td className="td blue">₦250,500.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
