<template>
  <v-row>
    <v-col cols="3" xs="12" md="6" lg="3"> hardware</v-col>
    <v-col cols="3" xs="12" md="6" lg="3">network loads</v-col>
    <v-col cols="3" xs="12" md="6" lg="3"> 
        <client-only>
          <VChart class="chart" :option="option" />
        </client-only>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>

const option = ref({
  series: [
    {
      type: 'gauge',
      center: ['50%', '60%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 100,
      splitNumber: 10,
      itemStyle: {
        color: '#FFAB91'
      },
      progress: {
        show: true,
        width: 30
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 30
        }
      },
      axisTick: {
        distance: -45,
        splitNumber: 5,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      splitLine: {
        distance: -52,
        length: 14,
        lineStyle: {
          width: 3,
          color: '#999'
        }
      },
      axisLabel: {
        distance: -20,
        color: '#999',
        fontSize: 20
      },
      anchor: {
        show: false
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        width: '60%',
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, '-15%'],
        fontSize: 60,
        fontWeight: 'bolder',
        formatter: '{value} %',
        color: 'inherit'
      },
      data: [
        {
          value: 0 // Initial value
        }
      ]
    }
  ]
});

</script>


<style scoped>
.chart {
  /* height: 100vh; */
  width: 100%;
  height: 150px;
}
</style>