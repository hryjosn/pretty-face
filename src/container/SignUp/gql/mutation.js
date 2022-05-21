import { gql } from '@apollo/client';
export const LOGIN = gql`
    mutation EmailLogin($email: String!, $password: String!) {
        emailLogin(email: $email, password: $password) {
            token
            user {
                id
                username
                email
            }
        }
    }
`;
export const SIGNUP = /* GraphQL */ gql`
    mutation EmailSignUp($user: UserCreateInput!, $portrait: Upload!) {
        signUp(userCreateInput: $user, portrait: $portrait) {
            token
            user {
                id
                userName
            }
        }
    }
`;
