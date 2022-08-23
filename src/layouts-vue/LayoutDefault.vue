<template>
  <div class="flex flex-column height-100">
    <div class="flex">
      <div class="padding-y-12 border-bottom border-primary border-width-2" style="min-width: 238px">
        <router-link to="/" class="a a-nocolor flex flex-items-center flex-justify-center">
          <!-- <img alt="Technoart logo" src="@/assets/logo.png" class="width-28px" /> -->
          <span class="margin-left-8 text-primary">Showcasing app</span>
        </router-link>
      </div>
      <div class="padding-y-12 padding-x-28 bg-primary text-white grow-1 flex flex-items-center">
        <div class="fw-700 margin-right-auto"></div>
        <a v-if="isLoggedIn" class="a a-nocolor hover-text-light margin-left-16 cursor-pointer" @click.prevent="logout">Logout</a>
        <router-link v-else class="a a-nocolor hover-text-light margin-left-16" :to="$url('/login')">Login</router-link>
      </div>
    </div>

    <div class="hidden">
      <router-link to="/"
          class="a block margin-4">
        /</router-link>

      <router-link to="/user"
          class="a block margin-4">
        /user</router-link>

      <router-link to="/user/create"
          class="a block margin-4">
        /user/create</router-link>

      <router-link to="/user/create#foo"
          class="a block margin-4">
        /user/create#foo</router-link>

      <router-link :to="{ name: 'user-create', params: { id: 'create' }, query: { foo: 'bar' }}" exact
          class="a block margin-4">
        /user/create?foo=bar (exact)</router-link>

      <router-link :to="{ path: '/user/create', query: { foo: 'bar', baz: 'qux' } }"
          class="a block margin-4">
        /user/create?foo=bar&baz=qux</router-link>
    </div>

    <div class="grow-1 flex">
      <div class="border-right border-light border-width-2" style="min-width: 240px">
        <div class="padding-12 text-grayer">
          <router-link
              class="a a-nocolor block padding-y-8 padding-x-12"
              exact-active-class="text-darkest bg-lighter rounded-4"
              :to="$url('/')">
            Home
          </router-link>
          <router-link
              class="a a-nocolor block padding-y-8 padding-x-12"
              exact-active-class="text-darkest bg-lighter rounded-4"
              :to="$url('/user')">
            User list
          </router-link>
          <router-link
              class="a a-nocolor block padding-y-8 padding-x-12"
              exact-active-class="text-darkest bg-lighter rounded-4"
              :to="$url('/user/datatables')">
            User list (datatables)
          </router-link>
          <router-link
              class="a a-nocolor block padding-y-8 padding-x-12"
              exact-active-class="text-darkest bg-lighter rounded-4"
              :to="$url('/user/create')">
            User form
          </router-link>
          <router-link
              class="a a-nocolor block padding-y-8 padding-x-12"
              exact-active-class="text-darkest bg-lighter rounded-4"
              :to="'/asdf'">
            Non exist page
          </router-link>
          <router-link
              class="a a-nocolor block padding-y-8 padding-x-12"
              exact-active-class="text-darkest bg-lighter rounded-4"
              :to="$url('/asdf')">
            Non exist page (with en)
          </router-link>
        </div>
      </div>
      <div class="grow-1 bg-lightest padding-top-48">
        <div class="container-compact">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '@/utils/auth';
import url from '@/utils/url';

export default {
  name: 'LayoutDefault',
  data: () => {
    return {
      isLoggedIn: auth.isLoggedIn(),
    };
  },
  async mounted () {
  },
  methods: {
    logout: function () {
      auth.logout();
      this.isLoggedIn = auth.isLoggedIn();
      this.$router.push(url(""));
    },
  },
}
</script>

<style lang="scss">
@import '@/app.scss';
</style>