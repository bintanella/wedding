<template>
  <div>
    <!-- modal sambutan -->
    <transition name="fade">
      <div v-if="modal.sambutan && pengunjung" class="fixed width-100 height-100 z-2" style="background-color: rgba(0, 0, 0, 0.8);"></div>
    </transition>
    <transition name="fade">
      <div v-if="modal.sambutan && pengunjung" class="fixed width-100 height-100 z-3 flex flex-items-center flex-justify-center">
        <div class="bg-white rounded-4 width-100 padding-y-96 padding-x-24 has-bg-img height-100-sm" style="max-width: 900px;">
          <div class="bg-img bg-img-no-repeat"
            style="transition: background-image 0.4s ease-in-out;" 
            :style="{
              backgroundImage: `url('${cover[1]}')`,
            }">
          </div>
          <div class="bg-img bg-white"
            style="opacity: 0.6;">
          </div>
          <div class="flex flex-column flex-items-center flex-justify-center text-center height-100 text-black padding-y-96-sm">
            <div v-if="$t(`${$route.meta.type}.cover.judul`)" class="fw-400 text-dark" style="">
              <span v-html="$t(`${$route.meta.type}.sambutan.kepada`)"></span>
            </div>
            <div class="fw-400 h2 h4-sm margin-top-8 text-darkest fs-italic" style="letter-spacing: 2.2px">
              <span v-html="pengunjung" />
            </div>
            <div class="margin-top-8 fw-200 text-dark">
              <span v-html="$t(`${$route.meta.type}.sambutan.deskripsi`)" />
            </div>
            <div class="h1 fw-200 margin-top-60 margin-bottom-24-sm ff-vibes fs-cover-mempelai" style="font-size: 120px; line-height: 120px; letter-spacing: 1px;">
              {{ $t(`${$route.meta.type}.cover.pria`) }}
              <span class="ff-vibes margin-x-12 fs-cover-dan" style="font-size: 52px;">&</span>
              {{ $t(`${$route.meta.type}.cover.wanita`) }}
            </div>
            <div class="margin-top-36">
              <a class="button" @click="modalSambutanClose"><span v-html="$t(`${$route.meta.type}.sambutan.buka`)"></span></a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- modal gift -->
    <transition name="fade">
      <div v-if="modal.gift" class="fixed width-100 height-100 z-2" style="background-color: rgba(0, 0, 0, 0.8);"></div>
    </transition>
    <transition name="fade">
      <div v-if="modal.gift" class="fixed width-100 height-100 z-3 flex flex-items-center flex-justify-center">
        <div class="bg-white rounded-4 width-100 padding-y-96 padding-x-24 has-bg-img height-100-sm" style="max-width: 900px;">
          <div class="bg-img bg-img-no-repeat"
            style="transition: background-image 0.4s ease-in-out;" 
            :style="{
              backgroundImage: `url('${cover[1]}')`,
            }">
          </div>
          <div class="bg-img bg-white"
            style="opacity: 0.6;">
          </div>
          <div class="flex flex-column flex-items-center flex-justify-center text-center height-100 text-black padding-y-96-sm">
            <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
              <span v-html="$t(`${$route.meta.type}.gift.judul`)" />
            </div>
            <div class="margin-top-36 fw-300">
              <span v-html="$t(`${$route.meta.type}.gift.modal`)" />
            </div>
            <div class="margin-top-24">
              <a class="a cursor-pointer" @click="copy">
                <img class="width-28px margin-right-4"
                  src="https://icons.veryicon.com/png/o/miscellaneous/simple-icon/copy-65.png">
                copy account number
              </a>
            </div>
            <div class="margin-top-60">
              <a class="button" @click="modalGiftClose">Close</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- cover -->
    <div class="has-bg-img height-100vh height-auto-sm padding-y-96-sm padding-x-24">
      <div class="bg-img bg-img-no-repeat"
        style="transition: background-image 0.4s ease-in-out;" 
        :style="{
          backgroundImage: `url('${cover[0]}')`,
        }">
      </div>
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
        <div data-aos="fade-in" data-aos-delay="000" v-if="$t(`${$route.meta.type}.cover.judul`)" class="h5 fw-400" style="letter-spacing: 4px">
          {{ $t(`${$route.meta.type}.cover.judul`) }}
        </div>
        <div data-aos="fade-in" data-aos-delay="300" class="h1 fw-200 margin-top-40 margin-bottom-24-sm ff-vibes fs-cover-mempelai" style="font-size: 120px; line-height: 120px; letter-spacing: 1px;">
          {{ $t(`${$route.meta.type}.cover.pria`) }}
          <span class="ff-vibes margin-x-12 fs-cover-dan" style="font-size: 52px;">&</span>
          {{ $t(`${$route.meta.type}.cover.wanita`) }}
        </div>
        <div data-aos="fade-in" data-aos-delay="600" class="fw-300 padding-x-8 padding-y-4 rounded-4" style="letter-spacing: 4.7px; background: rgb(0, 0, 0, .5);">
          <span v-html="$t(`${$route.meta.type}.cover.tanggal`)" />
        </div>
      </div>
    </div>
    <!-- alquran -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer">
      <div class="bg-img bg-img-no-repeat"
        style="opacity: 0.1;"
        :style="{
          backgroundImage: `url('${bg}')`,
        }">
      </div>
      <div class="padding-x-24 margin-x-auto width-100" style="max-width: 546px;">
        <div data-aos="fade-in" data-aos-delay="000" class="ff-vibes fw-500" style="font-size: 44px; letter-spacing: 2px;">
          {{ $t(`${$route.meta.type}.alquran.judul`) }}
        </div>
        <div data-aos="fade-in" data-aos-delay="300" class="margin-top-36 fw-300">
          <span v-html="$t(`${$route.meta.type}.alquran.deskripsi`)"></span>
        </div>
      </div>
    </div>
    <!-- mempelai -->
    <div class="padding-y-48" style="background-color: rgba(245, 245, 245, .2);">
      <div class="padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="flex block-sm">
          <div class="width-50 width-100-sm text-center">
            <div class="fw-300 padding-bottom-20 text-dark" style="letter-spacing: 10px;">
              {{ $t(`${$route.meta.type}.mempelai.mempelai1`) }}
            </div>
            <div>
              <img class="margin-x-auto width-100 shadow-1 circle" style="max-width: 400px;" 
                src="@/assets/dll/mempelai_wanita.jpg">
            </div>
          </div>
          <div data-aos="fade-in" data-aos-delay="000" class="width-50 width-100-sm text-center flex flex-column flex-justify-center">
            <div class="margin-top-100 margin-top-36-sm margin-x-auto width-100" style="max-width: 384px;">
              <div class="ff-vibes fw-100 text-wrap text-grayest" style="font-size: 52px; line-height: 60px;">
                <span v-html="$t(`${$route.meta.type}.mempelai.mempelai1Nama`)"></span>
              </div>
              <hr class="border-light margin-y-24">
              <div>
                <span class="fw-300 text-grayer">
                  <span v-html="$t(`${$route.meta.type}.mempelai.mempelai1Anak`)"></span>
                </span>
              </div>
              <div class="margin-top-4">
                <span class="h4 fw-300 text-grayest" style="letter-spacing: 1.2px">
                  <span v-html="$t(`${$route.meta.type}.mempelai.mempelai1Ortu`)" />
                </span>
              </div>
              <hr class="border-light margin-y-24">
              <a class="a a-nocolor block text-grayer"
                  style="font-size: 12px;"
                  :href="$t(`${$route.meta.type}.mempelai.mempelai1Linkedin`)"
                  target="_blank">
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
              {{ $t(`${$route.meta.type}.mempelai.mempelai2`) }}
            </div>
            <div>
              <img class="margin-x-auto width-100 shadow-1 circle" style="max-width: 400px;" 
                src="@/assets/dll/mempelai_pria.jpg">
            </div>
          </div>
          <div data-aos="fade-in" data-aos-delay="000" class="width-50 width-100-sm text-center flex flex-column flex-justify-center">
            <div class="margin-top-100 margin-top-36-sm margin-x-auto width-100" style="max-width: 384px;">
              <div class="ff-vibes fw-100 text-wrap text-grayest" style="font-size: 52px; line-height: 60px;">
                <span v-html="$t(`${$route.meta.type}.mempelai.mempelai2Nama`)"></span>
              </div>
              <hr class="border-light margin-y-24">
              <div>
                <span class="fw-300 text-grayer">
                  <span v-html="$t(`${$route.meta.type}.mempelai.mempelai2Anak`)"></span>
                </span>
              </div>
              <div class="margin-top-4">
                <span class="h4 fw-300 text-grayest" style="letter-spacing: 1.2px">
                  <span v-html="$t(`${$route.meta.type}.mempelai.mempelai2Ortu`)" />
                </span>
              </div>
              <hr class="border-light margin-y-24">
              <a class="a a-nocolor block text-grayer"
                  style="font-size: 12px;"
                  :href="$t(`${$route.meta.type}.mempelai.mempelai2Linkedin`)"
                  target="_blank">
                <img class="margin-right-4" style="width: 16px;" 
                  src="https://www.clipartmax.com/png/middle/30-308556_joshua-fink-linkedin-grey-linkedin-logo-png.png">
                linkedin
              </a>
            </div>
          </div>
          <div class="width-50 width-100-sm text-center hidden-sm">
            <div class="fw-300 padding-bottom-20 text-dark" style="letter-spacing: 10px;">
              {{ $t(`${$route.meta.type}.mempelai.mempelai2`) }}
            </div>
            <div>
              <img class="margin-x-auto width-100 shadow-1 circle" style="max-width: 400px;" 
                src="@/assets/dll/mempelai_pria.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="padding-y-40"></div>
    </div>
    <!-- video -->
    <div style="max-height: 700px;">
      <div class="relative height-0 max-height-100 margin-x-auto" style="padding: 25px 0 56.25%; ">
        <iframe ref="iframe"
          class="absolute top-0 left-0 width-100 height-100"
          frameborder="0"
          allowfullscreen="1"
          allow="autoplay"
          title="Bintan Ella"
          asrc="https://www.youtube.com/embed/kH7wlLOQMNM?autoplay=1&controls=0&rel=0&playsinline=1&enablejsapi=1"
          src="https://www.youtube.com/embed/vxJZcBeBcfs?autoplay=1&loop=1&list=PLYSJIb1ahQFnbd5CQ-yUWOe9a1_eavK9j&controls=0&rel=0&playsinline=0&enablejsapi=1"
          :style="{'pointer-events': video.play && 'none'}"
          style="max-height: 700px;">
        </iframe>
      </div>
    </div>
    <!-- jadwal -->
    <div v-if="$route.meta.type !== 'resepsiOnline'" class="has-bg-img padding-y-92 padding-y-60-sm text-center text-grayer">
      <div class="bg-img bg-img-no-repeat"
        style="opacity: 0.1;"
        :style="{
          backgroundImage: `url('${bg}')`,
        }">
      </div>
      <div class="padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="flex flex-justify-center flex-wrap">
          <div class="width-50 width-100-sm padding-12 padding-x-0-sm">
            <div class="rounded-8 shadow-1 padding-x-16 padding-y-24">
              <div data-aos="fade-in" data-aos-delay="000" class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
                <span v-html="$t(`${$route.meta.type}.resepsi.judul`)" />
              </div>
              <div data-aos="fade-in" data-aos-delay="300" class="fw-700 margin-top-24" style="letter-spacing: 2px;">
                <span class="h4" style="color: #66686b;">
                  <span v-html="$t(`${$route.meta.type}.resepsi.tanggal`)" />
                </span>
                <br>
                <span v-if="$t(`${$route.meta.type}.resepsi.jam`)" class="h5">
                  <span v-if="$route.meta.custom && $route.meta.custom.waktu" v-html="$route.meta.custom.waktu" />
                  <span v-else v-html="$t(`${$route.meta.type}.resepsi.jam`)" />
                </span>
              </div>
              <div data-aos="fade-in" data-aos-delay="600" v-if="$t(`${$route.meta.type}.resepsi.alamat`)"
                  class="margin-top-28 margin-x-auto width-100" style="max-width: 546px;">
                <span v-html="$t(`${$route.meta.type}.resepsi.alamat`)" />
              </div>
              <a data-aos="fade-in" data-aos-delay="600" v-if="$t(`${$route.meta.type}.resepsi.google`)"
                  :href="$t(`${$route.meta.type}.resepsi.google`)"
                  class="a block margin-top-8"
                  target="_blank">
                <span v-html="$t(`${$route.meta.type}.resepsi.lokasi`)" />
              </a>
            </div>
          </div>
          <div v-if="$route.meta.type === 'resepsi'" class="width-50 width-100-sm padding-12 padding-x-0-sm">
            <div class="rounded-8 shadow-1 padding-x-16 padding-y-24">
              <div data-aos="fade-in" data-aos-delay="000" class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
                <span v-html="$t(`${$route.meta.type}.resepsi2.judul`)" />
              </div>
              <div data-aos="fade-in" data-aos-delay="300" class="fw-700 margin-top-24" style="letter-spacing: 2px;">
                <span class="h4" style="color: #66686b;">
                  <span v-html="$t(`${$route.meta.type}.resepsi2.tanggal`)" />
                </span>
                <br>
                <span v-if="$t(`${$route.meta.type}.resepsi2.jam`)" class="h5">
                  <span v-if="$route.meta.custom && $route.meta.custom.waktu" v-html="$route.meta.custom.waktu" />
                  <span v-else v-html="$t(`${$route.meta.type}.resepsi2.jam`)" />
                </span>
              </div>
              <div data-aos="fade-in" data-aos-delay="600" v-if="$t(`${$route.meta.type}.resepsi2.alamat`)"
                  class="margin-top-28 margin-x-auto width-100" style="max-width: 546px;">
                <span v-html="$t(`${$route.meta.type}.resepsi2.alamat`)" />
              </div>
              <a data-aos="fade-in" data-aos-delay="600" v-if="$t(`${$route.meta.type}.resepsi2.google`)"
                  :href="$t(`${$route.meta.type}.resepsi2.google`)"
                  class="a block margin-top-8"
                  target="_blank">
                <span v-html="$t(`${$route.meta.type}.resepsi.lokasi`)" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- reservasi -->
    <div v-if="$route.meta.type !== 'resepsiOnline'" class="has-bg-img padding-y-92 padding-y-60-sm text-grayest">
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
          <div data-aos="fade-in" data-aos-delay="000" class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
            <span v-html="$t(`${$route.meta.type}.reservasi.judul`)" />
          </div>
          <div data-aos="fade-in" data-aos-delay="300" class="margin-top-36 fw-300">
            <span v-html="$t(`${$route.meta.type}.reservasi.deskripsi`)" />
          </div>
          <div data-aos="fade-in" data-aos-delay="600" class="margin-top-28">
            <div class="margin-bottom-24"
                :class="{
                }">
              <label class="form-label">
                <span v-html="$t(`${$route.meta.type}.reservasi.nama`)" />
              </label>
              <input v-model="tamu.nama"
                class="form-text"
                type="text"
                required>
            </div>
          </div>
          <div data-aos="fade-in" data-aos-delay="600" class="flex block-sm">
            <div class="width-50 width-100-sm padding-right-4 padding-right-0-sm margin-bottom-24"
                :class="{
                }">
              <label class="form-label">
                <span v-html="$t(`${$route.meta.type}.reservasi.kehadiran`)" />
              </label>
              <select v-model="tamu.kehadiran" class="form-dropdown" required>
                <option value="Ya"><span v-html="$t(`${$route.meta.type}.reservasi.ya`)" /></option>
                <option value="Tidak"><span v-html="$t(`${$route.meta.type}.reservasi.tidak`)" /></option>
              </select>
            </div>
            <div class="width-50 width-100-sm padding-left-4 padding-left-0-sm margin-bottom-24"
                :class="{
                }">
              <label class="form-label">
                <span v-html="$t(`${$route.meta.type}.reservasi.jumlah`)" />
              </label>
              <select v-model="tamu.jumlah" class="form-dropdown" required>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <div data-aos="fade-in" data-aos-delay="600">
            <button class="button"
                @click="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- prokes -->
    <div class="has-bg-img padding-y-92 padding-y-60-sm text-grayest">
      <div class="bg-img bg-img-no-repeat"
        style="opacity: 0.1;"
        :style="{
          backgroundImage: `url('${bg}')`,
        }">
      </div>
      <div class="text-center padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
          <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
            <span v-html="$t(`${$route.meta.type}.prokes.judul`)" />
          </div>
          <div class="margin-top-36 fw-300">
            <span v-html="$t(`${$route.meta.type}.prokes.deskripsi`)" />
          </div>
          <div class="flex flex-wrap margin-top-40">
            <div class="width-25 width-50-sm margin-bottom-24 padding-8">
              <div data-aos="fade-in" data-aos-delay="000" class="rounded-8 shadow-1 padding-x-16 padding-y-24">
                <div>
                  <img class="margin-x-auto rounded-8 width-80" 
                    src="@/assets/dll/prokes1.png">
                </div>
                <div class="fw-300 margin-top-8">
                  <span v-html="$t(`${$route.meta.type}.prokes.poin1`)" />
                </div>
              </div>
            </div>
            <div class="width-25 width-50-sm margin-bottom-24 padding-8">
              <div data-aos="fade-in" data-aos-delay="200" class="rounded-8 shadow-1 padding-x-16 padding-y-24">
                <div>
                  <img class="margin-x-auto rounded-8 width-80" 
                    src="@/assets/dll/prokes2.png">
                </div>
                <div class="fw-300 margin-top-8">
                  <span v-html="$t(`${$route.meta.type}.prokes.poin2`)" />
                </div>
              </div>
            </div>
            <div class="width-25 width-50-sm margin-bottom-24 padding-8">
              <div data-aos="fade-in" data-aos-delay="400" class="rounded-8 shadow-1 padding-x-16 padding-y-24">
                <div>
                  <img class="margin-x-auto rounded-8 width-80" 
                    src="@/assets/dll/prokes3.png">
                </div>
                <div class="fw-300 margin-top-8">
                  <span v-html="$t(`${$route.meta.type}.prokes.poin3`)" />
                </div>
              </div>
            </div>
            <div class="width-25 width-50-sm margin-bottom-24 padding-8">
              <div data-aos="fade-in" data-aos-delay="600" class="rounded-8 shadow-1 padding-x-16 padding-y-24">
                <div>
                  <img class="margin-x-auto rounded-8 width-80" 
                    src="@/assets/dll/prokes4.png">
                </div>
                <div class="fw-300 margin-top-8">
                  <span v-html="$t(`${$route.meta.type}.prokes.poin4`)" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <!-- streaming -->
    <div v-if="false" class="has-bg-img padding-y-92 padding-y-60-sm text-grayest">
      <div class="bg-img bg-img-no-repeat"
        style="opacity: 0.1;"
        :style="{
          backgroundImage: `url('${bg}')`,
        }">
      </div>
      <div class="flex padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="width-50 width-100-sm padding-right-24 padding-right-0-sm text-right text-center-sm">
          <div class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
            <span v-html="$t(`${$route.meta.type}.streaming.judul`)" />
          </div>
          <div class="margin-top-36 fw-300">
            <span v-html="$t(`${$route.meta.type}.streaming.deskripsi`)" />
          </div>
          <div class="margin-top-28">
            <a class="button" :href="$t(`${$route.meta.type}.streaming.link`)">
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
            <span v-html="$t(`${$route.meta.type}.gallery.judul`)" />
          </div>
          <div class="margin-top-28">
            <div class="swiper swiper1">
              <div class="swiper-wrapper">
                <div v-for="gallery in gallery1" class="swiper-slide padding-x-4 width-gallery-1" style="width: 50%;">
                  <div class="has-bg-img rounded-8 height-gallery-1" style="height: 420px;">
                    <div data-aos="fade-in" :data-aos-delay="sample([0])" class="bg-img bg-img-no-repeat"
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
                    <div data-aos="fade-in" :data-aos-delay="sample([0])" class="bg-img bg-img-no-repeat"
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
    <div v-if="$route.params.lang === 'en'" class="has-bg-img padding-y-92 padding-y-60-sm text-grayest">
      <div class="bg-img bg-img-no-repeat"
        style="opacity: 0.1;"
        :style="{
          backgroundImage: `url('${bg}')`,
        }">
      </div>
      <div class="flex block-sm padding-x-24 margin-x-auto width-100" style="max-width: 900px;">
        <div class="width-50 width-100-sm padding-right-24 padding-right-0-sm text-right text-center-sm">
          <div data-aos="fade-in" data-aos-delay="000" class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
            <span v-html="$t(`${$route.meta.type}.gift.judul`)" />
          </div>
          <div data-aos="fade-in" data-aos-delay="300" class="margin-top-36 fw-300">
            <span v-html="$t(`${$route.meta.type}.gift.deskripsi`)" />
          </div>
          <div data-aos="fade-in" data-aos-delay="600" class="margin-top-28">
            <a class="button" @click="modalGiftOpen">
              <span v-html="$t(`${$route.meta.type}.gift.aksi`)" />
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
        :style="{
          backgroundImage: `url('${footer}')`,
        }">
      </div>
      <div class="bg-img bg-black"
        style="opacity: 0.4;">
      </div>
      <div data-aos="fade-in" data-aos-delay="000" class="h2 fw-300 fs-italic" style="letter-spacing: 1.2px;">
        <span v-html="$t(`${$route.meta.type}.terimaKasih.judul`)" />
      </div>
      <div data-aos="fade-in" data-aos-delay="000" class="margin-top-36 fw-300 margin-x-auto width-100" style="max-width: 480px;">
        <span v-html="$t(`${$route.meta.type}.terimaKasih.deskripsi`)" />
      </div>
      <div class="flex flex-column flex-items-center flex-justify-center text-white margin-top-32">
        <div data-aos="fade-in" data-aos-delay="300" class="fw-300 padding-x-8 padding-y-4 rounded-4" style="letter-spacing: 4.7px; background: rgb(0, 0, 0, .5);">
          <span v-html="$t(`${$route.meta.type}.cover.tanggal`)" />
        </div>
        <div data-aos="fade-in" data-aos-delay="600" class="h1 fw-200 margin-top-32 ff-vibes fs-tk-mempelai" style="font-size: 80px; letter-spacing: 1px;">
          {{ $t(`${$route.meta.type}.cover.pria`) }}
          <span class="ff-vibes margin-x-12 fs-tk-dan" style="font-size: 32px;">&</span>
          {{ $t(`${$route.meta.type}.cover.wanita`) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import axios from 'axios';
import AOS from 'aos';
import toast from '@/utils/toast';
import url from '@/utils/url';

import { Swiper } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/scss";

export default {
  name: 'BintanElla',
  data: () => {
    return {
      indexCover: 0,
      modal: {
        sambutan: true,
        gift: false,
      },
      bg: require("@/assets/dll/bg.png"),
      footer: require("@/assets/dll/footer.jpg"),
      cover: [
        require("@/assets/dll/cover1.jpg"),
        require("@/assets/dll/cover2.jpg"),
        require("@/assets/dll/cover3.jpg"),
        require("@/assets/dll/cover4.jpg"),
        require("@/assets/dll/cover5.jpg"),
      ],
      gallery1: [
        require("@/assets/dll/gallery_a1.jpg"),
        require("@/assets/dll/gallery_a2.jpg"),
        require("@/assets/dll/gallery_a3.jpg"),
        require("@/assets/dll/gallery_a4.jpg"),
        require("@/assets/dll/gallery_a5.jpg"),
        require("@/assets/dll/gallery_a6.jpg"),
        require("@/assets/dll/gallery_a7.jpg"),
        require("@/assets/dll/gallery_a8.jpg"),
        require("@/assets/dll/gallery_a9.jpg"),
        require("@/assets/dll/gallery_a10.jpg"),
        require("@/assets/dll/gallery_a11.jpg"),
        require("@/assets/dll/gallery_a12.jpg"),
        require("@/assets/dll/gallery_a13.jpg"),
      ],
      gallery2: [
        require("@/assets/dll/gallery_b1.jpg"),
        require("@/assets/dll/gallery_b2.jpg"),
        require("@/assets/dll/gallery_b3.jpg"),
        require("@/assets/dll/gallery_b4.jpg"),
        require("@/assets/dll/gallery_b5.jpg"),
      ],
      tamu: {
        nama: "",
        kehadiran: "Ya",
        jumlah: 1,
      },
      video: {
        play: false,
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

    this.$refs["iframe"].click();
    // this.video.play = true;

    console.log(AOS)
    AOS.init({
      easing: 'ease-in-out',
      once: true,
      duration: 500,
      offset: 100,
    });
  },
  computed: {
    pengunjung: function () {
      return this.$route.params.tamu && this.$route.params.tamu.replace(/-/g, ' ');
    },
    usedCover: function () {
      return this.cover[this.indexCover];
    },
  },
  methods: {
    copy: function () {
        let copiedValue = this.$t(`${this.$route.meta.type}.gift.rekening`);
        navigator.clipboard.writeText(copiedValue);
        alert(this.$t(`${this.$route.meta.type}.gift.copied`) + copiedValue);
    },
    modalSambutanOpen: function () {
      this.modal.sambutan = true;
    },
    modalSambutanClose: function () {
      this.modal.sambutan = false;
    },
    modalGiftOpen: function () {
      this.modal.gift = true;
    },
    modalGiftClose: function () {
      this.modal.gift = false;
    },
    updateCover: function () {
      this.indexCover = _.sample([0, 1, 2, 3, 4])
    },
    sample: function (options) {
      return _.sample(options);
    },
    submit: function () {
      var bodyFormData = new FormData();
      bodyFormData.append("Nama", this.tamu.nama);
      bodyFormData.append("Kehadiran", this.tamu.kehadiran);
      bodyFormData.append("Jumlah", this.tamu.jumlah);
      bodyFormData.append("Path", url(null));
      if (this.tamu.nama) {
        toast.success(
          this.$t(`${this.$route.meta.type}.reservasi.submitted`),
          this.$t(`${this.$route.meta.type}.reservasi.submittedDescription`)
        );
        
        axios({
          method: "post",
          url: "https://script.google.com/macros/s/AKfycbyf0K4OkmFYbalzmKW2EcF96xQZSoTtegu05XQuTUqUgPVm8tO91I7HyXYrjnYdFvVw/exec",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (response) {
          })
          .catch(function (response) {
          });
      } else {
        toast.error(
          this.$t(`${this.$route.meta.type}.reservasi.notSubmitted`),
          this.$t(`${this.$route.meta.type}.reservasi.notSubmittedDescription`)
        );
      }
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .4s linear;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .pop-enter-active,
  .pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
  }

  .pop-enter,
  .pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
  }
</style>