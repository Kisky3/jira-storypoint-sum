<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- Header Start -->
    <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <div class="site-header__start">
          <a href="#" class="brand">Sprint & Storypoint Dashboard</a>
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

<script lang="ts">
import BasicBtn from "../atoms/BasicBtn.vue";
export default {
  name: "Header",
  components: {
    BasicBtn
  },
  methods: {
    openMenu: () => {
      let classList: DOMTokenList | undefined = document.querySelector(".nav__wrapper")?.classList;
      if (classList?.contains("active")) {
        classList?.remove("active");
      } else {
        classList?.add("active");
      }
    },
  },
};
</script>
<style scope lang="scss">
$small: 800px;

.brand {
  font-weight: bold;
  font-size: 30px;
  font-family: system-ui;
}

.site-header {
  position: relative;
  background-color: #def7ff;
}

.site-header__start {
  display: flex;
  align-items: center;
}

.site-header__end {
  display: flex;
  align-items: center;
}

.site-header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: $small) {
    padding-top: 0;
    padding-bottom: 0;
  }
}

.nav__wrapper {
  @media (min-width: $small) {
    display: flex;
  }

  @media (max-width: $small - 1) {
    position: absolute;
    top: calc(100% + 1px);
    right: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(217, 240, 247, 0.9);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    z-index: 100;

    &.active {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.nav__toggle {
  &__header {
    display: none;
    @media (max-width: $small - 1) {
    display: block;
  }
  }
}

.nav__item {
  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  a {
    display: block;
    padding: 1rem;
    border-left: 4px solid transparent;
    border-bottom: 1px solid #fff;

    @media (min-width: $small) {
      text-align: center;
      border-left: 0;
      border-bottom: 4px solid transparent;
    }
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    width: 28px;
    height: 28px;
    margin-right: 1rem;

    @media (min-width: $small) {
      display: block;
      margin: 0 auto 0.5rem;
    }
  }

  &.active {
    a {
      border-left-color: #222;

      @media (min-width: $small) {
        border-bottom-color: #222;
      }
    }
  }
}

.inactive-item {
  opacity: 0;
}
</style>
