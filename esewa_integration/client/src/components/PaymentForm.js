// App.jsx
import { useEffect, useState } from "react";

function App() {
  const [orders, setOrders] = useState([]);

  const handlePayment = async (payment_method) => {
    const url = "http://localhost:5001/api/orders/create";
    const data = {
      amount: 100,
      products: [{ product: "test", amount: 100, quantity: 1 }],
      payment_method,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed
        },
        body: JSON.stringify(data),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.payment_method === "esewa") {
          esewaCall(responseData.formData);
        }
      } else {
        console.error("Failed to fetch:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const esewaCall = (formData) => {
    console.log(formData);
    var path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in formData) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  useEffect(() => {
    const getOrders = async () => {
      const url = "http://localhost:5001/api/orders";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
        });

        // Check if the request was successful (status code 2xx)
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setOrders(responseData);
        } else {
          console.error(
            "Failed to fetch:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    getOrders();
  }, []);

  return (
    <>
    <div className="w-[100vw] flex justify-center items-center mt-[5vh]">
    <button
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mx-2"
        onClick={() => handlePayment("esewa")}
      >
        Pay Through Esewa
      </button>
    </div>

    <table className="min-w-[90vw] ml-[5vw] mt-[10vh] border-collapse border border-gray-200">
        <thead>
            <tr>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Id</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Status</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Amount</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Transaction Code</th>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">Payment Method</th>
            </tr>
        </thead>
        <tbody>
            {orders.map((order, index) => (
            <tr key={order._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{order._id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                <td className="border border-gray-300 px-4 py-2">{order.amount}</td>
                <td className="border border-gray-300 px-4 py-2">{order.transaction_code}</td>
                <td className="border border-gray-300 px-4 py-2">{order.payment_method}</td>
            </tr>
            ))}
        </tbody>
    </table>

    </>
  );
}

export default App;
