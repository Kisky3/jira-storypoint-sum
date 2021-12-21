<template>
  <div class="login__container">
    <div class="login__title">Login</div>
    <div class="login__context">
        <label>User:</label>
        <basic-input
          class="login__context-input"
          v-model="user"
          type="text"
          placeholder="ユーザー名"
          name="user"
        />

        <label>Password:</label>
        <basic-input
          class="login__context-input"
          v-model="password"
          type="text"
          placeholder="パスワード"
          name="password"
        />

      <basic-btn class="login__context-btn">Login</basic-btn>
    </div>
  </div>
</template>

<script>
import BasicInput from "../components/atoms/BasicInput.vue";
import BasicBtn from "../components/atoms/BasicBtn.vue";
export default {
  name: "Login",
  components: {
    BasicInput,
    BasicBtn,
  },
  data() {
    return {
      user: "",
      password: "",
    };
  },
};
</script>
