<template>
  <div class="login__container">
    <div class="login__title">Login</div>
    <div class="login__context">
        <label>User:</label>
        <basic-input
          class="login__context-input"
          v-model.trim="user"
          type="text"
          placeholder="ユーザー名"
          name="user"
        />

        <label>Password:</label>
        <basic-input
          class="login__context-input"
          v-model.trim="password"
          type="text"
          placeholder="パスワード"
          name="password"
          @keyup.enter="login"
        />

      <basic-btn 
        id="login-btn" 
        @handleOnClick="login" 
        class="login__context-btn">
          Login
      </basic-btn>
    </div>
  </div>
</template>

<script>
import BasicInput from "../components/atoms/BasicInput.vue";
import BasicBtn from "../components/atoms/BasicBtn.vue";
import {login} from "../../api";
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
  methods: {
    async login() {
      let data = await login(this.user);
      let token = data.token;
      console.log(data)
    }
  }
};
</script>
