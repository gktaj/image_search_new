import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchInputdata:"",
    eventID:"",
    AllItems:{
      collection:{
        items:[]
      }
    }
  },
  getters:{
    HQData: state => state.AllItems.collection.items.filter((event) => event.data[0].center === 'HQ'),
    JSCData: state => state.AllItems.collection.items.filter((event) => event.data[0].center === 'JSC'),
    JPLData: state => state.AllItems.collection.items.filter((event) => event.data[0].center === 'JPL'),
    AFRCData: state => state.AllItems.collection.items.filter((event) => event.data[0].center === 'AFRC'),
    GSFCData: state => state.AllItems.collection.items.filter((event) => event.data[0].center === 'GSFC'),
    collectionLoad: state => state.AllItems.collection.items.find((event) => event.data[0].nasa_id === state.eventID),
    collections(state){
      return state.AllItems.collection.items.filter(el => {
        return el.data[0].title.toLowerCase().indexOf(state.searchInputdata.toLowerCase()) !== -1;
      })

    }

  },
  mutations: {
    LOADIMAGES(state,val){
      state.AllItems=val;
    },
    SEARCHINPUT(state, val){
      state.searchInputdata = val;
    },
    EVENTID(state, val) {
      state.eventID = val;
    }
  },
  actions: {
    loadImages({commit}){
      axios.get("https://images-api.nasa.gov/search?q=earth")
      .then(res => commit("LOADIMAGES",res.data))
    }

  },
  modules: {
  }
})
