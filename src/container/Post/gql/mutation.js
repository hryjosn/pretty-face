import { gql } from '@apollo/client';
export const CREAT_POST = gql`
    mutation CreatePost($postCreateInput: PostCreateInput!, $img: Upload!) {
        createPost(postCreateInput: $postCreateInput, img: $img) {
            id
            caption
            img {
                url
            }
        }
    }
`;
