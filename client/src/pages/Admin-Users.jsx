import React from 'react'
import { useAuth } from '../store/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/admin/users/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: authorizationToken,
                }
            });
            const data = await response.json();
            console.log("User deleted:", data);
            if(response.ok){
                getAllUsers(); 
            }// Refresh the user list after deletion
        } catch (error) {
            console.log(error)
        }
    }


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
                                    <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                                    </td>
                                    <td><button onClick={()=> deleteUser(curUser._id)}>Delete</button>
                                    </td>
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


