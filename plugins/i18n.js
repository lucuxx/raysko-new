export default ({ app,store }) => {
  // onBeforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, context) => {
    console.log(oldLocale, newLocale, isInitialSetup)
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log(oldLocale, newLocale)
  }

  const localePath = app.localePath('index')
  store.commit("SET_LANG",localePath)
  console.log(localePath,"localePath")
  // Get path to switch current route to French
  const switchLocalePath = app.switchLocalePath('zh')
  console.log(switchLocalePath,"switchLocalePath")

}

