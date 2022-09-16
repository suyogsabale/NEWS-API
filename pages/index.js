import { useEffect, useState } from 'react'
import axios from 'axios';
import Image from 'next/image';
import Header from '../components/Header'


export default function Home() {
  const [data,setData] = useState([]);
  // GEt data from NEWS API
  async function getdata1(){
    console.log("I am here");
    const str = "messi";
    const url = `https://newsapi.org/v2/everything?q=${str}&apiKey=8f00b783f8954596834008bdbd4fc1f4`;
    try{
      const response = await axios.get(url);
      console.log(response.data);
      let array = [];
      response.data.articles.map((item,index)=>{
        array.push(item);
      })
      array = array.slice(0,10);
      setData(array);
  }
  catch(e){
      console.log("Error"+e);
  }
  }
  useEffect(()=>{
    getdata1();
  },[])

  return (
    <div style={{display:'inline-block'}} > 
      <Header/>
      {
        data.map((item,index)=>(
         
          <>
          <div className="card m-5" style={{width: '18rem',display: 'flex',justifyContent:'center',alignItems:'center',float: 'left'}}>
          <img src={item.urlToImage} className="card-img-top img-thumbnail " width="500" height="500" style={{objectFit:'contain'}} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              {/* <p className="card-text">Author:{item.author}</p> */}
              <a href={item.url} className="btn btn-primary" target={"_blank"} >Read more</a>
            </div>
        </div>
          </>
        ))
      }
    </div>
  )
}