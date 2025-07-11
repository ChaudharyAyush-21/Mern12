import React, { useState } from 'react'
const Contact = () => {

  const [contact, setContact] = useState({
    username:"",
    email:"",
    message:"",
  });

  const handleInput = (e) =>{
      let name = e.target.name;
      let value = e.target.value;

      setContact((prev) => ({
        ...prev,
        [name]: value
      }));
  };

  const handleForm = (e) =>{
    e.preventDefault();
  }

  return (
    <>
    <section>

          <div className='section-contact'>
            <div className='contact-content container'>
              <h1 className='main-heading '>Contact Us</h1>
            </div>
            <div className="container grid grid-two-cols">
            <div className="contact-image">
                <img src="login.jpg" alt="try to login" width="400" height="400"/>
            </div>
              <div className="contact-form">
                  <br />
              <form onSubmit={handleForm}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" name ="username" id="username" placeholder='Enter your username' required autoComplete='off' value={contact.username} onChange={handleInput}/>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                    <input type="email" name ="email" id="email" placeholder='Enter your email' required autoComplete='off' value={contact.email} onChange={handleInput}/>
                </div>

                <div>
                <label htmlFor="Message">Message</label>
                <textarea name='message' id='message' cols="30" rows="10" value={contact.message} onChange={handleInput}></textarea>
                </div>
                
            
                <br />

            <button type='submit' className='btn btn-submit'>Submit</button>


              </form>

            </div>
    </div>
    </div>
 
</section>
    </>
  );
};

export default Contact;
