import React,{useEffect} from 'react'

function Dashboard() {
  useEffect(() => {
    fetch("http://localhost:3004/orders/getorders", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
            email:"abc@gmail.com"
            }),

            // Adding headers to the request
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
    }).then(res => res.json()).then(res => console.log(res));
    // fetch("http://localhost:3004/orders/getorders").then(res => res.json()).then(res => console.log(res));
  },);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard