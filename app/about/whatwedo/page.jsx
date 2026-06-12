import React from 'react'
import WhatWeDo from './Whatwedopage'

export async function generateMetadata() {
  return {
    title: "What We Do | Best B2B Marketplace in India – Inquiry Bazaar",
    description: "Discover what Inquiry Bazaar offers as India’s leading B2B marketplace and industrial platform. We connect verified buyers and suppliers, generate genuine business inquiries, and help businesses grow through targeted B2B lead generation and visibility.",
  };
}

export default function page() {
  return (
    <>
    <WhatWeDo/>
    </>
  )
}
