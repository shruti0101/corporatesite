import React from 'react'
import Whowearepage from './Whowearepage'

export async function generateMetadata() {
  return {
    title: "Who We Are | Inquiry Bazaar – India’s B2B Marketplace Platform",
    description: "Learn about Inquiry Bazaar, India’s trusted B2B marketplace connecting verified buyers, suppliers, and manufacturers. We provide a hybrid industrial marketplace platform designed to generate genuine business inquiries and growth opportunities.",
  };
}

export default function page() {
  return (
    <>
    <Whowearepage/>
    </>
  )
}
