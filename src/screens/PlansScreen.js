import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function PlansScreen() {
  //   const [products, setProducts] = useState([]);
  //   const user = useSelector(selectUser);
  //   const subscription = ([subscription, setSubscription] = useState(null));

  //   useEffect(() => {
  //     db.collection("costumers")
  //       .doc(user.uid)
  //       .collection("subscription")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach(async (subscription) => {
  //           setSubscription({
  //             role: subscription.data().role,
  //             current_period_end: subscription.data().current_period_end.seconds,
  //             current_period_start:
  //               subscription.data().current_period_start.seconds,
  //           });
  //         });
  //       });
  //   }, [user.uid]);

  //   useEffect(() => {
  //     db.collection("products")
  //       .where("active", "==", true)
  //       .get()
  //       .then((querySnapshot) => {
  //         const products = {};
  //         querySnapshot.forEach(async (productDoc) => {
  //           products[productDoc.id] = productDoc.data();
  //           const priceSnap = await productDoc.ref.collection("prices").get();
  //           priceSnap.docs.forEach((price) => {
  //             products[productDoc.id].prices = {
  //               priceId: priceSnap.id,
  //               priceData: priceSnap.data(),
  //             };
  //           });
  //         });
  //         setProducts(products);
  //       });
  //   }, []);

  //   console.log(products);
  //   console.log(subscription);

  //   const loadCheckout = async (priceId) => {
  //     const docRef = await db
  //       .collection("costumers")
  //       .doc(user.uid)
  //       .collection("")
  //       .add({
  //         price: priceId,
  //         successUrl: window.location.origin,
  //         cancelUrl: window.location.origin,
  //       });

  //     docRef.onSnapshot(async (snap) => {
  //       const { error, sessionId } = snap.data();

  //       if (error) {
  //         alert(`An error occured: ${error.message}`);
  //       }

  //       if (sessionId) {
  //         const stripe = await loadStripe("xxxxxx");
  //         stripe.redirectToCheckout({ sessionId });
  //       }
  //     });
  //   };
  return (
    <div className="plansScreen">
      {/* {Object.entries(products).map(([productId, productData]) => {
        // Add logic to check if user subscription is active
        const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);

        return (
          <div className="plansScreen__plan">
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
            {isCurrentPackage ? "Current Package" : "subscribe"}
              Subscribe
            </button>
          </div>
        );
      })} */}
      PlansScreen
    </div>
  );
}

export default PlansScreen;
