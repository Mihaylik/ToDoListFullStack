import { gql } from '@apollo/client';
import { Dispatch } from 'redux';
import { client } from '../../graphQL/client';
import { CategoryAction, CategoryActionTypes } from '../../types/categories';

const query = gql`
query GetCategories{
    categories {
    idCategory
    name
    }
}
`

export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoryAction>) => {
        try {
            dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES })
            const response = await client.query({query})
            dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response.data.categories })
        }
        catch {
            dispatch(
                {
                    type: CategoryActionTypes.FETCH_CATEGORIES_ERROR,
                    payload: 'Error while categories loading'
                })
        }
    }
}