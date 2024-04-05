import React, { FC } from 'react'
import Container from '@mui/material/Container'
import CheckIcon from '@mui/icons-material/Check'

const Plans: FC = () => {
  return (
    <section className="PlansSection">
      <Container>
        <div className="PlansSection_area">
          <div className="PlansSection_area_heading">Courses We Offer</div>
          <div className="PlansSection_area_body">
            <div className="PlansSection_area_body_cont">
              <div className="PlansSection_area_body_cont_1">
                <img
                  src="/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                  alt=""
                  className="PlansSection_area_body_cont_img"
                />
                <div className="PlansSection_area_body_cont_title">Trading Essentials</div>
                <div className="PlansSection_area_body_cont_para">
                  {' '}
                  This is our starter Forex and Financial Education Course that consists of over 3 hours of education.
                </div>
                <div className="PlansSection_area_body_cont_Amount">
                  {' '}
                  <div className="PlansSection_area_body_cont_Amount_slashed">$100</div> $9.95
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" /> Once a month one-on-one
                  mentorship with one of our educators.
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" />3 months access to our Private
                  Signal group.
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" />3 months access to the course
                  material.
                </div>
              </div>
              <button className="getStartedBtn">Get started</button>
            </div>
            <div className="PlansSection_area_body_cont">
              <div className="PlansSection_area_body_cont_1">
                <img
                  src="/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                  alt=""
                  className="PlansSection_area_body_cont_img"
                />
                <div className="PlansSection_area_body_cont_title"> Discovery Quest</div>
                <div className="PlansSection_area_body_cont_para">
                  This is our basic Forex and Financial Education Course that consists of over 3 hours of education.
                </div>
                <div className="PlansSection_area_body_cont_Amount">
                  {' '}
                  <div className="PlansSection_area_body_cont_Amount_slashed">$250</div> $99.95
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" />
                  One-on-one mentorship with one of our educators.
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" />3 months access to our Private
                  Signal group.
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" />3 months access to the course
                  material.
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" /> 30% discount to our Live Seminars
                  and workshops.
                </div>
              </div>
              <button className="getStartedBtn">Get started</button>
            </div>
            <div className="PlansSection_area_body_cont">
              <div className="PlansSection_area_body_cont_1">
                <img
                  src="/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                  alt=""
                  className="PlansSection_area_body_cont_img"
                />
                <div className="PlansSection_area_body_cont_title"> Forex Maestro</div>
                <div className="PlansSection_area_body_cont_para">
                  This is our Intermidiate Forex and Financial Education Course that consists of over 3 hours of
                  education.
                </div>
                <div className="PlansSection_area_body_cont_Amount">
                  {' '}
                  <div className="PlansSection_area_body_cont_Amount_slashed">$250</div> $99.95
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" /> One-on-one mentorship with one of
                  our educators.
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" />3 months access to our Private
                  Signal group.
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" />3 months access to the course
                  material.
                </div>
                <div className="PlansSection_area_body_cont_feautures">
                  <CheckIcon className="PlansSection_area_body_cont_feautures_icon" /> 30% discount to our Live Seminars
                  and workshops.
                </div>
              </div>

              <button className="getStartedBtn">Get started</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Plans
