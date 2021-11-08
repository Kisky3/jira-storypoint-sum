export { default as AtomsBasicBtn } from '../../components/atoms/BasicBtn.vue'
export { default as AtomsBasicInput } from '../../components/atoms/BasicInput.vue'
export { default as AtomsBasicRadio } from '../../components/atoms/BasicRadio.vue'
export { default as MoleculesDoughnutChart } from '../../components/molecules/DoughnutChart.vue'
export { default as MoleculesHeader } from '../../components/molecules/Header.vue'
export { default as MoleculesSearchPanel } from '../../components/molecules/SearchPanel.vue'
export { default as OrganismsContainer } from '../../components/organisms/Container.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
