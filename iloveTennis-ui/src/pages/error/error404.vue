<template>
  <section>
    <!-- <div class="breadcrumb">
      <ul>
        <li>
          <router-link :to="'/'">
            홈
          </router-link>
        </li>
        <li>
          <router-link :to="'/'">
            ERROR PAGE
          </router-link>
        </li>
        <li>
          <router-link :to="'/'">
            404
          </router-link>
        </li>
      </ul>
    </div> -->
    <div style="height: 100vh;">
      <div class="error-wrap">
        <h2>페이지를 찾을 수 없습니다.</h2>
        <h3>주소를 잘못 입력했거나 페이지가 이동했을 수 있습니다.</h3>
        <b-button
          type="primary"
          @click="goHome"
        >
          홈으로
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Error404',
  layout: 'fullpage',
  methods: {
    goHome () {
      this.$router.push('/main')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/pages/error.scss';
</style>
