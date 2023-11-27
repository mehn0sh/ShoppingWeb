import { useState ,useEffect } from "react";
export default function useLocalStorage(){
    const [cart, setcart] = useState(()=>JSON.parse(localStorage.getItem('Cart'))  ||[]);

    useEffect(()=>{
        localStorage.setItem('Cart',JSON.stringify(cart) )
      },[cart])

      return [cart,setcart]
}