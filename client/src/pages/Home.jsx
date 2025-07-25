import React from 'react';


const Home = () => {
  return (
    <>
      
      <main>
        <section>
          <div className='section-hero'>
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>This is a simple home page built with React.</p>
                {/* <h1 className='main-heading'>Welcome to the Home Page</h1> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, 
                  ratione labore dignissimos veritatis facilis harum possimus dicta ducimus 
                  animi reprehenderit fuga quos amet eius tenetur hic velit, unde alias odio.
                </p>
                  <div className='btn btn-group'>
                    <a href='/contact'><button className='btn'>connect now</button></a>
                    <a href='/services'><button className='btn secondary-btn'>learn more</button></a>
                  </div>
              </div>
                {/* hero image */}
                <div className='hero-image'>
                  <img src="register.jpg" alt="welcome to home" width="400" height="400"/>
                </div>
            </div>
          </div>
        </section> 
      </main>

        {/* 2nd section */}
        <section className='section-analysis'>
          <div className='container grid grid-four-column'>
            <div className='div1'>
              <h2>50+</h2>
              <p>Registered Companies</p>
            </div>
            <div className='div1'>
              <h2>50,000+</h2>
              <p>Happy Client</p>
            </div>
            <div className='div1'>
              <h2>500+</h2>
              <p>Well known Developer</p>
            </div>
            <div className='div1'>
              <h2>24/7</h2>
              <p>Companies support</p>
            </div>
          </div>

      </section>

      {/* 3rd section */}

      <section>
          <div className='section-hero'>
            <div className="container grid grid-two-cols">
                <div className='hero-image'>
                  <img src="login.jpg" alt="welcome to home" width="400" height="400"/>
                </div>
              <div className="hero-content">
                <p>This is a simple home page built with React.</p>
                <h1 className='main-heading'>Welcome to the Home Page</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, 
                  ratione labore dignissimos veritatis facilis harum possimus dicta ducimus 
                  animi reprehenderit fuga quos amet eius tenetur hic velit, unde alias odio.
                </p>
                  <div className='btn btn-group'>
                    <a href='/contact'><button className='btn'>connect now</button></a>
                    <a href='/services'><button className='btn secondary-btn'>learn more</button></a>
                  </div>
              </div>
            </div>
          </div>
        </section> 
       

    </>
  )
}

export default Home;
