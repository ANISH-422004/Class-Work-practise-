
import {configureStore} from '@reduxjs/toolkit'
import tasks from './reduceres/TasksSlice'

export const store = configureStore(
    {
        reducer: {
            tasks:tasks
        }
    }
)
