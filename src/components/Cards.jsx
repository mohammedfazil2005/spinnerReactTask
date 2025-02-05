import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'

const Cards = () => {
    const [data,setData]=useState([])
    const [error,setError]=useState(false)

    const fetchData=async()=>{
        try {
        const serverResponce=await fetch('https://fakestoreapi.com/products')
        if(!serverResponce.ok){
            setError(true)
        }
        const dataAPI=await serverResponce.json()
        setData(dataAPI)
        setError(false)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(()=>{
       fetchData() 
    },error)


    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {error?<div className='d-flex justify-content-center'>
                        <CircularProgress size={130}/>
                    </div>:data.map((a)=>(
                         <div className="col mb-5">
                         <div className="card h-100">
    
                             <img className="card-img-top" src={a.image} alt="..." />
    
                             <div className="card-body p-4">
                                 <div className="text-center">
    
                                     <h5 className="fw-bolder">{a.title}</h5>
    
                                     ₹{a.price}
                                 </div>
                             </div>
    
                             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                 <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                             </div>
                         </div>
                     </div>
                    ))}
                    

                    </div>
                </div>
            </section>
       
        </div>
    )
}

export default Cards
