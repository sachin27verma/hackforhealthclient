import Image from 'next/image'
import LandingPage from './Landingpage'
import Script from 'next/script'




export default function Home() {
  return (
    <main className="">
       <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      <LandingPage/>
    </main>
  )
}
