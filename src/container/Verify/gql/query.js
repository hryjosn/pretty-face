import gql from 'graphql-tag';

export const GET_VERIFY_USERS = /* GraphQL */ gql`
    {
        getVerifyUsers {
            portrait {
                url
            }
            userName
        }
    }
`;
