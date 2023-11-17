import React from "react";
import DataGrid from "devextreme-react/data-grid";
import customers from "./customers.json";

const columns = ["CompanyName", "City", "State", "Phone", "Fax"];

class DataGridJson extends React.Component {
  render() {
    return (
      <DataGrid
        dataSource={customers}
        defaultColumns={columns}
        showBorders={true}
      />
    );
  }
}

export default DataGridJson;
