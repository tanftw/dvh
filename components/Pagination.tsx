import Link from 'next/link'

export default function Pagination() {
    return (
        <nav>
            <ul className="text-center">
                <li className="inline-block px-3 py-6"><Link href="/blog"><a className="font-semibold text-lg text-gray-600">1</a></Link></li>
                <li className="inline-block px-3 py-6"><Link href="/blog/page/2"><a className="font-semibold text-lg text-gray-600">2</a></Link></li>
                <li className="inline-block px-3 py-6"><Link href="/blog/page/3"><a className="font-semibold text-lg text-gray-600">3</a></Link></li>
                <li className="inline-block px-3 py-6"><Link href="/blog/page/4"><a className="font-semibold text-lg text-gray-600">4</a></Link></li>
            </ul>
        </nav>
    )
}