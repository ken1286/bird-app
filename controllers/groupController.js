const asyncHandler = require('express-async-handler');
const Group = require('../models/groupModel');

// @desc    Get groups
// @route   GET /api/groups
// @access  Private
const getGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find();

  res.status(200).json(groups);
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
  if (!req.body.hens) {
    res.status(400);
    throw new Error('Please add a hens field');
  }

  const group = await Group.create({ ...req.body });
  res.status(200).json({ message: 'success', group });
});

// @desc    Update group
// @route   PUT /api/groups/:id
// @access  Private
const updateGroup = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) {
    res.status(400);
    throw new Error('Group not found');
  }

  const updatedGroup = await Group.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: `success`, updatedGroup });
});

// @desc    Update group
// @route   DELETE /api/groups/:id
// @access  Private
const deleteGroup = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) {
    res.status(400);
    throw new Error('Group not found');
  }

  await group.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGroups,
  getGroup,
  setGroup,
  updateGroup,
  deleteGroup,
};
