import React from 'react'
import ContactSection from '../components/ContactSection.jsx'
import InfiniteScrollright from '../components/InfiniteScrolright.jsx'

const ContactPage = () => {
  return (
    <div className=' min-h-screen flex flex-col gap-4   px-15 ' >
        <ContactSection/>
        <InfiniteScrollright/>
    </div>
  )
}

export default ContactPage