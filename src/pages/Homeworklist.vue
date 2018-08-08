
<template>
  <div>
  <div class="num_job">当前待批改作业数量: {{work_count}}</div>
  <ul class="homeworklist">
    <li v-for="item in worklist" :key="item.id" @click="correct(item.id)">
      <span>{{item.subject}}</span>
      <span>{{item.grade}}年级</span>
      <span>{{item.createTime}}</span>
    </li>
  </ul>
    <div class="null_work" v-if="work_length==0">
       <img src="../assets/null.png"/>
      <p>暂无修改的作业哦！</p>
    </div>
  </div>
</template>
<style>
 .num_job{
   font-family: PingFangSC-Regular;
   font-size: 0.30rem;
   color: #999999;
   margin-top: 0.50rem;
   margin-left: 0.24rem;

 }
 .null_work{
   width: 4rem;
   margin: auto;
   margin-top: 2rem;
 }
 .null_work img{
   width: 4rem;
   display: block;
   margin: auto;
 }
 .null_work p{
   font-family: PingFangSC-Regular;
   font-size: 0.30rem;
   color: #999999;
   margin-top: 0.10rem;
   text-align: center;
 }
 .homeworklist{
   margin-top: 0.28rem;
 }
  .homeworklist li{
    width: 7rem;
    height: 0.9rem;
    margin: auto;
    margin-top: 0.2rem;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    border-radius: 6px;

  }
  .homeworklist li span:nth-of-type(1){
    font-family: PingFangTC-Regular;
    font-size: 0.3rem;
    color: #666666;
    line-height: 0.9rem;
    margin-left: 0.24rem;
    float: left;
  }
 .homeworklist li span:nth-of-type(2){
   font-family: PingFangTC-Regular;
   font-size: 0.3rem;
   color: #999999;
   line-height: 0.9rem;
   margin-left: 0.40rem;
   float: left;
 }
 .homeworklist li span:nth-of-type(3){
   font-family: PingFangTC-Regular;
   font-size: 0.30rem;
   color: #999999;
   line-height: 0.90rem;
   margin-right: 0.2rem;
   float: right;
 }
  body{
    background: #fff;
  }

</style>
<script>
export default {
  methods: {
    gethomework () {
      var that = this
      var qs = require('qs')
      this.$http.post('https://www.ruidian360.com/homework/getHomeWorkByTeacher',
        qs.stringify({
          'techer_code': '80782351',
          'page': '1',
          'pageSize': '10'
        })
      )
        .then(function (response) {
          console.log(response)
          that.worklist = response.data.data.rows
          that.work_count = response.data.data.records
          that.work_length = response.data.data.rows.length
          console.log(that.work_length)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    correct (id) {
      this.$router.push({
        path: '/Correct',
        query: {
          id: id
        }
      })
    }
  },
  mounted () {
    this.gethomework()
  },
  data () {
    return {
      worklist: [

      ],
      work_count: '',
      work_length: ''
    }
  }
}
</script>
