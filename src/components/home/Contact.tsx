import React, { FC } from 'react'
import Container from '@mui/material/Container'
const Contact: FC = () => {
  return (
    <section className="contact_section">
      <Container>
        <div className="contact_section_area">
          <div className="contact_section_area_1">
            <div className="contact_section_area_1_cont1">
              <div className="contact_section_area_1_cont1_title">ADDRESS:</div>
              <div className="contact_section_area_1_cont1_para">
                45 Ken-Saro Wiwa Road, Stadium Road, Port Harcourt, Rivers State, Nigeria.
              </div>
            </div>

            <hr />

            <div className="contact_section_area_1_cont1">
              <div className="contact_section_area_1_cont1_title">PHONES:</div>
              <div className="contact_section_area_1_cont1_para">+2348116106891 </div>
            </div>

            <hr />

            <div className="contact_section_area_1_cont1">
              <div className="contact_section_area_1_cont1_title">E-MAIL:</div>
              <div className="contact_section_area_1_cont1_para">support@Trademindshub.com</div>
            </div>
          </div>
          <div className="contact_section_area_2">
            <div className="contact_section_area_2_title">Contact Form</div>
            <div className="contact_section_area_2_body">
              <div className="contact_section_area_2_body_1">
                <input type="text" className="contact_section_area_2_body_1_inputdiv1" placeholder="Full Name" />
                <input type="text" className="contact_section_area_2_body_1_inputdiv1" placeholder="Phone Number" />
              </div>
              <div className="contact_section_area_2_body_2">
                <input type="text" className="contact_section_area_2_body_1_inputdiv1" placeholder="Email Address" />
              </div>
              <div className="contact_section_area_2_body_3">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  placeholder="Your Message"
                  className="contact_section_area_2_body_3_input"
                ></textarea>
              </div>
              <button className="contact_section_area_2_body_btn">Send Message</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
