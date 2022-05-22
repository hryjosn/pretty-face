import gql from 'graphql-tag';

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
