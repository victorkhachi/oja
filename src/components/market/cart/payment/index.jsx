import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Back from "../../../images/svg/Back";
import { Order } from "../../extras/userContext";
import "./payment.scss";
import PaystackPop from "@paystack/inline-js";
import GetOrder from "../../extras/Order";
export default function Payment() {
  const { order, setOrder } = useContext(Order);
 const {TakeOrder}=GetOrder()
  const testTotal = order.total_price *100; //always add extra two zeros, calculation always done in kobo
  const testMail = localStorage.getItem('email'),
    testkey = "pk_test_f111edd46517cecd2a5879f3466ceb851a7f48d9";

  //   console.log(testkey);
  const paystack = new PaystackPop();

  const initiateTransaction = () => {
     if(order.total_price>0){
    paystack.newTransaction({
      amount: testTotal,
      email: testMail,
      key: testkey,
      name: "radiance obi",
      onCancel: () => window.alert("oh, dear u canceled"),
      onSuccess: (e) => {
        window.alert(
          "thank you for ur purchase! your ref ID is " + e.reference
        );
        console.log(e);
      },
    });
}
  };
  return (
      <div className=' payment'>
          <div className="data">
             Name:   <span>{order.name}</span>
          </div>
          <div className="data">
            Location:   <span>{order.zone},{order.address}</span>
          </div>
        <div className="data">
            Amount:    <span>{order.total_price}</span>
          </div>
          <button onClick={initiateTransaction}>Pay</button>
      </div>
          );
}
