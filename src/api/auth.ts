import axios from 'axios';

async function login(){
    const res = await axios.post('/auth/api/login', {id:'test', password:'test'})
    return res.data
}

//test 
async function getUser(){
    const res = await axios.get('/auth/api/user')
    return res.data
}

export { login, getUser }