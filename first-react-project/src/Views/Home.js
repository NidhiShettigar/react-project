import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
    //const url = 'https://reqres.in/api/users?page=2'
    
    let products = useAxiosGet(url)

    /* Replaced with hooks in HttpRequests.js file
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
    */

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
        content = products.data.map((product) =>
            <div key = { product.id}>
                <ProductCard
                    product = {product}
                />
            </div> 
        )
    }
    /*
    if(products.data){
        content = products.data.data.map((item,key) =>
            <div>
                <ProductCard
                    item = {item}
                />
            </div>
            /*<div>
                {items.email}  -- for without ProductCard.js file
            </div>//
        )
    }
*/
    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home