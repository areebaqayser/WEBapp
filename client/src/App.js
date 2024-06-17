import './App.css';
import ProductList from './Component/ProductList';
import ProductForm from './Component/ProductForm';

function App() {
  return (
    <>
      <div className='container border'>
        <h2 className="text-center my-4">~Stationery Studio~</h2>
        <div className="row">
          <div className='col-md-3'></div>
          <div className="col-md-8"><ProductForm /></div>
          <div className='col-md-1'></div>
          <div className="col-md-5"><ProductList /></div>
        </div>
      </div>
    </>
  );
}

export default App;
