const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    login
} = require('../../controllers/user-controller');

const { authMiddleware} = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/books/:bookId').delete(authMiddleware);

module.exports = router;