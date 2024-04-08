import React, { FC } from 'react'
import Container from '@mui/material/Container'
const Services: FC = () => {
  return (
    <section className="Services_section" id="services">
      <Container maxWidth="lg">
        <div className="Services_section_area">
          <div className="Services_section_area_1">
            <div className="Services_section_area_1_title">Ready to start learning?</div>
            <div className="Services_section_area_1_para">Limited-Time Offer Until 30th April</div>
          </div>
          <div className="Services_section_area_body">
            <div className="Services_section_area_body_cont">
              <div className="Services_section_area_body_cont_body1">
                <img src="/images/icon_services1.svg" alt="" className="Services_section_area_body_cont_icon" />
                <div className="Services_section_area_body_cont_title">Enjoy 50% deposit bonus</div>
                <div className="Services_section_area_body_cont_para">
                  Sign up and fund your account with our preferred broker with just 99.95 USD and get an extra 50%
                  deposit bonus.
                </div>
              </div>
              <button className="getStarted_btn">Get started</button>
            </div>
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            <div className="Services_section_area_body_cont">
              <div className="Services_section_area_body_cont_body1">
                <img src="/images/icon_services2.svg" alt="" className="Services_section_area_body_cont_icon" />
                <div className="Services_section_area_body_cont_title">Access VIP signals and mentorship</div>
                <div className="Services_section_area_body_cont_para">
                  Deposit a minimum 19.95$ get an access to over 8 hours of online education + 4 weeks of private
                  tutoring in our office + access to our trading room + 3 months of accesses to our VIP signals room.
                </div>
              </div>
              <button className="getStarted_btn">Get started</button>
            </div>
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            {/* ========= */}
            <div className="Services_section_area_body_cont">
              <div className="Services_section_area_body_cont_body1">
                <img src="/images/icon_services3.svg" alt="" className="Services_section_area_body_cont_icon" />
                <div className="Services_section_area_body_cont_title">Join Our Trading Room.</div>
                <div className="Services_section_area_body_cont_para">
                  One-on-one mentorship with one of our mentors 3 months access to our VIP Signal group Trade LIVE with
                  our Quant Firm in Dubai.
                </div>
              </div>
              <button className="getStarted_btn">Get started</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services
