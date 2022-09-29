export default {
    namespaced:true,
    state:{
        a:{
            b:123
        }
    },
    mutations:{
        changeA(state,value){
            state.a = value
        }
    },
}