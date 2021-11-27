import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { useParams } from 'react-router'   --for dynamic url

function Product() {
    //const {id} = useParams() --for dynamic url
    //const url = `https://reqres.in/api/users/${id}` --for dynamic url
    const url = 'https://reqres.in/api/users/2'
    const [product, setProduct] = useState(null)
    let content = null
 
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
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
    if(product){
            content =
                <div>
                    <h1 className="text-2xl font-bold mb-3"
                    >
                        {product.data.first_name}
                    </h1>
                    <div>
                        <img
                            src={product.data.avatar}
                            alt={product.data.last_name}
                        />
                    </div>
                    <div className="font-bold text-xl mb-3">
                        ID - {product.data.id}
                    </div>
                    <div>
                        {product.support.text}
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