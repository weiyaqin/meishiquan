import Vue from 'vue'
import mock from '../config-mock' // 发布时，务必卸载mock 
const mockData = Vue.__Developing ? mock : {}; // 判断是否开启全局mock数据

if(Vue.__Developing){
    console.warn('请卸载mock数据')
}

// ajax 
function ajax(arg){

    let urls = arg.url.split('.');
    // console.log(urls)

    // 获取api中的地址
    let realUrl = Vue.apiConfig;  
    for(let i=0,len=urls.length;i<len;i++){
        realUrl = realUrl[urls[i]]
    }
    // console.log(Vue.__Basepath)


    realUrl = Vue.__Basepath + realUrl; 
    // console.log(realUrl)

    var options = {
        url: realUrl,
        data: arg.data,
        method: arg.method || Vue.__HttpMethod,
        success:arg.success || function(){},
        error:arg.error || function(){}
    }

    console.log(urls[1])
    console.log(mock[urls[1]])
    console.log(mock[urls[1]].inservice)

    // test mock
    if(!!urls[1] && mock[urls[1]] && mock[urls[1]].inservice){

        function mockTest(props){

            let mockdata = mock;
            // console.log(urls)
            for (let i=1;i<urls.length;i++) {

                if(typeof(mockdata[urls[i]])=='function'){
                    mockdata = mockdata[urls[i]](props);
                }else{
                    mockdata = mockdata[urls[i]]
                }
            }

            // console.log(mockdata)

            return {
                data:mockdata.result,
                res:{data:mockdata}
            };

        }

        var mockdata = mockTest(arg.data)

        // console.log('—— get mockdata from —— '+arg.url)
        // console.log(mockdata)

        options.success(mockdata.data,mockdata.res);
        return;
    }
    // 请求数据
    Vue.http({
        url: options.url,
        data: options.data,
        method: options.method,
        headers:{'Content-Type':'application/x-www-form-urlencoded'}
    }).then(function(response) {
        console.log(response)
        // 成功
        if(!response.data.err_code){
            options.success(response.data,response)
        }
        // 登陆状态失效
        else if(response.data.err_code-0==4444){

            window.localStorage.removeItem('hasLogin');
            window.location.reload();

        }
        else{
            // console.log(response.data.err_msg)
            options.error(response.data.err_msg)
        }

    }, function(response) {

        options.error(response.statusText)

    })
}


function install(Vue) {
    Vue.Tool = Vue.tool = {
        ajax
    }

    Object.defineProperties(Vue.prototype, {

        $Tool: {
            get: function () {
                return Vue.Tool
            }
        }

    });


}

if (window.Vue) {
    Vue.use(install);
}

module.exports = install;
