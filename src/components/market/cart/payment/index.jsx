import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Back from "../../../images/svg/Back";
import { Order } from "../../extras/userContext";
import "./payment.scss";
import PaystackPop from "@paystack/inline-js";
export default function Payment() {
  const { order, setOrder } = useContext(Order);

  //   return (
  //     <div class="payment cart">
  //       <div className="head">
  //         <Link to="/cart">
  //           <Back />
  //         </Link>
  //       </div>

  //       <div
  //         style={{
  //           display: "flex",
  //           width: "100%",
  //           height: "86px",
  //           background: "#55DB52",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           marginBottom: "2%",
  //           flexDirection: "column",
  //     

  const testTotal = 500000; //always add extra two zeros, calculation always done in kobo
  const testMail = "radiancegeorge@gmail.com",
    testkey = "pk_test_f111edd46517cecd2a5879f3466ceb851a7f48d9";

  //   console.log(testkey);
  const paystack = new PaystackPop();

  const initiateTransaction = () => {
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
  };
  return <button onClick={initiateTransaction}>Pay</button>;
}
