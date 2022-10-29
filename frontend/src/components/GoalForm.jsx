import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';

function GoalForm() {
    const textRef = useRef('');
    const disptach = useDispatch();

    const onSubmit = (e) => {
        const text = textRef.current.value;
        e.preventDefault();

        disptach(createGoal({text}));
        textRef.current.value = '';
    };

    return <section className='form'>
        <form onSubmit={onSubmit} method="post">
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" 
                    name="text" id="text"
                    ref={textRef}
                    placeholder='Enter your goal'/>
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block'>Add Goal</button>
            </div>
        </form>

    </section>
}

export default GoalForm;