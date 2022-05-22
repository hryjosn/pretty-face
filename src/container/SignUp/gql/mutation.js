import { gql } from '@apollo/client';

export const SIGNUP = /* GraphQL */ gql`
    mutation Mutation($userName: String!, $password: String!) {
        login(userName: $userName, password: $password) {
            token
            user {
                userName
                portrait {
                    url
                }
            }
        }
    }
`;
