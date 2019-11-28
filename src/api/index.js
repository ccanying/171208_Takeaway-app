import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress =(geohash)=>{ajax('/position/${geohash}')}
// 2、获取食品分类列表
export const reqFoodCategorys =()=>{ajax('/index_category')}
// 3、根据经纬度获取商铺列表
export const reqShops =(latitude,longitude)=>{ajax('/shops',{longitude,latitude})}
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop=(geohash,keyword)=>{}
// 6、用户名密码登陆
export const reqPwdLogin=({name,pwd,captcha})=>{}
// 7、发送短信验证码
export const reqSendCode=(phone)=>{}
// 8、手机号验证码登陆
export const reqSmsLogin=(phone,code)=>{}
// 9、根据会话获取用户信息
export const reqUserInfo=()=>{}
// 10、用户登出
export const reqLogout=()=>{}