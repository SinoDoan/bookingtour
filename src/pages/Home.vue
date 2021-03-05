<template>
  <div >
    <v-carousel 
      cycle
      height="500"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item,i) in items"
            :key="i"
            :src="item.src"
        reverse-transition="fade-transition"                                                                                         
        transition="fade-transition"
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
          <form id="main-search-form">
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

<section class="py-5 bg-white">
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-8">
        <p class="subtitle text-primary">Địa điểm hàng đầu</p>
        <h4>Hơn 703 sân bóng trên toàn quốc</h4>
      </div>
      <div class="col-md-4 d-lg-flex align-items-center justify-content-end"><a href="/san/tim" class="text-muted text-sm">
          Xem tất cả sân bóng<i class="fas fa-angle-double-right ml-2"></i></a></div>
    </div>
    <div class="row">
      <div class="swiper-container guides-slider">
        <!-- Additional required wrapper-->
        <div class="swiper-wrapper">
          <!-- Slides-->
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-2" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_0_thumb-62159cc1ec2f646c7dd403aa891ce4ea9ca079582b1d686455e63c66addbca85.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 2</h6>
                  <p class="card-text text-sm">7 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-1" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_0_thumb-62159cc1ec2f646c7dd403aa891ce4ea9ca079582b1d686455e63c66addbca85.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 1</h6>
                  <p class="card-text text-sm">2 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-12" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_1_thumb-c273212be85e396928e29af266311e55836cfd866375c119fed832a87327d7e3.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 12</h6>
                  <p class="card-text text-sm">24 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-thu-duc" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_2_thumb-37ab11320636d5a596ea053938bc418fbb15b7e0797a1d72d51fbe1e770ba7ba.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận Thủ Đức</h6>
                  <p class="card-text text-sm">37 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-9" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_0_thumb-62159cc1ec2f646c7dd403aa891ce4ea9ca079582b1d686455e63c66addbca85.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 9</h6>
                  <p class="card-text text-sm">26 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-go-vap" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_1_thumb-c273212be85e396928e29af266311e55836cfd866375c119fed832a87327d7e3.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận Gò Vấp</h6>
                  <p class="card-text text-sm">18 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-binh-thanh" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_2_thumb-37ab11320636d5a596ea053938bc418fbb15b7e0797a1d72d51fbe1e770ba7ba.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận Bình Thạnh</h6>
                  <p class="card-text text-sm">18 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-tan-binh" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_0_thumb-62159cc1ec2f646c7dd403aa891ce4ea9ca079582b1d686455e63c66addbca85.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận Tân Bình</h6>
                  <p class="card-text text-sm">21 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-tan-phu" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_1_thumb-c273212be85e396928e29af266311e55836cfd866375c119fed832a87327d7e3.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận Tân Phú</h6>
                  <p class="card-text text-sm">16 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-phu-nhuan" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_2_thumb-37ab11320636d5a596ea053938bc418fbb15b7e0797a1d72d51fbe1e770ba7ba.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận Phú Nhuận</h6>
                  <p class="card-text text-sm">6 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-3" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_1_thumb-c273212be85e396928e29af266311e55836cfd866375c119fed832a87327d7e3.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 3</h6>
                  <p class="card-text text-sm">1 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-10" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_2_thumb-37ab11320636d5a596ea053938bc418fbb15b7e0797a1d72d51fbe1e770ba7ba.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 10</h6>
                  <p class="card-text text-sm">8 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-11" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_0_thumb-62159cc1ec2f646c7dd403aa891ce4ea9ca079582b1d686455e63c66addbca85.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 11</h6>
                  <p class="card-text text-sm">10 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-4" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_1_thumb-c273212be85e396928e29af266311e55836cfd866375c119fed832a87327d7e3.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 4</h6>
                  <p class="card-text text-sm">0 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-5" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_2_thumb-37ab11320636d5a596ea053938bc418fbb15b7e0797a1d72d51fbe1e770ba7ba.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 5</h6>
                  <p class="card-text text-sm">3 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-6" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_0_thumb-62159cc1ec2f646c7dd403aa891ce4ea9ca079582b1d686455e63c66addbca85.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 6</h6>
                  <p class="card-text text-sm">7 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-8" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_1_thumb-c273212be85e396928e29af266311e55836cfd866375c119fed832a87327d7e3.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 8</h6>
                  <p class="card-text text-sm">7 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-binh-tan" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_2_thumb-37ab11320636d5a596ea053938bc418fbb15b7e0797a1d72d51fbe1e770ba7ba.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận Bình Tân</h6>
                  <p class="card-text text-sm">16 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/quan-7" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_0_thumb-62159cc1ec2f646c7dd403aa891ce4ea9ca079582b1d686455e63c66addbca85.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Quận 7</h6>
                  <p class="card-text text-sm">13 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/huyen-cu-chi" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_1_thumb-c273212be85e396928e29af266311e55836cfd866375c119fed832a87327d7e3.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Huyện Củ Chi</h6>
                  <p class="card-text text-sm">6 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/huyen-hoc-mon" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_2_thumb-37ab11320636d5a596ea053938bc418fbb15b7e0797a1d72d51fbe1e770ba7ba.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Huyện Hóc Môn</h6>
                  <p class="card-text text-sm">10 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/huyen-binh-chanh" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_0_thumb-62159cc1ec2f646c7dd403aa891ce4ea9ca079582b1d686455e63c66addbca85.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Huyện Bình Chánh</h6>
                  <p class="card-text text-sm">17 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/huyen-nha-be" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_1_thumb-c273212be85e396928e29af266311e55836cfd866375c119fed832a87327d7e3.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Huyện Nhà Bè</h6>
                  <p class="card-text text-sm">5 sân bóng</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide h-auto px-2">
              <div class="card card-poster gradient-overlay mb-lg-0">
                <a href="/san-bong/tp-ho-chi-minh/huyen-can-gio" class="tile-link"></a>
                <img src='https://www.sporta.vn/assets/default_venue_2_thumb-37ab11320636d5a596ea053938bc418fbb15b7e0797a1d72d51fbe1e770ba7ba.jpg' alt="san bong" class="bg-image" />
                <div class="card-body overlay-content">
                  <h6 class="card-title text-shadow text-uppercase">Huyện Cần Giờ</h6>
                  <p class="card-text text-sm">2 sân bóng</p>
                </div>
              </div>
            </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  </div>
</section>
<section class="py-6 position-relative dark-overlay">
  <img alt="" class="bg-image" src="https://www.sporta.vn/assets/handshake-ab7c15c813a3b0c5d04bce44da3f7601ea9a7fbdbdd54496b3fb0c6088539d53.jpg" />
  <div class="container">
    <div class="overlay-content text-white py-lg-5">
      <h3 class="display-3 font-weight-bold text-serif text-shadow mb-4 orange-text">Hợp tác với sporta</h3>
      <h5>Bạn là chủ sân? Bạn lo lắng khi sân còn trống? Sporta hỗ trợ bạn lấp đầy lịch đặt sân với chi phí thấp nhất!</h5>
      <a href="/quan-ly-san-bong" class="btn btn-secondary">Tìm hiểu ngay</a>
    </div>
  </div>
</section>


</div>

</template>

<script>
import TourList from '../components/tour/TourList'
export default {
  name: 'IndexPage',

  components: {
    TourList,
  },

  data () {
    return {
      items: [
       {src: require('../assets/img/img1.jpg')},
       {src: require('../assets/img/img2.jpg')},
      ],
      text: '',
      
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
