test('true is true', () => {
  expect(true).toBeTruthy()
})

// import ScrollProgress from '../dist/ScrollProgress'
// import defaultSettings from '../src/config/defaultSettings'

// test('has default settings', () => {
//   const progressBar = new ScrollProgress()

//   expect(progressBar.settings).toStrictEqual(defaultSettings)
// })

// test('merge with user settings', () => {
//   const userSettings = { clickToTop: false }
//   const progressBar = new ScrollProgress(userSettings)

//   const mergedSettings = Object.assign({}, defaultSettings, userSettings)

//   expect(progressBar.settings).toStrictEqual(mergedSettings)

//   // expect(document.body.querySelector('div.progress--bar').style.backgroundColor).toBeDefined()
// })
