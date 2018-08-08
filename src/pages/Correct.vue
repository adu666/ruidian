<template>
  <div>
    <div class="header">
      <span>{{work.subject}}</span>
      <span>{{work.grade}}年级</span>
      <span>{{work.createTime}}</span>
    </div>
    <div class="work_pic">
      <div class="container" id="containerdata">
        <div style="position: relative;">
          <div id="container" style="position: relative;" >
            <img src="" class="zuoye"/>
            <div class="no_work" v-bind:hidden="fei">非作业图片</div>
          </div>
        </div>
      </div>
      <div class="dui_cuo">
        <div id="dragsource" @touchstart ="tuod('dragsource')" class="right dui">
          <img src="../assets/dui.svg" alt="">
        </div>
        <div id="cuo" @touchstart="tuod('cuo')" class="wrong cuo">
          <img src="../assets/cuo.svg" alt="">
        </div>
        <div class="fei" @click="fei_work">
          <img src="../assets/fei.svg">
        </div>
      </div>
    </div>
    <div class="commentbox">
      <div class="pingyu">老师评语</div>
      <textarea class="comment" placeholder="请对同学加以鼓励！"></textarea>
    </div>
    <div class="answer">
      <label for="fils">
      <span>正确答案</span>
      <span>上传</span>
      </label>
    </div>
    <input class="file" name="file" type="file"  id="fils"  accept="image/png,image/gif,image/jpeg" @change="update" style="display: none"/>
    <!--<img src="" class="news"/>-->
    <div class="submit" @click="submitJob">
      提交批改
    </div>
  </div>
