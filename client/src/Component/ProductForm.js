import React,{useState} from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [product,setProduct] = useState({name:"",description:"",price:"",category:""})
    const productHandler= (e)=>{
        const {name , value} = e.target;
        setProduct({...product,[name]:value})
    }

    const insertProduct = async ()=>{
        try{
            const response = await axios.post('http://localhost:5000/addproduct',product)
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }

    }

  return (
    <form onSubmit={insertProduct}>
        <h1 className='mt-4'>Add Product</h1>
  <div className="mb-3">
  <div className="row mb-3">
    <div className="col-md-9">
    <input type="text" className="form-control" name='name' value={product.name} onChange={productHandler} placeholder='Enter Product Name'/>
    </div>
    </div>
    </div>
    <div className="mb-3">
    <div className="row mb-3">
    <div className="col-md-9">
    <input type="text" className="form-control" name='description' value={product.description} onChange={productHandler} placeholder='Enter Product Description'/>
    </div>
    </div>
    </div>
    <div className="mb-3">
    <div className="row mb-3">
    <div className="col-md-9">
    <input type="Number" className="form-control" name='price' value={product.price} onChange={productHandler} placeholder='Enter Product Price'/>
    </div>
    </div>
    </div>
    <div className="mb-3">
    <div className="row mb-3">
    <div className="col-md-9">
    <input type="text" className="form-control" name='category' value={product.category} onChange={productHandler} placeholder='Enter Product Category'/>
    </div>
    </div>
    </div>
  
  <button type="submit" style={{width:'120px', fontWeight: 'bold'}} className="btn btn-info">Submit</button>
</form>
  )
}

export default ProductForm
