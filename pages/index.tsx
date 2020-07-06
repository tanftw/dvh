import Head from 'next/head'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Levels from '../components/Levels'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Darryn Van Hout</title>
        <link rel="icon" href="/cropped-DVH_favicon.png" />
      </Head>

      <div id="hero">
        <Header />

        <div className="container mx-auto py-64">
          <h1 className="text-white text-6xl">Welcome!</h1>
          <p className="text-white text-xl">I can come across as the scruffy corporate rebel type. <br />
            But one that gets things done. Get In Touch!</p>
        </div>
      </div>

      <div id="about-me" className="container mx-auto">
        <div className="py-10 text-center">
          <h2 className="text-3xl">About Me</h2>
          <p>You can have everything in life that you want, if you help other people get what they want</p>
        </div>

        <Cards />

        <div className="flex mt-4">
          <div className="w-6/12">
            <h3 className="font-bold text-xl py-4">Me in a Nutshell</h3>
            <img className="p-1 bg-white shadow-md float-left mr-6 mb-6" src="/darryn_van_hout_entrepreneur_homepage_2.jpg" width="200" alt="Darryn Van Hout" />
            <p>The foundation of my career has been established on sales, networking and business development. This was short lived when I discovered what I am truly capable of.I pride myself on my excellent ability to uncover opportunities and go to the market.  My unique  background which I feel is my secret weapon, compliments my ability to move through my professional career with consistency, never losing momentum or motivation.I work internationally with an extensive portfolio of clients including small to medium businesses across Australia as well as multinational corporations.</p>
            <p><strong>Say hi, email me</strong></p>
          </div>
          <div className="w-6/12">
            <h3 className="font-bold text-xl py-4">My Skills</h3>
            <div className="pl-5"><Levels /></div>
            <p className="mt-5">
              I’m always looking to connect with motivated, like-minded individuals. If your project could use a unique yet professional touch to drive it to the next level, please do not hesitate to connect.
            </p>
          </div>
        </div>

        <hr className="my-20" />
        <Testimonials />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}
