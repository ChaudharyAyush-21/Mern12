import React from 'react'
const About = () => {
  return (
    <>
     <section>
          <div className='section-hero'>
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>Welcome</p>
                <h1 className='main-heading'>Why Choose Us</h1>
                <p>
                  Expertise: We bring deep industry knowledge and proven experience to deliver high-quality solutions.
                </p>
                <p>
                  Customization: Our services are tailored to meet the unique needs of every client.
                </p>
                <p>
                  Customer-Centric: We prioritize our customers at every step, ensuring satisfaction and long-term relationships.
                </p>
                <p>
                  Affordability: We provide cost-effective solutions without compromising on quality.
                </p>
                <p>
                  Reliability: You can count on us for consistent, dependable service you can trust.
                </p>
                  <div className='btn btn-group'>
                    <a href='/contact'><button className='btn'>connect now</button></a>
                    <a href='/services'><button className='btn secondary-btn'>learn more</button></a>
                  </div>
              </div>
                {/* hero image */}
                <div className='hero-image'>
                  <img src="about.jpg" alt="welcome to home" width="400" height="400"/>
                </div>
            </div>
          </div>
        </section> 
    </>
  );
};

export default About;
