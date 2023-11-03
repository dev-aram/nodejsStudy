import * as studyRepository from '../data/study.js';
import bcrypt from 'bcrypt';

// join
export async function joinUser(req, res, next) {
    // 바디로 넘어온 값을 객체 키값에 맞게 넣어줌
    const {id, username, password, name, email} = req.body;
    const hashed = bcrypt.hashSync(password, 10);
    const user = await studyRepository.join(id, username, hashed, name, email);

    if(user){
        res.status(200).json(user)
    }else{
        res.status(400).json({message:`회원가입에 실패했습니다.`})
    }

}

// login
export async function login(req, res, next) {
    const {username, password} = req.body;
    const user = await studyRepository.login(username, password);

    if(user){
        res.status(200).json(user);
    }else{
        res.status(400).json({message:`아이디 비밀번호를 확인해주세요.`})
    }
}