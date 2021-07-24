import React,{useEffect,useState} from 'react';
import axios from 'axios';


//const url = 'https://serv-react-api.netlify.app/api/2-basic-api'
const url = 'https://serv-react-api.netlify.app/api/3-z-complete'
//sta
const Basic = () => {
const [products,setProducts] = useState([]);

const fetchData = async () => {
 try {
  const {data} = await axios.get(url)
  setProducts(data)
 } catch (error) {
  
 }
}
useEffect(()=> {
fetchData()
},[])

 return (
  <section className='section section-center'>
   <div className='title'>
   <h2>basic setup</h2>
   <div className='title-undeline'></div>
   </div>
   <div className="products">
{products.map((product)=> {
 const {id,url,price,name} = product

 return <article className="product" key={id}>
  <img src={url} alt={name}/>
  <div className="info"></div>
  <h5>{name}</h5>
  <h5 className="price">{price}</h5>
 </article>
})}
   </div>
  
  </section>
 )
}

export default Basic
