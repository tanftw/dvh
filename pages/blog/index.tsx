import Layout from '../../components/Layout'
import Head from 'next/head'
import { getSortedPostData, trimDomain } from '../../lib/posts'
import Link from 'next/link'
import { Post } from '../../lib/post'
import Pagination from '../../components/Pagination'

export default function Index({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>Blog - Darryn Van Hout</title>
            </Head>
            {allPostsData.map((post: Post) => (
                <article className="my-10 flex flex-row" key={post.id}>
                    <div className="w-5/12 mr-10">
                        <h2 className="text-2xl font-semibold">
                            <Link href="[...slug]" as={trimDomain(post.link)}><a dangerouslySetInnerHTML={{__html: post.title.rendered}}></a></Link>
                        </h2>
                        <p className="text-orange-400 font-semibold">Posted on {new Date().toDateString()}</p>
                        <br />
                        <section dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></section>
                    </div>
                    <div className="flex-1">
                        {(post._embedded['wp:featuredmedia'].length > 0) ?
                            <div className="border border-gray-200 p-2"><img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post._embedded['wp:featuredmedia'][0].title.rendered} /></div>
                            : <p></p>
                        }
                    </div>
                </article>
            ))}
            <Pagination />
        </Layout>
    )
} 

export async function getStaticProps() {
    const allPostsData = await getSortedPostData()

    return {
        props: {
            allPostsData
        }
    }
}