import { gql } from '@apollo/client';
import { Dispatch } from 'redux';
import { client } from '../../graphQL/client';
import { TaskAction, TaskActionTypes } from './../../types/task';

const query = gql`
query GetTasks {
    tasks {
    idTask
    name
    timeStart
    deadline
    passed
    idCategory
    }
}
`

export const fetchTasks = () => {
    return async (dispatch: Dispatch<TaskAction>) => {
        try {
            dispatch({ type: TaskActionTypes.FETCH_TASKS })
            const response = await client.query({query})
            setTimeout(()=>{
                dispatch({ type: TaskActionTypes.FETCH_TASKS_SUCCESS, payload: response.data.tasks })
                
            }, 500)
            
        }
        catch {
            dispatch(
                {
                    type: TaskActionTypes.FETCH_TASKS_ERROR,
                    payload: 'Error while tasks loading'
                })
        }
    }
}