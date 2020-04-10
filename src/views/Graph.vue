<template>
  <div class="about mt-3 container">
    <router-link to="/" class="btn btn-primary mb-3">
      <i class="fas fa-arrow-left"></i> Back
    </router-link>
    <apexchart width="100%" height="600" type="bar" :options="options" :series="series"></apexchart>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Graph",
  data() {
    return {
      options: {
        ii: [],
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: ["HQ", "JSC", "JPL", "AFRC", "GSFC"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [0, 0, 0, 0, 0]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["HQData", "JSCData", "JPLData", "AFRCData", "GSFCData"])
  },
  created() {
    this.loadImages();
    this.updateChart();
  },
  methods: {
    ...mapActions(["loadImages"]),
    updateChart() {
      const newData = [
        this.HQData.length,
        this.JSCData.length,
        this.JPLData.length,
        this.AFRCData.length,
        this.GSFCData.length
      ];
      //alert(newData)
      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};
</script>
