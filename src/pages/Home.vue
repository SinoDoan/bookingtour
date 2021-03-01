<template>
  <div >
    <v-carousel 
      cycle
      height="600"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item,i) in items"
            :key="i"
            :src="item.src"
        reverse-transition="transition"                                                                                         
        transition="transition"
      >
      </v-carousel-item>
    </v-carousel>
    
<div class="search-sec">
    <div class="container py-6 py-md-7 text-white z-index-20">
    <div class="row">
      <div class="col-xl-10">
        <div class="text-center text-lg-left d-none d-md-block mb-2">
           <img src="#" alt="ĐÔ ĐĨ" style="height: 50px;" />
        </div>
        <div class="text-center text-lg-left d-md-block">
          <h4 class="display-5 font-weight-bold text-shadow">
            CÁP KÈO NHANH CHÓNG - TÌM ĐỐI DỄ DÀNG
          </h4>
        </div>
        <div class="mb-2">
          <h6>Tham gia cùng <strong class="text-secondary" id='user_count' number='77020'> 0 </strong> người chơi khác ngay!</h6>
          <a href="https://bit.ly/sporta-cap-keo-tim-doi"><img style="width: 170px" src="https://www.sporta.vn/assets/icon-appstore-0ac658e90248e413db2bdc584e50b25b06a8229f6a74efb816b93194d0491829.svg" /></a>
          <a href="https://bit.ly/sporta-capkeo-android"><img style="width: 170px" src="https://www.sporta.vn/assets/icon-googleplaystore-18c9b8d2140c5ad8657c670f05036c5a62760da182f1d8cbe8c40c467c7f2b4b.svg" /></a>
        </div>
        <div class="search-bar mt-4 p-3 p-lg-1 pl-lg-4">
          <form id="main-search-form" action="/dat-san-online">
            <input type="hidden" name="city_id" value="50">
            <input type="hidden" name="input_type" value="string">
            <div class="row">
              <div class="col-lg-4 d-flex align-items-center form-group">
                <input type="text" name="search_string" id="search-input" placeholder="Tên Quận hoặc Tên sân bóng" class="form-control border-0 shadow-0">
              </div>
              <div class="col-lg-3 d-flex align-items-center form-group">
                <!-- <input type="text" name="date" class="datepicker datepicker-search form-control border-0 shadow-0" data-provide="datepicker" value='T6, 26-02-2021'> -->
                <input type="date" class="form-control border-0 shadow-0">
              </div>
              <div class="col-lg-3 d-flex align-items-center form-group">
                <!-- <input type="text" value="2021-02-26 13:31:07 +0700" name="begin_time" title="Vào lúc" placeholder="Vào lúc" data-style="btn-form-control" class="form-control border-0 shadow-0 main-timepicker"> -->
              　<input type="time" class="form-control border-0 shadow-0">
              </div>
              <div class="col-lg-2">
                <button type="submit" class="btn btn-primary btn-block rounded-xl h-60">Tìm kiếm</button> <!-- Submit btn -->
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>

<div class="bg-light">
  <div class="container">
    <div class="text-center pb-lg-4">
      <h2>Tại sao lại cần Sporta</h2>
      <p class="subtitle text-secondary">Nền tảng đặt sân - tìm đối đầu tiên tại Việt Nam</p>
    </div>
    <div class="row">
      <div class="col-lg-4 mb-3 mb-lg-0 text-center">
        <div class="px-0 px-lg-3">
          <div class="icon-rounded bg-primary-light mb-3">
            <img class="icon-image" src="https://www.sporta.vn/assets/info-b35871504f4af944c9e1f28c2419d2df5ee8fa2dcab47d650aa94d4c054eaa9a.svg" />
          </div>
          <h3 class="h5">Tìm kiếm và đặt sân bóng online</h3>
          <p class="text-muted">Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng</p>
        </div>
      </div>
      <div class="col-lg-4 mb-3 mb-lg-0 text-center">
        <div class="px-0 px-lg-3">
          <div class="icon-rounded bg-primary-light mb-3">
            <img class="icon-image" src="https://www.sporta.vn/assets/book-d9bc1eefa8ffc1c1a130292a3714a9565f07b44eda536fe02456b2a55ba5af1b.svg" />
          </div>
          <h3 class="h5">Công cụ quản lý sân bóng online</h3>
          <p class="text-muted">Quản lý lịch đặt đơn giản, tiếp nhận đặt sân online dễ dàng, lấp đầy sân trống</p>
        </div>
      </div>
      <div class="col-lg-4 mb-3 mb-lg-0 text-center">
        <div class="px-0 px-lg-3">
          <div class="icon-rounded bg-primary-light mb-3">
            <img class="icon-image" src="https://www.sporta.vn/assets/pr-5099167e7f25e00100225c9db1dbd0fb96c51c1dd95fd7e2e9f90d5a3186c985.svg" />
          </div>
          <h3 class="h5">Tạo đội, tìm đối dễ với mobile app</h3>
          <p class="text-muted">
            <div>
              <a href="https://bit.ly/sporta-cap-keo-tim-doi"><img style="width: 150px" src="https://www.sporta.vn/assets/icon-appstore-0ac658e90248e413db2bdc584e50b25b06a8229f6a74efb816b93194d0491829.svg" /></a>
              <a href="https://bit.ly/sporta-capkeo-android"><img style="width: 150px" src="https://www.sporta.vn/assets/icon-googleplaystore-18c9b8d2140c5ad8657c670f05036c5a62760da182f1d8cbe8c40c467c7f2b4b.svg" /></a>
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
</template>

<script>
import TourList from '../components/tour/TourList'
export default {
  name: 'IndexPage',

  components: {
    TourList
  },

  data () {
    return {
      items: [
       {src: require('../assets/img/img1.jpg')},
       {src: require('../assets/img/img2.jpg')},
      ],
      text: ''
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {

    }
  }
}
</script>

<style lang="scss" scoped>
.search-sec{
        position: relative;
        top: -500px;
    }

</style>
