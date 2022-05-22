import { gql } from '@apollo/client';
export const FOLLOW = gql`
    mutation Follow($followedId: ID!) {
        follow(followedId: $followedId) {
            followed {
                id
                userName
            }
            follower {
                id
                userName
            }
        }
    }
`;
export const UNFOLLOW = gql`
    mutation Unfollow($followedId: ID!) {
        unfollow(followedId: $followedId) {
            id
        }
    }
`;
