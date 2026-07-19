import React from 'react'
import ContactSection from '../components/ContactSection'
import InfiniteScrollright from '../components/InfiniteScrolRight'

const ContactPage = () => {
  return (
    <div className=' min-h-screen flex flex-col gap-4   px-15 ' >
        <ContactSection/>
        <InfiniteScrollright/>
    </div>
  )
}

export default ContactPage