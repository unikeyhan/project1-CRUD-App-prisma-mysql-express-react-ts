import React from "react";
import DataGrid from "devextreme-react/data-grid";
import { customers } from "./data.ts";

const columns = [
  "id",
  "createdAt",
  "updatedAt",
  "title",
  "isFiction",
  "datePublished",
  "description",
];
type MyProps = {};
type MyState = { fetchApiData: string; getApiData: string };
class DataGridSimpleArray extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fetchApiData: "",
      getApiData: "",
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3001/api/book/")
      .then((respo) => {
        return respo.json();
      })
      .then((data) => {
        this.setState({ fetchApiData: data });
      })
      .catch((err) => {
        err;
      });
  }
  // fetchData() {
  //   this.setState({ getApiData: this.state.fetchApiData });
  // }

  render() {
    debugger;
    return (
      <DataGrid
        dataSource={this.state.fetchApiData}
        keyExpr="id"
        defaultColumns={columns}
        showBorders={true}
      />
    );
  }
}

export default DataGridSimpleArray;
