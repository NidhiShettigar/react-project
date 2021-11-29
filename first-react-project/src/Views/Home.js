import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'

function Home() {
    const url = 'https://reqres.in/api/users?page=2'
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    
    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    let content = null

    if(products.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }   

    if(products.loading){
        content = <Loader/>
    }

    
    if(products.data){
        content = products.data.data.map((items,key) =>
            <div>
                {items.email}
            </div>
        )
    }
//8:10
    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Software Engineers
            </h1>
            {content}
        </div>
    )
}

export default Home