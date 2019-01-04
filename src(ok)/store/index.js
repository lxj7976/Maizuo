import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import car from './car'
import movielist from "./movielist"
export default new Vuex.Store({
	modules:{
		car,movielist
    }
})