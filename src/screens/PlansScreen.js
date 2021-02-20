import React, { useState, useEffect } from 'react'
import db from '../firebase'
import './PlansScreen.css'

function PlansScreen() {

    const [products, setProducts] = useState([])

    // fetching product information from firebase
    useEffect(() => {
        db.collection('products')
    }, [])



    return (
        <div>
            <div className="PlansScreen__plan">
                <div className="planScreen__info">
                    <h5>Annual</h5>
                    <h6>Monthly</h6>
                </div>
                
                <button>
                Subscribe
                </button>
            </div>
        </div>
    )
}

export default PlansScreen
