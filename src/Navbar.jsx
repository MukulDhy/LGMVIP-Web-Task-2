import React, { useEffect, useState } from 'react'

const Navbar = ({setDataFromNavbar}) =>{

    // const [data, setData] = useState([]);
    // console.log(data);
    const [num,setNum] = useState(0);
    
  useEffect(() => {
    const apiUrl = 'https://reqres.in/api/users?page=1';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(({data}) => setDataFromNavbar(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [setDataFromNavbar]); 


    const getData = () => {
        
        fetch(`https://reqres.in/api/users?page=${num === 0 ? 2 : 1}`)
          .then((response) => response.json())
          .then(({data}) => setDataFromNavbar(data))
          .catch((error) => console.error('Error fetching data:', error));
          setNum(!num);
    }


  return (
    <nav className='w-screen h-auto bg-black text-white px-16 py-4 flex justify-between items-center'>
        <h2 className='font-bold text-xl'>User Data</h2>
        <button className='border-2 p-2 rounded-lg animate-bounce -translate-y-8 transition-all ease-in-out delay-200 hover:bg-white hover:border-black hover:text-black' onClick={getData}>Get Data</button>
    </nav>
  )
}

export default Navbar
