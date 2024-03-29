import gql from 'graphql-tag';

export const GET_MY_POST_LIST = /* GraphQL */ gql`
    query GetMyPostList {
        getMyPostList {
            updatedAt
            caption
            img {
                url
            }
        }
    }
`;
export const GET_POST_LIST = /* GraphQL */ gql`
    query GetPostList {
        getPostList {
            author {
                userName
            }
            updatedAt
            img {
                url
            }
            caption
        }
    }
`;

export const GET_MY_INFO = /* GraphQL */ gql`
    {
        me {
            portrait {
                url
            }
            userName
            id
            follower {
                id
                userName
            }
            followed {
                id
                userName
            }
        }
    }
`;
