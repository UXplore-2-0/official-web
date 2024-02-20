import React from 'react'
import Main from './components/Hero/hero'
import Guidlines from './components/Guidlines/Guidlines'
import Timeline from './components/Timeline/Timeline'
import Sponsorships from './components/Sponsorships/Sponsorships'
import Contacts from './components/Contacts/Contacts'
import Intro from './components/Intro/Intro'


function Home() {
  return (
    <>
      <Main/>
      <Intro />
      <Guidlines/>
      <Timeline/>
      
      <Sponsorships/>
      <Contacts/>
    </>
    
  )
}

export default Home;