import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="#fff" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const NewHero: FC = () => {
  return (
    <section className="newHero_Section" id="#">
      <div className="newHero_Section_darken_bg"></div>
      <div className="newHero_Section_cont">
        <Container>
          <div className="newHero_Section_cont_area">
            <div className="NeewHomeSection1_area1">
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 40, md: 72 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.3,
                }}
              >
                <Typography
                  component="mark"
                  sx={{
                    position: 'relative',
                    color: 'primary.main',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    backgroundColor: 'unset',
                  }}
                >
                  Signup{' '}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 24, md: 34 },
                      left: 2,
                      transform: 'rotate(3deg)',
                      '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                    }}
                  >
                    {/* eslint-disable-next-line */}
                    <img src="/images/headline-curve.svg" alt="Headline curve" />
                  </Box>
                </Typography>
                and{' '}
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    position: 'relative',
                    '& svg': {
                      position: 'absolute',
                      top: -16,
                      right: -21,
                      width: { xs: 22, md: 30 },
                      height: 'auto',
                    },
                  }}
                >
                  trade
                  <svg version="1.1" viewBox="0 0 3183 3072">
                    <g id="Layer_x0020_1">
                      <path
                        fill="#127C71"
                        d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                      />
                      <path
                        fill="#127C71"
                        d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                      />
                      <path
                        fill="#127C71"
                        d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                      />
                    </g>
                  </svg>
                </Typography>{' '}
                <br />
                with the experts.
              </Typography>
              <div className="newHero_Section_cont_area_1_para">
                Join our two days live online trading course with Master trader from London with over 20 years
                experience who has worked with numerous investment banks, hedge funds and proprietary trading firms.
              </div>
              <div className="newHero_Section_cont_area_1_button_divs">
                <button className="newHero_Section_cont_area_1_btn">Get Started</button>{' '}
                <button className="newHero_Section_cont_area_1_btn_discount">$9.95</button>{' '}
              </div>
              <Box
                sx={{
                  bottom: 30,
                  left: { xs: 0, md: -150 },
                  boxShadow: 1,
                  borderRadius: 3,
                  px: 2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  width: 280,
                }}
              >
                <Box
                  sx={{
                    boxShadow: 1,
                    borderRadius: '50%',
                    width: 44,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    '& img': { width: '32px !important', height: 'auto' },
                  }}
                >
                  <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} />
                </Box>
                <Box>
                  <Typography
                    component="h6"
                    sx={{ color: 'secondary.main', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}
                  >
                    Certificate
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#fff', lineHeight: 1.3 }}>
                    There are certificates for all courses.
                  </Typography>
                </Box>
              </Box>
            </div>
            <div className="newHero_Section_cont_area_2"></div>
          </div>
          <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
            <Grid container spacing={2}>
              {exps.map((item) => (
                <Grid key={item.value} item xs={12} md={4}>
                  <ExpItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>

      <img src="/images/home_hero_new_img.webp" alt="" className="newHero_Section_hero_img" />
      <img src="/images/new_hero_bg.webp" alt="" className="newHero_Section_hero_bg" />
    </section>
  )
}

export default NewHero
