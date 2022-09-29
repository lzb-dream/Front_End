import server from "@/request/index.";

export function getSongsIntroduceData(id) {
    return server({
        method: "GET",
        url: `/songsIntroduceData/${id}`
    })
}

export function getSongsListData(id) {
    return server({
        method: "GET",
        url: `/songsListData/${id}`
    })
}