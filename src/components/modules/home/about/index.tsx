import React from 'react'

const AboutSection = () => {
  return (
    <section className="about">
    <div className="about_container">
      
      <section className="about_container_modules">
        <div><h1>About Us</h1>
          <p>
            BnB Transfer Corp is a division of Cauridor, a multi-national fintech company headquartered in Canada. BnB
            provides international money transfer and payment services to individuals in multiple countries around the
            world with a focus on sending and receiving money transfers to, from and within Africa.
          </p>
          {/* <button>
            <RouterLink to="/"> Read More</RouterLink>

          </button> */}
        </div>

        <div>
          <img src="../components/assets/mock1.png" alt="mobile phone" />
          <img src="../components/assets/mock2.png" alt="mobile phone" />
        </div>

      </section>

    </div>
  </section>
  )
}

export default AboutSection