const asyncHandler = require('express-async-handler');

// @desc    Get groups
// @route   GET /api/groups
// @access  Private
const getGroups = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Groups' });
});

// @desc    Get group
// @route   GET /api/groups/:id
// @access  Private
const getGroup = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Group' });
});

// @desc    Set group
// @route   POST /api/groups
// @access  Private
const setGroup = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  } else {
    res.status(200).json({ message: 'Success' });
  }
});

// @desc    Update group
// @route   PUT /api/groups/:id
// @access  Private
const updateGroup = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Group ${req.params.id}` });
});

// @desc    Update group
// @route   DELETE /api/groups/:id
// @access  Private
const deleteGroup = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Group ${req.params.id}` });
});

module.exports = {
  getGroups,
  getGroup,
  setGroup,
  updateGroup,
  deleteGroup,
};
