import { useState, useEffect } from 'react'
import { NavBar } from './components/navbar'
import { Header } from './components/header'
import { Jumbotron } from './components/jumbotron'
import { Card } from './components/card'
import { Footer } from './components/footer'


const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <NavBar />
      <Header data={landingPageData.Header} />
      <Jumbotron data={landingPageData.Jumbotron} />
      <Card data={landingPageData.Card} />                 
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App