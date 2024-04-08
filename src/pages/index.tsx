import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicNewHomeHero = dynamic(() => import('../components/home/NewHero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomeContact = dynamic(() => import('../components/home/Contact'))
const DynamicHomeServices = dynamic(() => import('../components/home/HomeServices/Services'))
const DynamicHomePlans = dynamic(() => import('../components/home/CoursePlans/Plans'))
const DynamicHomeBookConsult = dynamic(() => import('../components/home/BookConsult'))
// const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
// const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
// const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicNewHomeHero />
      <DynamicHomeServices />
      <DynamicHomeBookConsult />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomePlans />
      <DynamicHomeContact />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
