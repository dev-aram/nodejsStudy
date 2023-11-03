import bcrypt from 'bcrypt';

let users = [
    {
        id: '1',
        username: 'apple',
        password: '$2b$10$6NVVL4gEtPh684Ncn2sCRe/LPe0u4kRkhBYSoiLx4bTGW5gwQ58Dy',
        name:'김사과',
        email:'apple@apple.com',
        url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYEhHx-OXQF1NqVRXPL8R50ggKje3hQTvIA&usqp=CAU'
    },
]


//async await
// node.js의 장점인 비동기를 유지하면서 동기적인 모습의 코드 스타일을 적용할 수 있다는 점이다.
export async function join(id, username, password, name, email){
    const user = {
        id,
        username,
        password,
        name,
        email,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYEhHx-OXQF1NqVRXPL8R50ggKje3hQTvIA&usqp=CAU"
    }
    users = [user, ...users]
    return users;
}

export async function login(username, password){
    const user = users.find((user)=>user.username === username);
    if(user){
        if(bcrypt.compareSync(password, user.password)){
            return user;
        }
    }

}