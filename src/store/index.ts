import { createStore } from 'vuex'

const store = createStore({
  state: {
    dateList: []
  },
  mutations: {
    SET_NEW_DATE_LIST(state: any, data: any) {
      state.archives = data
    }
  },
  actions: {
    updateDateList() {
      const today = new Date()
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const newDateList = []

      for (let i = 0; i < 7; i++) {
        const date = new Date(today)
        date.setDate(today.getDate() + i)
        const dayOfWeek = daysOfWeek[date.getDay()]
        const dateString = `${dayOfWeek}, ${date.toDateString()}`
        newDateList.push(dateString)
      }

      this.dateList = newDateList
    }
  },
  getters: {
    GET_DATE_LIST(state: any) {
      return state.dateList
    }
  }
})

export default store
