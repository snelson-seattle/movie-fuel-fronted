export type CommentType = {
    PostID: string;
    Comment: string;
    ReplyID: string;
    Author: string;
    Likes: number;
    DateTime: string;
    ReplyToID?: string;
}