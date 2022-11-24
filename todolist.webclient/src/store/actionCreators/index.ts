import * as TaskActionCreators from './tasks'
import * as CategoryActionCreators from './categories'

export default {
    ...TaskActionCreators,
    ...CategoryActionCreators
}
