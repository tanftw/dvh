import Layout from '../components/Layout'
import { Level } from '../components/Level'
import Head from 'next/head'

export default function about() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>

            <img className="p-2 border border-gray-200" src="/darryn_van_hout_entrepreneur_about_me.jpg" alt="Darryn Van Hout" />

            <h1 className="text-3xl py-6">About Me</h1>

            <blockquote className="text-2xl italic">“You can have everything in life that you want, if you help other people get what they want”</blockquote>
            
            <div className="flex mt-5">
                <div className="w-6/12 mr-4">
                    <p className="mb-4">The foundation of my career has been established on sales, marketing, and business development.</p>
                    <p className="my-4">I pride myself on my excellent ability to market and sell a product and my unique background compliments my ability to recruit, train, and mentor professionals to capitalise on profit.</p>
                    <p className="my-4">I easily build rapport with my clients and my candidates and this allows me to identify and understand their culture to gain direction.</p>
                    <p className="my-4">I am heavily involved in the online space with a focus on software development, lead generation and marketing. Day to day I manage a team of professionals across various online projects including web and app development, online marketing and social media marketing.</p>
                    <p className="my-4">My exposure to the corporate world at an executive level enables me to understand my client’s needs and important aspects of their business such as growth, planning, marketing, sales, accounts, training &amp; management, resulting in success for all parties.</p>
                    <p className="my-4">I work internationally with an extensive portfolio of clients including small to medium business across Australia as well as multi-national corporations.</p>
                </div>
                <div className="w-6/12">
                    <p>I’ve worked hard for the last decade building a strong network of peers and developing smart, ethical business solutions.</p>

                    <h3 className="mt-4 mb-3 text-xl font-semibold">How I spend my time</h3>

                    <div className="my-5 ml-6">
                        <Level width="9/12" children="Software Development 80%"></Level>
                        <Level width="6/12" children="Marketing &amp; Sales 60%"></Level>
                        <Level width="8/12" children="Network &amp; Building Relationships 70%"></Level>
                        <Level width="10/12" children="Entrepreneurship 90%"></Level>
                    </div>

                    <p>I’m always looking to connect with motivated, like-minded individuals. If your project could use a unique, entrepreneurial touch to take it to the next level, please do not hesitate to connect.</p>
                </div>
                
            </div>
        </Layout>
    )
}