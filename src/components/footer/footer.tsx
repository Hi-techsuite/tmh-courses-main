import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#000', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}>
      <Container>
        <Grid container spacing={1}>
          <Grid item>
            <Box sx={{ width: '100%' }}>
              <img src="/logo_light.svg" alt="" className="footer_logo" />
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                © Copyright 2024 - Trademindshub. All rights reserved.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
