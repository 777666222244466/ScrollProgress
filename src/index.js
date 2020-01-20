import defaultSettings from './config/defaultSettings'

export default class ScrollProgress {
  constructor (options = {}) {
    this.settings = ScrollProgress.mergeSettings(options)
    this.selector = typeof this.settings.selector === 'string' ?
                    document.querySelector(this.settings.selector) :
                    ScrollProgress.buildSelector()
  }

  mount () {
    ScrollProgress.validateSelector(this.selector)
    this.buildSvg()
    this.attachEvents()

    return this
  }

  buildSvg() {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'progress-circle')
    svg.setAttribute('viewBox', '-1 -1 102 102')
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')

    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('d', 'M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98')

    svg.appendChild(path);
    this.selector.appendChild(svg)

    // Append path styles...
    this.progressPath = path
    this.pathLength = this.progressPath.getTotalLength();

    this.progressPath.style.strokeDasharray = this.pathLength + ' ' + this.pathLength
    this.progressPath.style.strokeDashoffset = this.pathLength
    this.progressPath.style.transition = `stroke-dashoffset ${this.settings.progressPathTransition}`
    this.progressPath.style.WebkitTransition = `stroke-dashoffset ${this.settings.progressPathTransition}`

    return this
  }

  scrollHandler() {
    this.getScrollOffset()

    const progress = this.pathLength - (this.scrolled * this.pathLength / this.docHeight)
    this.progressPath.style.strokeDashoffset = progress

    if (this.scrolled > this.settings.scrollOffset) {
      this.selector.classList.add('active-progress')
    } else {
      this.selector.classList.remove('active-progress')
    }

    return this
  }

  clickHandler() {
    if (event.target !== this.selector) return

    // continue
    event.preventDefault()

    if (this.scrolled > 0 && typeof this.settings.onClick === 'function') {
      this.settings.onClick()
    }

    return this
  }

  getScrollOffset() {
    this.scrolled = document.body.scrollTop || document.documentElement.scrollTop
    this.docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    return this
  }

  attachEvents() {
    document.addEventListener('scroll', this.scrollHandler.bind(this), false)
    document.addEventListener('click', this.clickHandler.bind(this), false)
  }

  static validateSelector(selector) {
    if (! document.body.contains(selector))
      throw new Error('Something is wrong with your selector 🕵️‍♂️')

    return true
  }

  static buildSelector() {
    let el = document.createElement('div');
    el.className = 'js--scroll--progress'
    document.body.appendChild(el)

    return el
  }

  static mergeSettings(options) {
    const settings = defaultSettings

    for (const attr in options) {
      settings[attr] = options[attr]
    }

    return settings
  }
}
