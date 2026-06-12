import React from 'react'
import EmployeeSpeak from './EmployeeSpeak'

export async function generateMetadata() {
  return {
    title: "Employee Speaks | Inquiry Bazaar – B2B Marketplace Careers & Culture",
    description: "Hear from employees of Inquiry Bazaar about their experiences working at India’s growing B2B marketplace platform. Discover our culture, teamwork, innovation, and opportunities in the industrial B2B marketplace ecosystem.",
  };
}

export default function page() {
  return (
    <>
    <EmployeeSpeak/>
    </>
  )
}
