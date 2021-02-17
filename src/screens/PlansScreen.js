import React, { useState, useEffect } from 'react'
import { selectUser } from '../features/userSlice'
import {useSelector} from 'react-redux'
import db from '../firebase'
import './PlansScreen.css'
import { loadStripe } from '@stripe/stripe-js'


function PlansScreen() {

    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)
    const [subscription, setSubscription] = useState(null)

    
    useEffect(() => {
        db.collection("customers")
        .doc(user.uid)
        .collection("subscriptions")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
            })
        })
    }, [user.uid])



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
    console.log(subscription)

    const loadCheckout = async (priceId) => {
        const docRef = db
        .collection('customers')
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        }) 

        ;(await docRef).onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data()

            if(error){
                // show error to the customer 
                alert(`An error occured: ${error.message}`)
            }

            if(sessionId){
                // we have a session, let's redirect to checkout
                // init stripe 
                const strip = await loadStripe('pk_test_51IMjSgFD1vi8kOZndU6uKoUNtpOGN2FiToB1rciL7SLeZUiawZXEAvCH2MM6BgWIDwa1t9Wj5OibZRJlIsuP7cS5002h9IWpMP')
                strip.redirectToCheckout({ sessionId })
            }
        })
    }


    return (
        
        <div className="plansScreen">
            <br/>
            {subscription && <p>Renewal Date: { new Date(subscription?.current_period_end * 1000).toLocaleDateString() } </p>}
            { Object.entries(products).map(([productId, productData]) => {
                // TODO add some logic to check if the user subscription is active
                const isCurrentPackage = productData.name
                ?.toLowerCase()
                .includes(subscription?.role)

                return (
                    <div
                        key={productId}
                        className={`${isCurrentPackage && "plansScreen__plan--disabled"} plansScreen__plan`}>
                        <div className="plansScreen__info">
                            <h5>{ productData.name }</h5>
                            <h6>{ productData.description }</h6>
                        </div>

                        
                        <button 
                            onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                                { isCurrentPackage ? 'Current Package' : 'Subscribe'}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen
