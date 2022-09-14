import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css";

const Users = () => {
  const config = {
    headers: {
      AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
    },
  };
  const url = "https://devza.com/tests/tasks/listusers";
  const userdata = {
    name: "user",
    email: "task",
  };

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios.get(url, config).then((res) => setUserList(res.data.users));
    console.log(userList);
  });

  return (
    <div main-con>
      
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Img</th>
                <th scope="col">Name</th>
                
              </tr>
            </thead>
            <tbody>
                {userList.map((item)=>{
                    return(
                        <tr>
                            <th>{item.id}</th>
                            <td ><img src={item.picture} alt="dp" width="50" height="50" className="dp"/></td>
                            <td>{item.name}</td>
                            
                        </tr>
                    )
                })}
            
            </tbody>
          </table>

    </div>
  );
};

export default Users;
