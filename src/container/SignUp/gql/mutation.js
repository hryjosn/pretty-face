import { gql } from '@apollo/client';

export const SIGNUP = /* GraphQL */ gql`
    mutation SignUp($user: UserCreateInput!, $portrait: Upload!) {
        signUp(userCreateInput: $user, portrait: $portrait) {
            token
            user {
                id
                userName
            }
        }
    }
`;
