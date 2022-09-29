function remSize() {
    //document.documentElement返回html跟元素
    //window.innerWidth返回文档的宽度
    var deviceWidth = document.documentElement.clientWidth||window.innerWidth
    if (deviceWidth>=750){
        deviceWidth = 750
    }
    if (deviceWidth<=320){
        deviceWidth = 320
    }
    //设置rem
    console.log(deviceWidth)
    document.documentElement.style.fontSize = (deviceWidth/7.5)+'px'
    //设置字体大小
    document.body.style.fontSize=0.29+'rem'
}
remSize()
onresize =function () {
    console.log('窗口调整')
    remSize()
}