import express from 'express';
import { registerController, loginController, forgotPasswordController, testController, updateProfileController, getOrderController, getAllOrderController, orderStatusController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router object
const router = express.Router();

//routing
//Register || Method POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController);

//forgot Password
router.post("/forgot-password", forgotPasswordController);

///test routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected  user route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
})

//protected admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

//update profile
router.put('/profile', requireSignIn, updateProfileController);

//orders
router.get('/orders', requireSignIn, getOrderController);

// all orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrderController);

//order status update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController);

export default router;