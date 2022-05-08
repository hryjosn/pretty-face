import gql from 'graphql-tag';

export const CHECK_USER_NAME = /* GraphQL */ gql`
    query CheckUsername($userName: String) {
        CheckUsername(userName: $userName)
    }
`;
