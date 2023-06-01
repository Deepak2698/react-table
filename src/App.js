import React, { useEffect, useState } from 'react';
import UserData from './components/UserData';
const API = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/reciped9d7b8c.json";

const App = () => {
  const [users, setusers] = useState([]);

const fetchUsers = async (url) => {
  try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.length > 0){
        setusers(data);
      }
      console.log(data);
  }catch (e){
    console.error(e)
  }
}




  useEffect( () => {
      fetchUsers(API);
  }, [])
  return (
    <div>
      <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </div>
  )
}

export default App
