import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/user.jsx';
import axios from 'axios';


export default function Home() {
     const{isUserName , setIsUserName} = useContext(UserContext);
     const [product , setProduct] = useState([]);
     
      const getProduct= async()=>{
        try{
          const{data} = await axios.get('https://dummyjson.com/products');
          setProduct(data.products);

        }catch(error){
          console.log(error)

        }
      }
        
    useEffect(()=>{
     getProduct();
    },[])

     
  
  return (
    <>
    <div className="container">
      <div className="row">
        {
          product.map((prod)=>{
            return <div className="col-3 mt-2">
              <h3>{prod.title}</h3>
              <img src={prod.thumbnail} />

            </div>

          })
        }

      </div>
    </div>
    
    </>
  )
}
