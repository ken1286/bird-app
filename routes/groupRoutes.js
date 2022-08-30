const express = require('express');
const router = express.Router();
const {
  getGroups,
  getGroup,
  setGroup,
  updateGroup,
  deleteGroup,
} = require('../controllers/groupController');

// router.route('/').get(getGroups).post(setGroup);
// router.route('/:id').delete(deleteGroup).put(updateGroup);

router.get('/', getGroups);

router.post('/', setGroup);

router.get('/:id', getGroup);

router.put('/:id', updateGroup);

router.delete('/:id', deleteGroup);

module.exports = router;
