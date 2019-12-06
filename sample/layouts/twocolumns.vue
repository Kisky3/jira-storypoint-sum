<template>
  <div>
      <div class="l-container">
        <div class="l-main">
            <nuxt/>
        </div>
        <div class="l-sidebar">
            <my-sidebar />
        </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from "../components/Footer.vue"
import MySidebar from "../components/Sidebar.vue"
export default {
    name: "twocolumns",
    components: {
        MyFooter,
        MySidebar
    }
}
</script>

<style>
.l-container {
    overflow: hidden;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
}
.l-main {
    width: calc(100% - 340px);
    float: left;
}
.l-sidebar {
    width: 320px;
    float: right;
}
</style>