const asyncHandler = require('express-async-handler');
// @desc    -> Get Goals
// @route   -> GET /api/goals
// @access  -> Private
const getGoals = asyncHandler ((req, res) => {
    res.status(200).json({ message: 'Get Goals'});
});


// @desc    -> Set Goal
// @route   -> POST /api/goals
// @access  -> Private
const setGoal = asyncHandler ((req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please Add a Text Field');
        json({ message: 'Please Add a Text Field'});
    }
    res.status(200).json({ message: 'Set Goal'});
});


// @desc    -> Update Goals
// @route   -> Put /api/goals/:id
// @access  -> Private
const updateGoal = asyncHandler ((req, res) => {
    res.status(200).json({ message: 'Update Goal'});
});


// @desc    -> Delete Goals
// @route   -> DELETE /api/goals/:id
// @access  -> Private
const deleteGoal = asyncHandler ((req, res) => {
    res.status(200).json({ message: 'Delete Goal'});
});



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};