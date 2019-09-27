import Mock from 'mockjs'
import { brotliDecompressSync } from 'zlib';

export default {
    loginData: options => {   //options: { url, type, body }
        
        /*return Mock.mock({
            loginData: {
                username: 'admin',
                password: 'admin01'
            }
        })*/console.log(options)
        if (body.username==='admin' && body.password==='admin01') {
            return [200,{status:true}]
        }else{
            return [200,{status:false,message:"Incorrect username or password"}]
        }
        
    }
}
