import 'devextreme/dist/css/dx.dark.css';
import DataGridSimpleArray from './components/with-devexpress/DataGrid/0.SimpleArray/DataGrid';
// import DataGridJson from './components/with-devexpress/DataGrid/1.Json/DataGrid';
// import DataGridCRUDOperations from './components/with-devexpress/DataGrid/2.CRUDOperations/DataGrid.tsx';
// import 'devextreme/dist/css/dx.light.css';

function App() {
  return (
    <>
      <div>
        <DataGridSimpleArray />
        {/* <DataGridJson /> */}
        {/* <DataGridCRUDOperations /> */}
      </div>
    </>
  );
}

export default App;
