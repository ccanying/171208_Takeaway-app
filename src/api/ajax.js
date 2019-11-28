import axios from 'axios'
export default function ajax(url,data={},type="GET"){
return new Promise(function(resolve, reject){
    let promise
    if (type=="GET"){
        let datastr='';
        Object.keys(data).forEach(keys=>{
            datastr+=datastr+'='+data[keys]+'&'
        } )
    if(datastr!==""){
        datastr=datastr.substring(0,datastr.lastIndexOf("&"));
        url=url+'?'+datastr
     }
     promise=axios.get(url)
    }else{
        promise=axios.post(url,data)
    }
    promise.then(function(response){
        resolve(response.data)
    }).catch(function(error){
        reject(error)
    })
    
})
}