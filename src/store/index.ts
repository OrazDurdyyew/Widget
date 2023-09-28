import { createStore } from 'vuex'
import { WidgetDate } from '@/types/index'

export interface State {
  count: number
}

const store = createStore({
  state: {
    dateList: [] as WidgetDate[],
    activeDate: {
      day: 0,
      dayOfWeek: '',
      month: '',
      year: 0,
      date: ''
    } as WidgetDate
  },
  mutations: {
    SET_NEW_DATE_LIST(state: any, data: any) {
      state.dateList = data
    },
    SET_ACTIVE_DATE(state: any, data: any) {
      state.activeDate.day = data.day
      state.activeDate.dayOfWeek = data.dayOfWeek
      state.activeDate.month = data.month
      state.activeDate.year = data.year
      state.activeDate.date = data.date
    }
  },
  actions: {
    getDateList({ commit }: any) {
      const today = new Date()
      const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const newDateList = []

      for (let i = 0; i < 7; i++) {
        const date = new Date(today)
        date.setDate(today.getDate() + i)
        const dayOfWeek = daysOfWeek[date.getDay()]
        const currentMonth = months[date.getMonth()]
        const dateString = { dayOfWeek: dayOfWeek, day: date.getDate(), month: currentMonth, year: date.getFullYear(), date: date }
        newDateList.push(dateString)
      }

      commit('SET_NEW_DATE_LIST', newDateList)
      commit('SET_ACTIVE_DATE', newDateList[0])
    }
  },
  getters: {
    newDateList(state: any) {
      return state.dateList
    },
    activeDate(state: any) {
      return state.activeDate
    }
  }
})

export default store
