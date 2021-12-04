import React from 'react'
import Navigate from './Navigation'

function Header() {
    return(
        <header className="border-b p-3 flex justify-between items-centre">
            <span className="font-bold">
                PurchaseStore
            </span>

            <Navigate/>
        </header>
    )
}

export default Header