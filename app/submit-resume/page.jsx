import React from 'react'
import SubmitResume from './SubmitResume'

export async function generateMetadata() {
  return {
    title: "Submit Resume | Inquiry Bazaar Careers – B2B Marketplace Jobs in India",
    description: "Submit your resume at Inquiry Bazaar and explore career opportunities in India’s leading B2B marketplace platform. Join our team and grow your career in the industrial B2B portal ecosystem with innovation, learning, and growth opportunities.",
  };
}

export default function page() {
  return (
    <>
    <SubmitResume/>
    </>
  )
}
