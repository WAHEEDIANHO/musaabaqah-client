import Vuex from 'vuex'

// import axios from 'axios'


const store = new Vuex.Store({
    state: {
        chapters: []
    },
    mutations: {
       saveChapter(state, chapter) {
           state.chapters.push(chapter)
       }
    },
    actions: {
       async getChapters(context, chapter) {
            context.commit('saveChapter', chapter);
        }
    }
})

export default store