export interface Content {
    rendered: string
    protected: boolean
}

export interface Title {
    rendered: string
}

export interface Embed {
    author?: any[],
    featuredmedia?: any[],
}

export interface Post {
    id: number
    date: string
    date_gmt: string
    guid: Object
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: Title
    content: Content
    excerpt: Content
    author: number
    featured_media: string
    comment_status: string
    ping_status: string
    sticky: boolean
    template: string
    format: string
    meta: Object,
    _embedded: any
}