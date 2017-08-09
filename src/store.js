import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		appname:"aaa",

		
	},

	actions:{
		"UPDATE_NAME":function(store,payload){
			console.log("action---"+payload);
			/*
				1. 数据二次加工
				2. ajax异步请求
			 */
			store.commit("UPDATE_NAME_MUTATION",payload);
		},

	},

	mutations:{
		"UPDATE_NAME_MUTATION":function(state,payload){
			console.log("mutation--"+payload);
			state.appname = payload;
		}
	}
})

export default store;