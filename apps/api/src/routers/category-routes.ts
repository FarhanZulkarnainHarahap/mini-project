import express from 'express';
import { createOneCategories, getAllCategories } from '../controllers/category-contoller.js';


const router = express.Router();
router.route('/').get(getAllCategories).post(createOneCategories);
export default router;