</template>
<style>
  .header{
    width: 7rem;
    height: 0.9rem;
    margin: auto;
    margin-top: 0.2rem;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    border-radius: 6px;
  }
  .header span:nth-of-type(1){
    font-family: PingFangTC-Regular;
    font-size: 0.3rem;
    color: #666666;
    line-height: 0.9rem;
    margin-left: 0.24rem;
    float: left;
  }
  .no_work{
    z-index:1002;
    width:2.6rem;
    height:0.5rem;
    position:absolute;
    left:50%;
    top:50%;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.5rem;
    background:red;
    border-radius:12rpx;
    transform:translate(-50%, -50%);
    overflow:hidden;

  }
  .header span:nth-of-type(2){
    font-family: PingFangTC-Regular;
    font-size: 0.3rem;
    color: #999999;
    line-height: 0.9rem;
    margin-left: 0.40rem;
    float: left;
  }

  .header span:nth-of-type(3){
    font-family: PingFangTC-Regular;
    font-size: 0.30rem;
    color: #333333;
    line-height: 0.90rem;
    float: right;
    margin-right: 0.24rem;
  }
  #container{
    height: auto;
  }
  .zuoye{
    width: 100%;
    display: block;
    margin: auto;
  }
  .work_pic{
    width: 7rem;
    margin: auto;
    margin-top: 10px;
    background: #FFFFFF;
    border-radius: 6px;
  }
  .work_pic .works{
    width:6.6rem ;
    display: block;
    margin: auto;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .dui_cuo{
    width: 100%;
    height: 1rem;
    display: flex;
    background: #F5F5F5;
    box-shadow: inset 0 0 0 0 #E1E1E1;
  }
  .dui{
    width: 0.6rem;
    height: 0.6rem;
    flex: 1;
    margin: auto;
    margin-top: 0.2rem;
  }
  .cuo{
    width: 0.6rem;
    height: 0.6rem;
    margin: auto;
    margin-top: 0.2rem;
    flex: 1;
  }
  .fei{
    width: 0.6rem;
    height: 0.6rem;
    margin: auto;
    margin-top: 0.2rem;
    flex: 1;
  }
  .fei img{
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    margin: auto;
  }
  .dui img{
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    margin: auto;
  }
  .cuo img{
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    margin: auto;
  }
  .commentbox{
    width: 7rem;
    height: 2rem;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    border-radius: 6px;
    margin: auto;
    margin-top: 0.2rem;
  }
  .pingyu{
    background: #EBEBEB;
    border-radius: 6px;
    font-family: PingFangSC-Regular;
    font-size: 0.3rem;
    color: #A2C395;
    line-height: 0.7rem;
    padding-left:0.24rem ;
  }
  .comment{
    background: #ffffff;
    font-family: PingFangSC-Regular;
    font-size: 0.3rem;
    color: #999999;
    padding-left: 0.2rem;
    width: 100%;
    height: 1.3rem;
    border: none;
    resize: none;
    outline: none;
  }
  .answer{
    width: 7rem;
    height: 0.9rem;
    margin: auto;
    margin-top: 0.2rem;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    border-radius: 6px;
  }
  .answer span:nth-of-type(1){
    font-family: PingFangTC-Regular;
    font-size: 0.3rem;
    color: #666666;
    line-height: 0.9rem;
    margin-left: 0.24rem;
    float: left;
  }
  .answer span:nth-of-type(2){
    font-family: PingFangTC-Regular;
    font-size: 0.3rem;
    color: #666666;
    line-height: 0.9rem;
    margin-right: 0.24rem;
    float: right;
  }
  .submit{
    width: 100%;
    height: 0.98rem;
    background: #DA948C;
    font-family: PingFangTC-Medium;
    font-size: 0.36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.98rem;
    text-align: center;
    margin-top:0.54rem ;
  }
  .imgItem{
    width: 0.6rem;
    height: 0.6rem;
  }
  .imgItem img{
    width: 0.6rem;
    height: 0.6rem;
    display: block;
  }
  body{
    background: #fff;
  }
</style>
<script>
import '../js/html2canvas.js'
import '../js/jqeury.js'
import '../js/jqueryui.js'
import '../js/touchPunch.js'
export default {
  data () {
    return {
      fei: true,
      id: '',
      work: '',
      newimgurl: '',
      error_nums: ''
    }
  },
  beforeCreate () {

  },
  created () {
    $(document).on('click', '.imgItem', function () {
      $(this).children().remove()
    })
  },
  beforeMount () {

  },
  mounted () {
    this.tuod('cuo')
    this.tuod('dragsource')
    this.id = this.$route.query.id
    console.log(this.id)
    var that = this
    var qs = require('qs')
    this.$http.post('https://www.ruidian360.com/homework/selectHomeWorkPicById',
      qs.stringify({
        'homework_id': this.id
      })
    )
      .then(function (response) {
        console.log(response)
        that.work = response.data.data
        console.log(that.work)
        var url = 'https://www.ruidian360.com' + response.data.data.oldPicPath
        getBase64(url)
          .then(function (base64) {
            $('.zuoye').attr('src', base64)
          }, function (err) {
            console.log(err) // 打印异常信息
          })

          // 传入图片路径，返回base64
        function getBase64 (img) {
          function getBase64Image (img, width, height) { // width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
            var canvas = document.createElement('canvas')
            canvas.width = width || img.width
            canvas.height = height || img.height

            var ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            var dataURL = canvas.toDataURL()
            return dataURL
          }
          var image = new Image()
          image.crossOrigin = ''
          image.src = img
          var deferred = $.Deferred()
          if (img) {
            image.onload = function () {
              deferred.resolve(getBase64Image(image)) // 将base64传给done上传处理
            }
            return deferred.promise() // 问题要让onload完成后再return sessionStorage['imgTest']
          }
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  beforeUpdate () {

  },
  updated () {

  },
  beforeDestroy () { // 离开

  },
  watch: { // 观察属性

  },
  components: { // 组件

  },
  computed: { // 计算属性

  },
  methods: { // 函数
    jquerydj () {
      //   console.log($('#btn').text())
      var that = this
      this.error_nums = $('.errors').length
      var appraise = $('.comment').val()
      console.log(this.error_nums)
      var targetDom = $('#containerdata')
      var copyDom = targetDom.clone()
      copyDom.width(targetDom.width() + 'px')
      copyDom.height(targetDom.height() + 'px')
      $('body').append(copyDom)
      html2canvas(copyDom, {
        allowTaint: true,
        taintTest: false,
        height: $('.zuoye').outerHeight(),
        onrendered: function (canvas) {
          // 把截取到的图片替换到a标签的路径下载
          that.newimgurl = canvas.toDataURL()
          // $('.news').attr('src', canvas.toDataURL())
          copyDom.css('display', 'none')
          var qs = require('qs')
          that.$http.post('https://www.ruidian360.com/homework/updateHomeWorkPic',
            qs.stringify({
              id: that.id,
              newPicPath: that.newimgurl,
              teacherId: '80782351',
              error_count: that.error_nums,
              answerDesc: appraise
            })
          )
            .then(function (response) {
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      })
    },
    tuod (ids) {
      var px = 'px'
      var top = ''
      var lefts = ''
      var texts = $('#' + ids + '').html()
      $('#' + ids + '').draggable({
        helper: 'clone'
      })
      var header_height = $('.header').height()
      var widths = $('.work_pic').width()
      console.log(header_height)
      console.log(widths)
      $('#container').droppable({
        drop: function (event, ui) {
          top = parseInt((ui.offset.top) - header_height - 10)
          if (ids == 'cuo') {
            lefts = parseInt((ui.offset.left))
            $(this).append($("<p class='imgItem errors' style='position:absolute;padding:0px; margin:0px;left:" + lefts + '' + px + ';top:' + top + '' + px + "'>" + texts + '</p>'))
          } else {
            lefts = parseInt((ui.offset.left))
            $(this).append($("<p class='imgItem' style='position:absolute;padding:0px; margin:0px;left:" + lefts + '' + px + ';top:' + top + '' + px + "'>" + texts + '</p>'))
          }
        }
      })
    },
    fei_work () {
      if (this.fei === true) {
        this.fei = false
      } else {
        this.fei = true
      }
    },
    submitJob () {
      this.jquerydj()
    },
    update (e) {
      let file = e.target.files[0]
      let param = new FormData() // 创建form对象
      param.append('files', file)// 通过append向form对象添加数据
      param.append('id', this.id)// 添加form表单中其他数据
      param.append('teacherId', '80782351')
      console.log(param.get('file'))
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      } // 添加请求头
      this.$http.post('https://www.ruidian360.com/homework/updateHomeWorkAnswerPic', param, config
      )
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }

  }
}
</script>
