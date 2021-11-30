import React from 'react'

function ProductCard(props) {
    return(
        /*<div className="border mb-4 rounded overflow-hidden">
            <div
                style={{
                        "backgroundImage": `url('${props.item.avatar[2]})`
                }}
                className="w-full h-64 bg-blue bg-cover"
            >
            </div>
        </div>*/
        <div>
            {props.item.avatar}
        </div>
    )
}

export default ProductCard