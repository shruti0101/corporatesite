import React from 'react'
import Carrerpage from './Carrerpage'

export async function generateMetadata() {
  return {
    title: "Careers | Join Inquiry Bazaar – B2B Marketplace Jobs in India",
    description: "Explore career opportunities at Inquiry Bazaar, India’s fast-growing B2B marketplace platform. Join our team and build innovative solutions in the industrial marketplace and B2B portal ecosystem driving business growth across India.",
  };
}

export default function page() {
  return (
    <>
    <Carrerpage/>
    </>
  )
}
