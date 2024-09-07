import React from 'react'
import Hero from './Hero'
import FeaturedArticles from './FeaturedArticles'
import Spotlight from './Spotlight'
import Testimonials from './Testimonials'
import NewsletterSignup from './NewsLetterSignup'
import SocialMediaLinks from './SocialMediaLinks'

function HomePage() {
  return (
    <>
        <Hero/>
        <Spotlight/>
        <FeaturedArticles/>
        <Testimonials/>
        <NewsletterSignup/>
        <SocialMediaLinks/>
    </>
  )
}


export default HomePage