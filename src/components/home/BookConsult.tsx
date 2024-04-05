import React from 'react'
import Container from '@mui/material/Container'

const BookConsult = () => {
  return (
    <section className="bookConsultSection">
      <Container maxWidth="lg">
        <div className="bookConsultSection_div">
          <div className="bookConsultSection_div1">
            Ready to start learning?{' '}
            <div className="bookConsultSection_div1_para">
              Get a free consultation with one of our Portolfio Managers
            </div>
          </div>
          <div className="bookConsultSection_div2">
            <button className="bookConsultSection_div2_btn">Book Consultation</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BookConsult
