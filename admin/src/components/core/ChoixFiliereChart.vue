<template>
  <div>
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7]
      ],
      chartOptions: {
        chart: {
          title: "My Daily Activities",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  },
  components: {
    GChart
  }
};
</script>
