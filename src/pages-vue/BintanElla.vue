<template>
  <div>
    <!-- cover -->
    <div class="has-bg-img height-100vh height-auto-sm padding-y-96-sm padding-x-24">
      <div class="bg-img bg-img-no-repeat"
        style="transition: background-image 0.4s ease-in-out;" 
        :style="{
          backgroundImage: `url('${usedCover}')`,
        }">
      </div>
      <div class="bg-img bg-black"
        style="opacity: 0.2;">
      </div>
      <div class="flex flex-column flex-items-center flex-justify-center text-center height-100 text-white padding-y-96-sm">
        <div class="h5 fw-400" style="letter-spacing: 4px">
          {{ $t(`resepsi.cover.judul`) }}
        </div>
        <div class="h1 fw-200 margin-top-40 margin-bottom-24-sm ff-vibes fs-cover-mempelai" style="font-size: 120px; line-height: 120px; letter-spacing: 1px;">
          {{ $t(`resepsi.cover.pria`) }}
          <span class="ff-vibes margin-x-12 fs-cover-dan" style="font-size: 52px;">&</span>
          {{ $t(`resepsi.cover.wanita`) }}
        </div>
        <div class="fw-300 padding-x-8 padding-y-4 rounded-4" style="letter-spacing: 4.7px; background: rgb(0, 0, 0, .5);">
          <span v-html="$t(`resepsi.cover.tanggal`)" />
        </div>
      </div>
    </div>
    <!-- alquran -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer">
      <div class="bg-img bg-img-no-repeat"
        style="background-image: url('https://groovepublic.com/wp-content/uploads/2022/03/shadow.png'); opacity: 0.07;">
      </div>
      <div class="padding-x-24 margin-x-auto width-100" style="max-width: 546px;">
        <div class="ff-vibes fw-500" style="font-size: 44px; letter-spacing: 2px;">
          {{ $t(`resepsi.alquran.judul`) }}
        </div>
        <div class="margin-top-36 fw-300">
          {{ $t(`resepsi.alquran.deskripsi`) }}
        </div>
      </div>
    </div>
    <!-- mempelai -->
    <div class="padding-y-48" style="background-color: rgba(245, 245, 245, .2);">
      <div class="padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="flex block-sm">
          <div class="width-50 width-100-sm text-center">
            <div class="fw-300 padding-bottom-20 text-dark" style="letter-spacing: 10px;">
              {{ $t(`resepsi.mempelai.mempelai1`) }}
            </div>
            <div>
              <img class="margin-x-auto width-100 shadow-1 circle" style="max-width: 400px;" 
                src="@/assets/dll/mempelai_pria.jpg">
            </div>
          </div>
          <div class="width-50 width-100-sm text-center flex flex-column flex-justify-center">
            <div class="margin-top-100 margin-top-36-sm margin-x-auto width-100" style="max-width: 384px;">
              <div class="ff-vibes fw-100 text-wrap text-grayest" style="font-size: 52px; line-height: 60px;">
                <span v-html="$t(`resepsi.mempelai.mempelai1Nama`)"></span>
              </div>
              <hr class="border-light margin-y-24">
              <div>
                <span class="fw-300 text-grayer">
                  <span v-html="$t(`resepsi.mempelai.mempelai1Anak`)"></span>
                </span>
              </div>
              <div class="margin-top-4">
                <span class="h4 fw-300 text-grayest" style="letter-spacing: 1.2px">
                  <span v-html="$t(`resepsi.mempelai.mempelai1Ortu`)" />
                </span>
              </div>
              <hr class="border-light margin-y-24">
              <a class="a a-nocolor block text-grayer" style="font-size: 12px;" :href="$t(`resepsi.mempelai.mempelai1Linkedin`)">
                <img class="margin-right-4" style="width: 16px;" 
                  src="https://www.clipartmax.com/png/middle/30-308556_joshua-fink-linkedin-grey-linkedin-logo-png.png">
                linkedin
              </a>
            </div>
          </div>
        </div>
        <div class="flex block-sm margin-top-80 margin-top-60-sm padding-top-80 padding-top-60-sm">
          <div class="width-50 width-100-sm text-center hidden-sm-greater">
            <div class="fw-300 padding-bottom-20 text-dark" style="letter-spacing: 10px;">
              {{ $t(`resepsi.mempelai.mempelai1`) }}
            </div>
            <div>
              <img class="margin-x-auto width-100 shadow-1 circle" style="max-width: 400px;" 
                src="@/assets/dll/mempelai_wanita.jpg">
            </div>
          </div>
          <div class="width-50 width-100-sm text-center flex flex-column flex-justify-center">
            <div class="margin-top-100 margin-top-36-sm margin-x-auto width-100" style="max-width: 384px;">
              <div class="ff-vibes fw-100 text-wrap text-grayest" style="font-size: 52px; line-height: 60px;">
                <span v-html="$t(`resepsi.mempelai.mempelai2Nama`)"></span>
              </div>
              <hr class="border-light margin-y-24">
              <div>
                <span class="fw-300 text-grayer">
                  <span v-html="$t(`resepsi.mempelai.mempelai2Anak`)"></span>
                </span>
              </div>
              <div class="margin-top-4">
                <span class="h4 fw-300 text-grayest" style="letter-spacing: 1.2px">
                  <span v-html="$t(`resepsi.mempelai.mempelai2Ortu`)" />
                </span>
              </div>
              <hr class="border-light margin-y-24">
              <a class="a a-nocolor block text-grayer" style="font-size: 12px;" :href="$t(`resepsi.mempelai.mempelai2Linkedin`)">
                <img class="margin-right-4" style="width: 16px;" 
                  src="https://www.clipartmax.com/png/middle/30-308556_joshua-fink-linkedin-grey-linkedin-logo-png.png">
                linkedin
              </a>
            </div>
          </div>
          <div class="width-50 width-100-sm text-center hidden-sm">
            <div class="fw-300 padding-bottom-20 text-dark" style="letter-spacing: 10px;">
              {{ $t(`resepsi.mempelai.mempelai1`) }}
            </div>
            <div>
              <img class="margin-x-auto width-100 shadow-1 circle" style="max-width: 400px;" 
                src="@/assets/dll/mempelai_wanita.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="padding-y-40"></div>
    </div>
    <!-- video -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer">
      <video autoplay loop id="myVideo"
          class="absolute width-100 height-100 top-0 left-0"
          style="object-fit: cover;">
        <source src="@/assets/dll/1.mp4" type="video/mp4">
      </video>
      <div class="bg-img bg-black z-1"
        style="opacity: 0.4;">
      </div>
      <div style="height: 400px;">
      </div>
    </div>
    <!-- jadwal -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer">
      <div class="bg-img bg-img-no-repeat"
        style="background-image: url('https://groovepublic.com/wp-content/uploads/2022/03/shadow.png'); opacity: 0.07;">
      </div>
      <div class="padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
          <span v-html="$t(`resepsi.resepsi.judul`)" />
        </div>
        <div class="fw-700 margin-top-24" style="letter-spacing: 2px;">
          <span class="h4" style="color: #66686b;">
            <span v-html="$t(`resepsi.resepsi.tanggal`)" />
          </span>
          <br>
          <span class="h5">
            <span v-html="$t(`resepsi.resepsi.jam`)" />
          </span>
        </div>
        <div class="margin-top-28 margin-x-auto width-100" style="max-width: 546px;">
          <span v-html="$t(`resepsi.resepsi.alamat`)" />
        </div>
        <a :href="$t(`resepsi.resepsi.google`)" class="a block margin-top-8">
          Google maps
        </a>
      </div>
    </div>
    <!-- reservasi -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-grayest">
      <div class="bg-img bg-img-no-repeat"
        :style="{
          backgroundImage: `url('${cover[0]}')`,
          opacity: 0.3,
        }">
      </div>
      <div class="bg-img bg-gray"
        style="opacity: 0.1;">
      </div>
      <div class="flex padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="width-50 width-100-sm hidden-sm padding-right-24 text-right text-center-sm">
          <img class="margin-x-auto rounded-8 width-100" style="max-width: 460px;" 
            src="@/assets/dll/reservasi.jpg">
        </div>
        <div class="width-50 width-100-sm padding-24 rounded-8" style="background-color: rgba(255, 255, 255, .7)">
          <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
            <span v-html="$t(`resepsi.reservasi.judul`)" />
          </div>
          <div class="margin-top-36 fw-300">
            <span v-html="$t(`resepsi.reservasi.deskripsi`)" />
          </div>
          <div class="margin-top-28">
            <div class="margin-bottom-24"
                :class="{
                }">
              <label class="form-label">
                <span v-html="$t(`resepsi.reservasi.nama`)" />
              </label>
              <input v-model="tamu.name"
                class="form-text"
                type="text"
                required>
            </div>
          </div>
          <div class="flex block-sm">
            <div class="width-50 width-100-sm padding-right-4 padding-right-0-sm margin-bottom-24"
                :class="{
                }">
              <label class="form-label">
                <span v-html="$t(`resepsi.reservasi.kehadiran`)" />
              </label>
              <input v-model="tamu.kehadiran"
                class="form-text"
                type="text"
                required>
            </div>
            <div class="width-50 width-100-sm padding-left-4 padding-left-0-sm margin-bottom-24"
                :class="{
                }">
              <label class="form-label">
                <span v-html="$t(`resepsi.reservasi.jumlah`)" />
              </label>
              <input v-model="tamu.jumlah"
                class="form-text"
                type="text"
                required>
            </div>
          </div>
          <div>
            <button class="button"
                :disabled="false && !canSubmit"
                @click="false && submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- streaming -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-grayest">
      <div class="bg-img bg-img-no-repeat"
        style="background-image: url('https://groovepublic.com/wp-content/uploads/2022/03/shadow.png'); opacity: 0.07;">
      </div>
      <div class="flex padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="width-50 width-100-sm padding-right-24 padding-right-0-sm text-right text-center-sm">
          <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
            <span v-html="$t(`resepsi.streaming.judul`)" />
          </div>
          <div class="margin-top-36 fw-300">
            <span v-html="$t(`resepsi.streaming.deskripsi`)" />
          </div>
          <div class="margin-top-28">
            <a class="button" :href="$t(`resepsi.streaming.deskripsi`)">
              Streaming
            </a>
          </div>
        </div>
        <div class="width-50 width-100-sm hidden-sm padding-left-24 text-left text-center-sm">
          <img class="margin-x-auto rounded-8 width-100" style="max-width: 460px;" 
            src="@/assets/dll/reservasi.jpg">
        </div>
      </div>
    </div>
    <!-- gallery -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer">
      <div class="bg-img bg-img-no-repeat"
        :style="{
          backgroundImage: `url('${cover[0]}')`,
          opacity: 0.3,
        }">
      </div>
      <div class="padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="padding-12 padding-top-24 rounded-8" style="background-color: rgba(255, 255, 255, .7)">
          <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
            <span v-html="$t(`resepsi.gallery.judul`)" />
          </div>
          <div class="margin-top-28">
            <div class="swiper swiper1">
              <div class="swiper-wrapper">
                <div v-for="gallery in gallery1" class="swiper-slide padding-x-4 width-gallery-1" style="width: 50%;">
                  <div class="has-bg-img rounded-8 height-gallery-1" style="height: 420px;">
                    <div class="bg-img bg-img-no-repeat"
                      :style="{
                        backgroundImage: `url('${gallery}')`,
                      }">
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper swiper2 margin-top-8">
              <div class="swiper-wrapper">
                <div v-for="gallery in gallery2" class="swiper-slide padding-x-4 width-gallery-2" style="width: 33.3%;">
                  <div class="has-bg-img rounded-8 height-gallery-2" style="height: 132px;">
                    <div class="bg-img bg-img-no-repeat"
                      :style="{
                        backgroundImage: `url('${gallery}')`,
                      }">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- gift -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-grayest">
      <div class="bg-img bg-img-no-repeat"
        style="background-image: url('https://groovepublic.com/wp-content/uploads/2022/03/shadow.png'); opacity: 0.07;">
      </div>
      <div class="flex block-sm padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="width-50 width-100-sm padding-right-24 padding-right-0-sm text-right text-center-sm">
          <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
            <span v-html="$t(`resepsi.gift.judul`)" />
          </div>
          <div class="margin-top-36 fw-300">
            <span v-html="$t(`resepsi.gift.deskripsi`)" />
          </div>
          <div class="margin-top-28">
            <a class="button" :href="$t(`resepsi.gift.deskripsi`)">
              <span v-html="$t(`resepsi.gift.aksi`)" />
            </a>
          </div>
        </div>
        <div class="width-50 width-100-sm hidden-sm padding-left-24 text-left text-center-sm">
          <img class="margin-x-auto rounded-8 width-100" style="max-width: 460px;" 
            src="@/assets/dll/reservasi.jpg">
        </div>
      </div>
    </div>
    <!-- terima kasih -->
    <div class="has-bg-img text-center text-white padding-y-96 padding-x-24">
      <div class="bg-img bg-img-no-repeat"
        style="background-image: url('https://www.diktatphotography.com/wp-content/uploads/2020/08/1-Tamblingan-a-1.jpg');">
      </div>
      <div class="bg-img bg-black"
        style="opacity: 0.4;">
      </div>
      <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
        <span v-html="$t(`resepsi.terimaKasih.judul`)" />
      </div>
      <div class="margin-top-36 fw-300">
        <span v-html="$t(`resepsi.terimaKasih.deskripsi`)" />
      </div>
      <div class="flex flex-column flex-items-center flex-justify-center text-white margin-top-32">
        <div class="fw-300 padding-x-8 padding-y-4 rounded-4" style="letter-spacing: 4.7px; background: rgb(0, 0, 0, .5);">
          <span v-html="$t(`resepsi.cover.tanggal`)" />
        </div>
        <div class="h1 fw-200 margin-top-32 ff-vibes fs-tk-mempelai" style="font-size: 80px; letter-spacing: 1px;">
          {{ $t(`resepsi.cover.pria`) }}
          <span class="ff-vibes margin-x-12 fs-tk-dan" style="font-size: 32px;">&</span>
          {{ $t(`resepsi.cover.wanita`) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/scss";

import _ from 'lodash';

export default {
  name: 'BintanElla',
  data: () => {
    return {
      indexCover: 0,
      cover: [
        require("@/assets/dll/cover1.jpg"),
        require("@/assets/dll/cover2.jpg"),
        require("@/assets/dll/cover3.jpg"),
      ],
      gallery1: [
        require("@/assets/dll/gallery_1.jpg"),
        require("@/assets/dll/gallery_2.jpg"),
        require("@/assets/dll/gallery_3.jpg"),
        require("@/assets/dll/gallery_4.jpg"),
      ],
      gallery2: [
        require("@/assets/dll/gallery_1.jpg"),
        require("@/assets/dll/gallery_2.jpg"),
        require("@/assets/dll/gallery_3.jpg"),
        require("@/assets/dll/gallery_4.jpg"),
        require("@/assets/dll/gallery_5.jpg"),
        require("@/assets/dll/gallery_2.jpg"),
      ],
      tamu: {
        nama: "",
        kehadiran: true,
        jumlah: 1,
      },
    };
  },
  async created () {
  },
  async mounted () {
    Swiper.use([Autoplay, Pagination, Navigation]);
    const config = {
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 0,
      speed: 1000,
      autoplay: {
        delay: 2000,
      },
    }
    var swiper1 = new Swiper(".swiper1", config);
    var swiper2 = new Swiper(".swiper2", config);

    setInterval(this.updateCover, 3000);
  },
  computed: {
    usedCover: function () {
      return this.cover[this.indexCover];
    },
  },
  methods: {
    updateCover: function () {
      this.indexCover = _.random(0, 2)
    },
  },
}
</script>

<style>
  @media (max-width: 576px) {
    .width-gallery-1 {
      width: 100% !important;
    }
    .height-gallery-1 {
      height: 400px !important;
    }
    .width-gallery-2 {
      width: 100% !important;
    }
    .height-gallery-2 {
      height: 180px !important;
    }
    .fs-cover-mempelai {
      font-size: 64px !important;
      line-height: 64px !important;
    }
    .fs-cover-dan { font-size: 24px !important }
    .fs-tk-mempelai {
      font-size: 48px !important;
      line-height: 48px !important;
    }
    .fs-tk-dan { font-size: 24px !important }
  }
</style>