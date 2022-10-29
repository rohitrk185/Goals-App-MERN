import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice';


function GoalItem({ goal }) {
    const dispatch = useDispatch();
    return (
        <div className='goal'>
            <h2>{goal.text}</h2>
            <div className='timestamp'>
                {new Date(goal.createdAt).toLocaleString('en-US')}
            </div>
            <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
                ❌
            </button>
        </div>
    )
}

export default GoalItem