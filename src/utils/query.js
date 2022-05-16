import { useQuery } from '@apollo/client';

export const useImperativeQuery = query => {
    const { refetch } = useQuery(query, { skip: true });

    const imperativelyCallQuery = variables => {
        return refetch(variables);
    };

    return imperativelyCallQuery;
};
