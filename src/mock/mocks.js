import generalData from './mocks-json/general.json'
import wirelessData from './mocks-json/wireless.json'
import networkData from './mocks-json/network.json'
import capabilitiesData from './mocks-json/lan0data.json'

//let isAuthorization = true  //cannot get the Authorization field of http request header,so mock
export default {
    loginData: options => {        //options: { url, type, body }   body: '{"username":"admin","password":"admin01"}'  
        let userInfo = JSON.parse(options.body)  //JSON.parse   
        if (userInfo.username==='admin' && userInfo.password==='admin01') {                      
            return { status:true }
        }else{            
            return { 
                status:false,
                message:"Incorrect username or password"
            }
        }  
    },

    statistics: options => { 
        let matches = options.url.match(/\/cgi-bin\/main.cgi\/statistics\?type=([\w,]+)/)
        let types = (matches && matches.length > 1) ? matches[1] : 'general'        
        types = types.split(',')
        let allresource = {}
        let deviceName
        types.forEach(type => {
            let resource
            switch(type) {
                case 'network': resource = networkData
                    break                
                case 'wireless': resource = wirelessData
                    break
                default:  // general
                    {
                        deviceName = 'Device' + Math.round((Math.random()*100)+1) 
                        resource = {
                            ...generalData, 
                            deviceName:deviceName
                        }
                    }
                    break
            }
            return allresource[type] = resource
        });
        return allresource        
    },
    
    capabilities: options => {        
        return capabilitiesData
    }
}
