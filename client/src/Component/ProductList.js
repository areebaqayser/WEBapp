import React,{useEffect, useState} from 'react'
import axios from 'axios'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [product,setProduct] = useState({id:"",name:"",description:"",price:"",category:""})
    const productHandler= (e)=>{
        const {name , value} = e.target;
        setProduct({...product,[name]:value})
    }
  const fetchedProducts = async() =>{
    try{
      const response = await axios.get('http://localhost:5000/readAllproduct')
      setProducts(response.data)
    } catch(error){
      console.log(error)
    }
  }
  const deleteHandler = async(id) =>{
    try{
      const response = await axios.delete(`http://localhost:5000/delete/${id}`)
      console.log(response)
      fetchedProducts();
    } catch(error){
      console.log(error)
    }
   
  }
  useEffect(()=>{
    fetchedProducts()
  },[])
const updateProduct = (id,name,description,price,category) =>{
  setProduct({
    _id:id,name,description,price,category
  })
}
const submitupdatedProduct = async (id) => {
  try{
    const response = await axios.put(`http://localhost:5000/update/${id}`,product)
    console.log(response)
    fetchedProducts()
  }catch(error){
    console.log(error)
  }
}
  return (
    <>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel" style={{fontWeight: 'bold'}}>Edit Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
    <input type="text" className="form-control" name='name' value={product.name} onChange={productHandler} placeholder='Enter Product Name'/>
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" name='description' value={product.description} onChange={productHandler} placeholder='Enter Product Description'/>
    </div>
    <div className="mb-3">
    <input type="Number" className="form-control" name='price' value={product.price} onChange={productHandler} placeholder='Enter Product Price'/>
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" name='category' value={product.category} onChange={productHandler} placeholder='Enter Product Category'/>
    </div>
  
  <button type="submit" onClick={()=>submitupdatedProduct(product._id)} style={{width:'120px', fontWeight: 'bold'}} className="btn btn-info">Submit</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    <div className='mt-5'>
      <h1  className='mt-4'>Product List</h1>
    <ul className='list-group'>
      {
        products.map((product)=>{
          return <li key={product._id} className="list-group-item list-group-item-info">{product.name}-{product.price} <i className="fa-solid fa-pen-to-square" onClick={()=> {updateProduct(product._id,product.name,product.description,product.price,product.category)}} data-bs-toggle="modal" data-bs-target="#exampleModal"></i> <i className="fa-solid fa-trash-can" onClick={()=>{deleteHandler(product._id)}}></i> </li>
        })
      }
    </ul>
    </div>
    </>
  )
}

export default ProductList
