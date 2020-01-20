import ScrollProgress from '../dist/ScrollProgress'

test('throws error on invalid selector', () => {
  expect(() => {
    new ScrollProgress({ selector: 'foo' }).mount()
  }).toThrowError(new Error('Something is wrong with your selector 🕵️‍♂️'))
})
