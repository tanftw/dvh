import Head from 'next/head'
import { getAllPostIds, getPostData } from '../lib/posts'
import { Post as PostInterface } from '../lib/post'
import Layout from '../components/Layout';
export default function Post({post}) {
    return (
        <Layout>
            <Head>
                <title>{post.title.rendered}</title>
            </Head>
            
            <h1 className="text-2xl" dangerouslySetInnerHTML={{__html: post.title.rendered}}></h1>
            <p className="text-orange-400 font-semibold">Posted on {new Date().toDateString()}</p>

            <br />
            <section dangerouslySetInnerHTML={{__html: post.content.rendered}}></section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostData(params.slug);
    return {
        props: {
            post
        }
    }
}