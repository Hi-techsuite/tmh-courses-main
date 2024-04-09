import React, { FC, useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import CloseIcon from '@mui/icons-material/Close'
import toast, { Toaster } from 'react-hot-toast'

const BookConsult: FC = () => {
  const [consultModal, setConsultModal] = useState(false)
  const [payload, setPayload] = useState({
    email: '',
    phone: '',
    fullname: '',
    countrycode: '+234',
  })
  const toggleConsultModal = () => {
    setConsultModal(!consultModal)
  }

  const updater = () => {
    alert('lll')
    const { phone, email, fullname, countrycode } = payload

    if (email === '' || phone === '' || fullname === '') {
      // errorMessage.innerText = "Some fields are empty";
      // errorModal.style.display = "block";
      return
    }
    console.log(email, phone, fullname)
    // const payload = {
    //   email,
    //   phone,
    //   fullname,
    //   countrycode: '+234',
    // }
    // spinner.style.display = 'block'
    fetch('https://back-office.trademindshub.com/pub/v1/user/register', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        // spinner.style.display = 'none'

        console.log(res)
        if (res.success === true) {
          console.log('register success')
          toast('Register success.')
          // modal.style.display = 'block'
        }
        console.log(res)
        // modal.style.display = 'block'

        // alert("Response received");
      })

      .catch((err) => {
        // spinner.style.display = 'none'
        // alert("Response received");
        // modal.style.display = 'block'

        console.log(err.response || err.message || err)
      })
  }
  const handleOnchange = (e) => {
    const { id, value } = e.target

    setPayload({ ...payload, [id]: value })
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
              <input
                id="fullname"
                value={payload.fullname}
                onChange={handleOnchange}
                type="text"
                className="ConsultModal_div_body_input"
                placeholder="Full Name"
              />
              <input
                id="phone"
                value={payload.phone}
                onChange={handleOnchange}
                type="text"
                className="ConsultModal_div_body_input"
                placeholder="Phone Number"
              />
              <input
                id="email"
                value={payload.email}
                onChange={handleOnchange}
                type="text"
                className="ConsultModal_div_body_input"
                placeholder="Email address"
              />
              <input type="text" className="ConsultModal_div_body_input" placeholder="Country" />
            </div>
            <button onClick={updater} className="ConsultModal_div_btn">
              Send Message
            </button>
          </div>

          <Toaster />
        </div>
      ) : null}
    </section>
  )
}

export default BookConsult
