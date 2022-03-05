const express = require('express');
const { addFilm, getFilms, getFilm, getFilmCategory } = require('../controllers/film');
const { uploadFile } = require('../middleware/uploadFile');
const router = express.Router();
const  {addUser,checkAuth,login, getUser} = require('../controllers/user')
const { auth } = require('../middleware/auth');
const { buyFilm, getTransaction, getTransactionUser, getApprovement, updateTransaction, getFilmApproved } = require('../controllers/transaction');
const { getCategories } = require('../controllers/category');
router.post('/register', addUser);
router.get('/check-auth' ,auth, checkAuth)
router.post('/login', login )
router.get('/getuser',auth, getUser)
router.post('/addfilmm', uploadFile('image'), addFilm)
router.get('/getfilms',getFilms )
router.get('/getfilm/:id',getFilm)
router.get('/getfilmcategory/:id',getFilmCategory)
router.post('/buyfilm',uploadFile('image'),buyFilm);
router.get('/getransaction',auth,getTransaction);
router.get('/getransactionuser',auth,getTransactionUser);
router.get('/getapprovement/:id',auth,getApprovement);
router.get('/getfilmapproved',auth,getFilmApproved);
router.patch('/updatetransaction/:id',auth,updateTransaction)
router.get('/getcategories',getCategories);
module.exports = router