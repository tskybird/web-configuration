import Mock from 'mockjs'
import mocks from './mocks'


export default {
    startMock () {
        Mock.setup({
            timeout: '300-600'   //default: '10-100', set ajax timeout. stimulate network transmission
        })
          
        Mock.mock(/\/cgi-bin\/main.cgi\/login/, 'post', mocks.loginData)              
        Mock.mock(/\/cgi-bin\/main.cgi\/statistics(\?type=[\w,]+)?/, 'get', mocks.statistics) //response: {status, data, header, statusText}
        Mock.mock(/\/cgi-bin\/main.cgi\/lan0data/, 'get', mocks.capabilities)
        
    }
}
