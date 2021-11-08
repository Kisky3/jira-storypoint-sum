<template>
  <div class="search-panel">
    <!-- Search Panel Start -->
    <basic-radio v-model="team" name="team" :options="teamOption" />
    <basic-input
      v-model="sprint"
      type="text"
      placeholder="スプリント名 例）スプリント20"
      name="sprint"
      value="value"
    />
    <basic-btn v-on:handleOnClick="openMenu">menu</basic-btn>
    <button @click="searchData">Search</button>

    <!-- Search Panel End -->
  </div>
</template>
<style scope lang="scss"></style>

<script lang="ts">
import BasicInput from '../atoms/BasicInput.vue'
import BasicRadio from '../atoms/BasicRadio.vue'
import BasicBtn from '../atoms/BasicBtn.vue'
export default {
  components: {
    BasicInput,
    BasicRadio,
    BasicBtn
  },
  mounted() {
    alert(process.env.JIRA_TEAM_BLUE)
  },
  data() {
    return {
      teamOption: [
        {
          value: process.env.JIRA_TEAM_BLUE,
          label: process.env.JIRA_TEAM_BLUE,
        },
        {
          value: process.env.JIRA_TEAM_YELLOW,
          label: process.env.JIRA_TEAM_YELLOW,
        },
      ],
    }
  },
  methods: {
    searchData(): void {
      this.$emit('searchData')
    },
  },
}
</script>
<style scope lang="scss">
.search-panel {
  margin-top: 80px;
}
</style>
