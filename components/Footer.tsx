import Link from 'next/link'

export default function Footer() {
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto py-20">
                <div className="flex">
                    <div className="flex-auto">
                        <h3 className="text-2xl font-semibold">My Network</h3>
                        <ul className="mt-4">
                            <li>kelpee.com</li>
                            <li>Switchee™</li>
                            <li>Australian Solar Quotes</li>
                            <li>StormAssist</li>
                            <li>Electric Cars Guide</li>
                            <li>Broda Coach</li>
                        </ul>
                    </div>
                    <div className="flex-auto">
                        <h3 className="text-2xl font-semibold">Recent Posts</h3>
                    </div>
                    
                    <div className="flex-auto">
                        <h3 className="text-2xl font-semibold">Popular Posts</h3>
                    </div>
                </div>

                <hr className="my-10" />

                <div className="flex">
                    <div className="text-gray-500">
                        <Link href="/about"><a className="text-gray-700">Darryn.VanHout.com.au</a></Link> © Copyright 2016 | Energised with <a className="text-gray-700" href="https://www.australiansolarquotes.com.au/?utm_source=DarrynVanHout&utm_medium=website&utm_campaign=footer_link_utm_term=Solar_Power">Solar Power</a> 2010
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}