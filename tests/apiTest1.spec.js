const { request, test } = require('@playwright/test');
const {DataHelper}=require('../utils/DataHelper')

test('api', async () => {
    const context = await request.newContext();

    const response = await context.post('https://fakestoreapi.com/auth/login', {
        data: {
            username: 'mor_2314',
            password: '83r5^_'
        }
    });

    const res = await response.json();
    let tokenGenerated=res.token;
    DataHelper.setData('MyToken', tokenGenerated);
});

test('second test', async()=>{
    let token=DataHelper.getData('MyToken');
    console.log('Token=>'+token)
    const context=await request.newContext();
    const response=await context.get('https://fakestoreapi.com/carts',{
        
            headers:{
                'Authorization':'Bearer '+token
            }
        
    })
    const res=await response.json();
    console.log(res);
})

test('Third test', async()=>{
    const context=await request.newContext();
    const response=await context.get('https://api.rootnet.in/covid19-in/contacts',{
        headers:{
            'Content-Type':'application/json'
        }
    })
    const res=await response.json();
    console.log(res.data.contacts.primary.email);
    console.log(res.data.contacts.regional[1].loc);
})