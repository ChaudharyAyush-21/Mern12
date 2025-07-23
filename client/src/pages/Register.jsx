import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  {useAuth}  from '../store/auth';
const Register = () => {

  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
});
    const navigate = useNavigate();
    const { storetokenInLS } = useAuth();

    const handleInput = (e) =>{
      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name]:value
      });
    };

    const handleForm = async(e) =>{
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:4000/api/auth/register`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

        // console.log(response);
        const res_data = await response.json();
        console.log("res from the server",res_data.extraDetails);

      if(response.ok) {

        storetokenInLS(res_data.token);
        setUser({
            username:"",
            email:"",
            phone:"",
            password:""
        });
        navigate('/login'); // Redirect to login page after successful registration
      }else{
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }

      
      } catch (error) {
        console.log("register error", error);
        
      }
    };


  return (
    <>
    <section>
      <main>
        <div className='section-registration'>
          <div className="container grid grid-cols">
      <div className="registration-image">
        <img src="register.jpg" alt="try to registration" width="400" height="400"/>
      </div>
      <div className="registration-form">
        <h1 className='main-heading '>Registration Form</h1>
        <br />
        <form onSubmit={handleForm}>
          <div>
          <label htmlFor="username">Username</label>
          <input type="text" name ="username" id="username" placeholder='Enter your username' required autoComplete='off' value={user.username} onChange={handleInput}/>
          </div>

          <div>
          <label htmlFor="email">Email</label>
          <input type="email" name ="email" id="email" placeholder='Enter your email' required autoComplete='off' value={user.email} onChange={handleInput}/>
          </div>

          <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" name ="phone" id="phone" placeholder='Enter your phone' required autoComplete='off' value={user.phone} onChange={handleInput}/>
          </div>

          <div>
          <label htmlFor="password">Password</label>
          <input type="password" name ="password" id="password" placeholder='Enter your password' required autoComplete='off' value={user.password} onChange={handleInput}/>
          </div>
          <br />

          <button type='submit' className='btn btn-submit'>Register Now</button>

        </form>
        
      </div>
    </div>
    </div>
    </main>
    </section>
    </>
  );
};

export default Register;
