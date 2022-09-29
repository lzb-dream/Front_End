import server from "@/request/index.";

export function getSwiperImage() {
    return server({
        method: 'GET',
        url: '/swiper'
    })
}

export function getFountMusicData() {
    return server({
        method: 'GET',
        url: '/fountMusic',
        // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
        transformResponse: [function (data) {
            // 对接收的 data 进行任意转换处理
            data = JSON.parse(data)
            data = data['FountMusicData'].slice(0,10)
            return data;
        }],
    })
}