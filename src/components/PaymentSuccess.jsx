
import React from 'react'
import { useSearchParams } from "react-router-dom"

const OrderSuccess = () => {
    const searchQuery = useSearchParams()[0]
    const referenceNum = searchQuery.get("reference")

    return (
        <div className="container my-5">
            <div className="card text-center p-5">
                <h3>Order Placed Successfully!</h3>
                <p>Your order reference number is: 
                    <div className='text-success fs-5'>
                    {referenceNum}
                    </div>
                    </p>
                <p>Thank you for choosing our restaurant.</p>
            </div>
        </div>
    )
}

export default OrderSuccess;