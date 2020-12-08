
<script>
import Vue from 'vue'
import { Line , mixins} from 'vue-chartjs'



export default{
  extends: Line,
  mixins: [mixins.reactiveProp],
  props:['options'],

  mounted () {
    this.renderChart(this.chartData, this.options)
  },


  methods: {
    RenderChart() {
      console.log('render')
      this.renderChart(this.chartData, this.options)
    }
  },


}
</script>
