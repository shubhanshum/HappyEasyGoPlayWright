const {test,request,expect}=require ('@playwright/test')
const {DataHelper}=require ('../utils/DataHelper')
const loginBody=require('../apipayloads/createuser.json')

test('First Test', async()=>{
    const context=await request.newContext();
    const response=await context.post('https://fakestoreapi.com/auth/login',{
        data:loginBody
    })
    const res=await response.json();
    console.log(res.token);
})