import Link from 'next/link'
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter()
    const inactiveClasses = 'inline-block px-4 py-2 font-bold'
    const activeClasses = 'inline-block px-4 py-2 font-bold bg-orange-500 rounded text-white'

    return (
        <div className="container mx-auto my-20">
            <header className="flex justify-between">
                <div id="logo">
                    <Link href="/"><a><img src="/Darryn_Van_Hout@2x.png" alt="Logo" width="131" height="52" /></a></Link>
                </div>

                <nav>
                    <ul>
                        <li className={router.pathname == '/' ? activeClasses : inactiveClasses}>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li className={router.pathname == '/about' ? activeClasses : inactiveClasses}><Link href="/about"><a>About</a></Link></li>
                        <li className={router.pathname == '/blog' ? activeClasses : inactiveClasses}><Link href="/blog"><a>Blog</a></Link></li>
                        <li className={router.pathname == '/connect' ? activeClasses : inactiveClasses}><Link href="/connect"><a>Connect</a></Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}