import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Card from "./Components/Card"

function App() {

  return (
    <>
      <Navbar/>
      <div className="Card_Container">
        {/* 1  */}
       <Card image ="../images/gallery-1.jpg" title ="Card no 1" description="this card is the first card and it contains only title and description"/>
       {/* 2 */}
       <Card image ="../images/gallery-2.jpg"  title="Card no 2" description="this card is the second card and it contains only title and description"/>
       {/* 3 */}
       <Card image ="../images/gallery-3.jpg" title="Card no 3" description="this card is the third card and it contains only title and description"/>
       {/* 4 */}
       <Card image ="../images/gallery-4.jpg"  title="Card no 4" description="this card is the fourth card and it contains only title and description"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
