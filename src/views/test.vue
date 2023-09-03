<template>
  <div class="date-widget">
    <h2>7-Day Date Widget</h2>
    <ul>
      <li v-for="date in dateList" :key="date">{{ date }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dateList: []
      }
    },
    mounted() {
      this.updateDateList()
      // Обновлять список дат каждую минуту
      setInterval(this.updateDateList, 60000)
    },
    methods: {
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
    }
  }
</script>

<style scoped>
  .date-widget {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .date-widget h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .date-widget ul {
    list-style-type: none;
    padding: 0;
  }

  .date-widget li {
    margin: 5px 0;
    font-size: 14px;
  }
</style>
