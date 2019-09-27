//import axios from 'axios'
import axios from '@/httpInterceptor'

const statisticsUri = '/cgi-bin/main.cgi/statistics'
const loginUri = '/cgi-bin/main.cgi/login'

export default {
    login (userinfo) {
        return axios.post(loginUri, userinfo)
    },
    statistics :{
        load(type='general') {
            return axios.get(
                statisticsUri,
                {
                  params:{ type:type }
                }
            )
        }
    }


}


