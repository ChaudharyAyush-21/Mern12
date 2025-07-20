import React, { useState } from 'react'
import { useAuth } from '../store/auth.jsx';

const defaultContactFormData ={
      username:"",
      email:"",
      message:"",
  };
const Contact = () => {

  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if(userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: ""
    });
    setUserData(false);
  };

  const handleInput = (e) =>{
      let name = e.target.name;
      let value = e.target.value;

      setContact((prev) => ({
        ...prev,
        [name]: value
      }));
  };

   const handleForm = async (e) =>{
      e.preventDefault();
      try {
        console.log("Contact data to be sent:", contact);

        const response = await fetch("http://localhost:4000/api/form/contact",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      if(response.ok) {
        setContact(defaultContactFormData);

        const data = await response.json();
        alert("Message sent successfully!");
        console.log("res from the server",data);
        
       
      }
      console.log(response);
      
      } catch (error) {
        console.log("contact error", error);
        
      }
    };


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

            <button type='submit' className='btn btn-submit' >Submit</button>


              </form>

            </div>
    </div>
    </div>
 
</section>
    </>
  );
};

export default Contact;
