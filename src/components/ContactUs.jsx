import React from 'react'

const ContactUs = () => {
  return (
    <section className='contact'>
          <div className='contactImg'><img src="/media/img10.svg" alt="" /></div>
          <div className='form'>

            <div className="head">
            <h1>Contact us</h1>
            <p>Our lovely team would love to hear from you</p>
            </div>

            <div className="fill1">
              <div>
                <p>First name</p>
                <input type="text" placeholder='Sodiq' />
              </div>
              <div>
                <p>Last name</p>
                <input type="text" placeholder='Afolabi' />
              </div>
              <div>
                <p>Email</p>
                <input type="text" placeholder='...@email.com' />
              </div>
              <div>
                <p>Phone Number</p>
                <input type="text" placeholder='+000 000 0000' />
              </div>
            </div>

            <div className="issue">
              <p>Issue</p>
              <input type="text" placeholder="What's the issue..."/>
            </div>

            <button>Submit <img src="/media/Vector4.svg" alt="" /></button>
            <div className="icon">
            <div className='aiIcon'><img src="/media/Ai.svg" alt=""/>Ai</div>
            <img src="/media/VectorG.svg" alt="" />
              <div className='youtube'><img src="/media/VectorY.svg" alt="" /><img src="/media/VectorPlay.svg" alt="" /></div>
          </div>
          </div>
        </section>
  )
}

export default ContactUs