import React, { useState, useEffect } from 'react'
import db from '../firebase'
import './PlansScreen.css'

function PlansScreen() {

    const [products, setProducts] = useState([])

    // fetching product information from firebase
    useEffect(() => {
        db.collection('products').where("active", "==", true)
        .get()
        .then((querySnapshot) => {
            const products = {}

            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data()
                const priceSnap = await productDoc.ref.collection("prices").get();

                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            })
            
            setProducts(products)
        })

    }, [])


    console.log(products)


    return (
        <div className="plansScreen">
            { Object.entries(products).map(([productId, productData]) => {
                // TODO add some logic to check if the user subscription is active


                return (
                    <div className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>{ productData.name }</h5>
                            <h6>{ productData.description }</h6>
                        </div>

                        <button>Subscription</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen
