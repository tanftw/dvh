import fetch from 'node-fetch'

const posts = [
    {
        id: 'first-post',
        title: 'My first post',
        content: 'My first post content'
    },
    {
        id: 'second-post',
        title: 'My second post',
        content: 'My second post content'
    }
]

export async function getAllPostIds() {
    const posts = await getSortedPostData();

    return posts.map(post => {
        return {
            params: {
                slug: toSlugPath(post.link)
            }
        }
    });
    
    return [
        {
            params: {
                id: 'first-post'
            },
        },
        {
            params: {
                id: 'second-post'
            },
        }
    ]
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getPostData(slug) {
    const posts = await getSortedPostData();
    slug = slug.join('/');

    return posts.find(post => post.link.includes(slug));
}

export async function getSortedPostData() {
    const res = await fetch('https://darryn.vanhout.com.au/wp-json/wp/v2/posts?_embed&per_page=100');
    
    return res.json();
}

export function trimDomain(url: string) {
    return url.replace('https://darryn.vanhout.com.au/', '')
}

export function toSlugPath(url: string) {
    url = trimDomain(url)
    return url.split('/')
}