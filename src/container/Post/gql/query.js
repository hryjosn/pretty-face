import gql from 'graphql-tag';

export const GET_VERIFY_USERS = /* GraphQL */ gql`
    {
        getVerifyUsers {
            id
            portrait {
                url
            }
            userName
            followed {
                id
                followedId
            }
        }
    }
`;
export const GET_FOLLOWED_LIST = /* GraphQL */ gql`
    {
        getFollowedList {
            followedId
            followed {
                userName
            }
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
