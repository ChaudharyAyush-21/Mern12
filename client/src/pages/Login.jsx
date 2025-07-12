import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  {useAuth}  from '../store/auth';
const Login = () => {

  const [user, setUser]=useState({
    email:"",
    password:""
  });

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };

  const handleForm = async(e) =>{
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      console.log(response);
      if (response.ok){
        alert("Login successful");
        const res_data = await response.json();
        storetokenInLS(res_data.token);

        setUser({
          email:"",
          password:""
        });
        navigate('/'); // Redirect to home page after successful login
      }
    } catch (error) {
      console.log("login error", error);
    }
  };

  return (
      <>
      <section>
        <main>
          <div className='section-login'>
            <div className="container grid grid-two-cols">
            <div className="login-image">
                <img src="login.jpg" alt="try to login" width="400" height="400"/>
            </div>
              <div className="login-form">
                 <h1 className='main-heading '>Login Form</h1>
                  <br />
              <form onSubmit={handleForm}>

                <div>
                  <label htmlFor="email">Email</label>
                    <input type="email" name ="email" id="email" placeholder='Enter your email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                </div>

                <div>
                <label htmlFor="password">Password</label>
                <input type="password" name ="password" id="password" placeholder='Enter your password' required autoComplete='off' value={user.password} onChange={handleInput}/>
                </div>
            
                <br />

                <button type='submit' className='btn btn-submit'>Login</button>

              </form>

            </div>
    </div>
    </div>
  </main>
</section>
</>
);
};

export default Login;;
