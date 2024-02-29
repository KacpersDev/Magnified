import Header from "./components/header/Header"
import Offer from "./components/offer/Offer"
import Choose from "./components/choose/Choose"
import Testimonials from "./components/testimonials/Testimonials"
import Footer from "./components/footer/Footer"

export default function Home(){
  return(
    <>
      <Header/>
      <Offer/>
      <Choose/>
      <Testimonials/>
      <Footer/>
    </>
  )
}