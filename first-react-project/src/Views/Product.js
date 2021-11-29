import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
//import { useParams } from 'react-router'   --for dynamic url

function Product() {
    //const {id} = useParams() --for dynamic url
    //const url = `https://reqres.in/api/users/${id}` --for dynamic url
    const url = 'https://reqres.in/api/users/2'
    //const [product, setProduct] = useState(null)  --before adding loader
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null
 
    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                //setProduct(response.data) --before adding loader
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])
/*
    if(product){
        return(
            <div>
                <h1>{product.data.first_name}</h1>
                <h1>name</h1>
            </div>
        )
    }
*/  

    if(product.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }   

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
            content =
                <div>
                    <h1 className="text-2xl font-bold mb-3"
                    >
                        {product.data.data.first_name}
                    </h1>
                    <div>
                        <img
                            src={product.data.data.avatar}
                            alt={product.data.data.last_name}
                        />
                    </div>
                    <div className="font-bold text-xl mb-3">
                        ID - {product.data.data.id}
                    </div>
                    <div>
                        {product.data.support.text}
                    </div>
                </div>
    }



    return(
        /* or 
        <div>
            This is outer Product Page.
        </div>
        */
        
        <div>
            {content}
        </div>

        
    )
}

export default Product