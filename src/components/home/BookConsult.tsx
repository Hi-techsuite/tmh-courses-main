import React, { FC, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import CloseIcon from '@mui/icons-material/Close'

const BookConsult: FC = () => {
  const [consultModal, setConsultModal] = useState(false)
  const toggleConsultModal = () => {
    setConsultModal(!consultModal)
  }
  return (
    <section className="bookConsultSection" id="getStarted">
      <Container maxWidth="lg">
        <div className="bookConsultSection_div">
          <div className="bookConsultSection_div1">
            Ready to start learning?{' '}
            <div className="bookConsultSection_div1_para">
              Get a free consultation with one of our Portolfio Managers
            </div>
          </div>
          <div className="bookConsultSection_div2">
            <button className="bookConsultSection_div2_btn" onClick={toggleConsultModal}>
              Book Consultation
            </button>
          </div>
        </div>
      </Container>
      {consultModal ? (
        <div className="ConsultModal">
          <div className="ConsultModal_div">
            <div className="ConsultModal_div_title">
              Free Consultation <CloseIcon className="ConsultModal_div_title_icon" onClick={toggleConsultModal} />{' '}
            </div>
            <div className="ConsultModal_div_body">
              <input type="text" className="ConsultModal_div_body_input" placeholder="Full Name" />
              <input type="text" className="ConsultModal_div_body_input" placeholder="Phone Number" />
              <input type="text" className="ConsultModal_div_body_input" placeholder="Email address" />
              <input type="text" className="ConsultModal_div_body_input" placeholder="Country" />
            </div>
            <button className="ConsultModal_div_btn">Send Message</button>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default BookConsult
