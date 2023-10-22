export interface PostInterface {
    postID: string,
    author: string,
    likedBy?: string[] | string,
    likedCount?: number,
    movie?: string,
    comment: string,
    title: string,
    dateTime: string
}