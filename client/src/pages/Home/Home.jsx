import React from 'react'
import Main from './components/Main/Main'
import Guidlines from './components/Guidlines/Guidlines'
import Timeline from './components/Timeline/Timeline'
import Sponsorships from './components/Sponsorships/Sponsorships'
import Contacts from './components/Contacts/Contacts'
import Intro from './components/Intro/Intro'



function Home() {
  return (
    <>
      <Main/>
      <Guidlines/>
      <Timeline/>
      <Sponsorships/>
      <Contacts/>
      <Intro/>
    </>
    
  )
}

export default Home;