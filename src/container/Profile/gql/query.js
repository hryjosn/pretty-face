import gql from 'graphql-tag';

export const GET_MY_INFO = /* GraphQL */ gql`
    {
        me {
            portrait {
                url
            }
            phone
            userName
            id
        }
    }
`;
