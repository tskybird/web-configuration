import request from './request'

const statisticsUri = '/statistics'
const loginUri = '/login'
const capabilitiesUri = '/lan0data'

function login (userinfo) {
  return request.post(loginUri, userinfo)
}

function capabilities() {
  return request.get(capabilitiesUri)
}

const statistics = {
  load: function(type='general') {
    return request.get(
      statisticsUri,
        {
          params:{ type:type }
        }
    )
  }
}

export default{
  login, 
  capabilities,
  statistics

}

// export default {
//     login (userinfo) {
//         return requset.post(loginUri, userinfo)
//     },
//     statistics: {
//         load(type='general') {
//             return requset.get(
//                 statisticsUri,
//                 {
//                   params:{ type:type }
//                 }
//             )
//         }
//     },
//     capabilities() {
//         return requset.get(capabilitiesUri)
//     }
// }


