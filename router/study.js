import express from 'express';
import { validate } from '../middleware/validator.js';
import {body, param} from 'express-validator';
import * as userController from "../controller/study.js";

const validateUserName = [
    body('username').trim().isLength({min:5}).withMessage('username을 5자 이상 입력하세요'), validate
]

const validatePw = [
    body('password').trim().isLength({min:5}).withMessage('비밀번호를 5자 이상 입력하세요'), validate
]
const validateEmail = [
    body('email').trim().isEmail().withMessage('이메일을 입력하세요'), validate
]

// 라우터 기능을 사용
const router = express.Router();

router.get("/", (req, res, next)=>{
    console.log("들어옴");
    res.status(200).send("스터디 경로 들어옴");
})

router.post("/signup",validateUserName, validatePw, validateEmail, userController.joinUser)

router.post("/login", userController.login)


export default router;