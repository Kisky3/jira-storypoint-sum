<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Header Start -->
    <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <div class="site-header__start">
          <a href="#" class="brand">Storypoint Dashboard</a>
        </div>
        <div class="site-header__end">
          <nav class="nav">
            <basic-btn v-on:handleOnClick="openMenu" class="nav__toggle__header">menu</basic-btn>
            <ul class="nav__wrapper">
              <li class="nav__item active">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#">
                  <span>Members</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#">
                  <span>Jira</span>
                </a>
              </li>
              <li class="nav__item">
                <a href="#">
                  <span>Notifications</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <!-- Header End -->
  </div>
</template>

<script>
import BasicBtn from "../atoms/BasicBtn.vue";
export default {
  name: "Header",
  components: {
    BasicBtn
  },
  methods: {
    openMenu: () => {
      let classList = document.querySelector(".nav__wrapper")?.classList;
      if (classList?.contains("active")) {
        classList?.remove("active");
      } else {
        classList?.add("active");
      }
    },
  },
};
</script>
