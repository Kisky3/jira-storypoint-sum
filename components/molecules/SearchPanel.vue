<!-- Please remove this file from your project -->
<template>
  <div class="search-panel">
    <!-- Search Panel Start -->
    <basic-input
      v-model="sprint"
      type="text"
      placeholder="例）シャープ AQUOS LC-50U45"
      name="商品名"
      value="value"
    />
    <basic-radio v-model="team" name="team" :options="teamOption" />
    <button @click="searchData">Search</button>

    <!-- Search Panel End -->
  </div>
</template>
<style scope lang="scss"></style>

<script lang="ts">
import BasicInput from '../atoms/BasicInput.vue'
import BasicRadio from '../atoms/BasicRadio.vue'
export default {
  components: {
    BasicInput,
    BasicRadio,
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
