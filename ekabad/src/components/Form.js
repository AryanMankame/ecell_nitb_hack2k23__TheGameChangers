import React,{useState} from 'react'

const Form = () => {
  const [data,setdata] = useState([]);
  const [mobileNo, setmobileNo] = useState("");
  const [name,setname] = useState("");
  const [address,setaddress] = useState("");
  const [email,setemail] = useState("");
  const disp = (pos) => {
    console.log(pos);
    if (mobileNo === "") return;
    fetch("http://localhost:3004/orders/sell", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        name,
        address,
        email,
        mobile: mobileNo,
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  };
  const getloc = () => {
    const lat = navigator.geolocation.getCurrentPosition(disp);
  };
  return (
   
     <div class=" flex justify-center  py-10 px-10 mt-10">
    <section class="  p-6 mx-auto grid bg-orange-50 rounded-md shadow-md dark:bg-gray-800 outer-box">
      <h2 class="text-lg font-bold text-gray-700 capitalize text-center dark:text-white">Personal Details</h2>
  
      <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                  <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                  <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
              </div>
  
              <div>
                  <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                  <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
              </div>
  
              <div>
                  <label class="text-gray-700 dark:text-gray-200" for="password">Phone Number</label>
                  <input id="Phone" type="" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
              </div>
  
              <div>
                  <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Address</label>
                  <input id="Address" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
              </div>
              <div>
            </div>
          </div>
  
          <div class="flex justify-end mt-6">
              <button onClick = {(e) => {e.preventDefault(); getloc()}} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
      </form>
     </section>
    </div>
 
  )
}

export default Form