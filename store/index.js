export const state = () => ({
  headerHeight: 0,
  subNavIndex: 0,
  locales: ["en", "zh"],
  locale: "zh"

})


export const mutations = {
  setHeaderHeight(state, height) {
    state.headerHeight = height
  },
  setSubNavIndex(state, index) {
    state.subNavIndex = index
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
}

