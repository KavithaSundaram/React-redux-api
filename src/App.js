import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

function App() {
const[fake,setFake]=useState([])
console.log(fake)
useEffect(()=>{
  fakestore()
},[])

  const fakestore=async()=>{
    const response=await fetch("https://fakestoreapi.com/products")
    //console.log(response)
    const jsonData=await response.json()
    //console.log(jsonData)
    setFake(jsonData)
  }
  //fakestore()
  return (
    <>
    <h2>Fake Api store</h2>
    <div className="container">
      <div className="row">
      {fake.map((values)=>{
        return(
          <>
            <div className="col-sm-12 col-lg-4 col-md-6">
              <div className="box">
                <div className="content">
                  <h5>{values.title}</h5>
                  <p>{values.description}</p>
                  <img src={values.image} alt="" />
                </div>
              </div>
            </div>
          </>
        )
      })}
      </div>
    </div>
    </>  
  );
}

export default App;
