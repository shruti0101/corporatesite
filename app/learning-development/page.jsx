import React from 'react'
import LearnigdevPage from './LearnigdevPage';

export async function generateMetadata() {
  return {
    title: "Learning & Development | Inquiry Bazaar – B2B Marketplace Growth Training",
    description: "Explore Learning & Development at Inquiry Bazaar, India’s leading B2B marketplace platform. We empower teams with training, skill development, and knowledge programs to enhance performance, innovation, and growth in the industrial B2B ecosystem.",
  };
}
export default function page() {
  return (
    <>
    <LearnigdevPage/>
    </>
  )
}
