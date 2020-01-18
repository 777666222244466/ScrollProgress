import ScrollProgress from '../dist/ScrollProgress'

test('true is not false', () => {
  expect(true).not.toBeFalsy()
})

test('throws error on invalid selector', () => {
  expect(() => {
    new ScrollProgress({ selector: 'foo' })
  }).toThrowError('Something is wrong with your selector 🕵️‍♂️')
})
