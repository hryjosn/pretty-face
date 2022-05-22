import { gql } from '@apollo/client';
export const LOGIN = gql`
    mutation Login($userName: String!, $password: String!) {
        login(userName: $userName, password: $password) {
            token
            user {
                id
                userName
                email
            }
        }
    }
`;
