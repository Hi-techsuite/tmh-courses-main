import React from 'react'
import Container from '@mui/material/Container'
const Services = () => {
  return (
    <section className="Services_section">
      <Container maxWidth="lg">
        <div className="Services_section_area">
          <div className="Services_section_area_1">
            <div className="Services_section_area_1_title">Ready to start learning?</div>
            <div className="Services_section_area_1_para">Limited-Time Offer Until 30th April</div>
          </div>
          <div className="Services_section_area_body">
            <div className="Services_section_area_body_cont">
              <img src="" alt="" className="Services_section_area_body_cont_icon" />
              <div className="Services_section_area_body_cont_title">Get a free book from Trade Minds Hub for free</div>
              <div className="Services_section_area_body_cont_para">
                Earn a long-term passive income with our fully managed investment portfolios.
              </div>
            </div>
            <div className="Services_section_area_body_cont">
              <img src="" alt="" className="Services_section_area_body_cont_icon" />
              <div className="Services_section_area_body_cont_title">A two days Live trading course pay 99.95$</div>
              <div className="Services_section_area_body_cont_para">
                Start investing today from just $500 - that's 50% off our usual minimum deposit.
              </div>
            </div>
            <div className="Services_section_area_body_cont">
              <img src="" alt="" className="Services_section_area_body_cont_icon" />
              <div className="Services_section_area_body_cont_title">Offline education available only for a month</div>
              <div className="Services_section_area_body_cont_para">
                Make money by investing in Bitcoin, Avalanche, Solana, Tether and other cryptocurrencies.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services
