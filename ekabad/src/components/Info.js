import React,{useEffect,useState} from 'react'

const Info = () => {
  const [data,setdata] = useState([]);
  // const [email,setemail] = useState()
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
    }).then(res => res.json()).then(res => {
      console.log(res);
      setdata(res)
    });
  },[]);
  return (
    <div>
    <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th scope="col" class="text-xl font-bold  text-gray-900 px-6 py-4 text-left">
                  Order Id
                </th>
                <th scope="col" class="text-xl font-bold text-gray-900 px-6 py-4 text-left">
                  Name
                </th>
                <th scope="col" class="text-xl font-bold text-gray-900 px-6 py-4 text-left">
                  Phone Number
                </th>
                <th scope="col" class="text-xl font-bold text-gray-900 px-6 py-4 text-left">
                  Address
                </th>
                <th scope="col" class="text-xl font-bold text-gray-900 px-6 py-4 text-left">
                   Latitude
                </th>
                <th scope="col" class="text-xl font-bold text-gray-900 px-6 py-4 text-left">
                   Longitude
                </th>
                <th scope="col" class="text-xl font-bold text-gray-900 px-6 py-4 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => 
                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-900">{item._id}</td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item["name"]}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item["phone"]}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item["address"]}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item["lng"]}
                </td>
                <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item["lat"]}
                </td>
                <td>
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => {
                          fetch("http://localhost:3004/orders/del", {
                          // Adding method type
                          method: "POST",
                          // Adding body or contents to send
                          body: JSON.stringify({
                          id:item._id
                          }),
                          // Adding headers to the request
                          headers: {
                          "Content-type": "application/json; charset=UTF-8"
                          }
                          }).then(res => res.json()).then(res => {
                          console.log(res);
                          setdata(res)
                          });
                    }}
                  >
                    Done
                  </button>
                </td>
              </tr>
              )
              
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Info