<!-- Please remove this file from your project -->
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
    <basic-btn @handleOnClick="searchData">Search</basic-btn>
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
    alert(process.env.VUE_APP_JIRA_TEAM_BLUE)
  },
  data() {
    return {
      teamOption: [
        {
          value: process.env.VUE_APP_JIRA_TEAM_BLUE,
          label: process.env.VUE_APP_JIRA_TEAM_BLUE,
        },
        {
          value: process.env.VUE_APP_JIRA_TEAM_YELLOW,
          label: process.env.VUE_APP_JIRA_TEAM_YELLOW,
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
