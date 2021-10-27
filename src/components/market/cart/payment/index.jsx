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
  //           position: "relative",
  //           marginTop: "15%",
  //         }}>
  //         <div
  //           style={{
  //             display: "flex",
  //             width: "100%",
  //             height: "60%",
  //             justifyContent: "center",
  //             alignItems: "center",
  //           }}>
  //           <div
  //             style={{
  //               width: "10%",
  //               height: "60%",
  //               background: "#D4AF37",
  //               borderRadius: "100%",
  //               display: "flex",
  //               alignItems: "center",
  //               justifyContent: "center",
  //             }}>
  //             1
  //           </div>
  //           <div
  //             style={{
  //               width: "40%",
  //               height: "10%",
  //               background: "#D4AF37",
  //             }}></div>
  //           <div
  //             style={{
  //               width: "10%",
  //               height: "60%",
  //               background: "#d4af37",
  //               borderRadius: "100%",
  //               textAlign: "center",
  //               display: "flex",
  //               alignItems: "center",
  //               justifyContent: "center",
  //             }}>
  //             2
  //           </div>
  //         </div>
  //         <div
  //           style={{
  //             display: "flex",
  //             width: "80%",
  //             justifyContent: "space-between",
  //             marginRight: "10%",
  //           }}>
  //           <div>Verify Cart Content</div>
  //           <div>Payment</div>
  //         </div>
  //       </div>
  //       <div style={{ height: "80%", width: "100%" }}>
  //         <table>
  //           <thead>
  //             <th colspan="2">summary</th>
  //           </thead>
  //           <tbody>
  //             <tr>
  //               <td>Name:</td>
  //               <td class="td">{order.name}</td>
  //             </tr>
  //             <tr>
  //               <td>Location:</td>
  //               <td class="td">
  //                 {order.address} , {order.zone}
  //               </td>
  //             </tr>
  //             <tr>
  //               <td>total amount:</td>
  //               <td class="td">N{order.total_price}</td>
  //             </tr>
  //           </tbody>

  //           <button>PAY</button>
  //         </table>
  //       </div>
  //     </div>
  //   );

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
