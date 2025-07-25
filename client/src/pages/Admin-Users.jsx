import React from 'react'
import { useAuth } from '../store/auth';
import { useEffect } from 'react';
import { useState } from 'react';

export const AdminUsers = () => {
    const [users, setusers] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllUsers = async ()=> {
        try {
            const response = await fetch("http://localhost:4000/api/admin/users", {
                method: 'GET',
                headers:{
                    Authorization: authorizationToken,
                }
            });
            const data = await response.json();
            console.log("Users data:", data);
            setusers(data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
            
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

  return (
   
      <>
      <section className='admin-users-section'>
        <div className="container">
            <h1>Admin User Data</h1>
        </div>
        <div className="container admin-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((curUser, index) => {
                            return (
                                <tr key={index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.phone}</td>
                                    <td><button className='btn'>Update</button></td>
                                    <td><button className='btn'>Delete</button></td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>

        </div>
      </section>

      </>
  
  )
}


