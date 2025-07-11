import React, { useState } from 'react'
const Login = () => {

  const [user, setUser]=useState({
    email:"",
    password:""
  });

  const handleInput = () =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };

  const handleForm = (e) =>{
    e.preventDefault();
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
