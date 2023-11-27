import React ,{useState,useContext,createContext,useEffect}from 'react'


export const ProductContext=createContext()

const ProductProvider = ({children}) => {
const [products, setproducts] = useState([]);
const [isLoading, setisLoading] = useState(false);
useEffect(() => {
  const fetchProducts= async ()=>{
    setisLoading(true)
    try {
      const response= await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setproducts(data)
      
    } catch (error) {
      
    }finally{
      setisLoading(false)
    }

  }

 fetchProducts()
}, [])

return <ProductContext.Provider value={{products,isLoading}}>
{children}
  </ProductContext.Provider>
}

export default ProductProvider