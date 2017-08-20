const router = require('express').Router();
const login = require('../controllers/login.controller');

// compose login routes
router.get('/', login.render);
router.post('/', login.chooseUser);

module.exports = router;
