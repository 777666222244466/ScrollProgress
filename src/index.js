import defaultSettings from './config/defaultSettings'

// const ScrollProgress = (options = {}) => {
//   var settings = mergeSettings(options)

//   var selector = typeof settings.selector === 'string' ?
//                   document.querySelector(settings.selector) :
//                   settings.selector

//   if (!document.body.contains(selector)) {
//     throw new Error('Something is wrong with your selector 🕵️‍♂️')
//   }

//   let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
//   svg.setAttribute('class', 'progress-circle svg-content')
//   svg.setAttribute('viewBox', '-1 -1 102 102')
//   svg.setAttribute('width', '100%')
//   svg.setAttribute('height', '100%')

//   let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
//   path.setAttribute('d', 'M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98')

//   svg.appendChild(path);
//   selector.appendChild(svg)

//   let progressPath = document.querySelector(`${settings.selector} path`)
//   let pathLength = progressPath.getTotalLength();

//   let scrolled = document.body.scrollTop || document.documentElement.scrollTop
//   let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

//   getScrollOffset()
//   progressStyles()
//   attachEvents()

//   function getScrollOffset() {
//     scrolled = document.body.scrollTop || document.documentElement.scrollTop,
//     docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
//   }

//   function progressStyles() {
//     progressPath.style.transition = progressPath.style.WebkitTransition = 'none'
//     progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
//     progressPath.style.strokeDashoffset = pathLength
//     progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear'
//   }

//   function attachEvents() {
//     document.addEventListener('scroll', scrollHandler)
//     document.addEventListener('click', clickHandler)
//   }

//   function scrollHandler() {
//     getScrollOffset()

//     let progress = pathLength - (scrolled * pathLength / docHeight)
//     progressPath.style.strokeDashoffset = progress

//     if (scrolled > settings.scrollOffset) {
//       selector.classList.add('active-progress')
//     } else {
//       selector.classList.remove('active-progress')
//     }
//   }

//   function clickHandler() {
//     if (!event.target.matches(settings.selector)) return

//     // continue
//     event.preventDefault()

//     if (scrolled > 0) {
//       settings.onClick()
//     }
//   }

//   function mergeSettings(options) {
//     const obj = defaultSettings

//     for (const attr in options) {
//       obj[attr] = options[attr]
//     }

//     return obj
//   }
// }

// export default ScrollProgress;

export default class ScrollProgress {
  constructor (options = {}) {
    this.settings = ScrollProgress.mergeSettings(options)

    this.selector = typeof this.settings.selector === 'string' ?
                    document.querySelector(this.settings.selector) :
                    this.settings.selector

    if (!document.body.contains(this.selector)) {
      throw new Error('Something is wrong with your selector 🕵️‍♂️')
    }

    // this.selector = document.createElement('div')
    // this.selector.className = 'scroll--progress'
    // document.body.appendChild(this.selector)

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'progress-circle svg-content')
    svg.setAttribute('viewBox', '-1 -1 102 102')
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')

    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('d', 'M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98')

    svg.appendChild(path);
    this.selector.appendChild(svg)

    this.progressPath = document.querySelector(`${this.settings.selector} path`)
    // this.progressPath = this.selector.querySelector('path')
    this.pathLength = this.progressPath.getTotalLength();
  }

  mount () {
    this.getScrollOffset()
    this.progressStyles()
    this.attachEvents()

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
    if (!event.target.matches(this.settings.selector)) return

    // continue
    event.preventDefault()

    if (this.scrolled > 0) {
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
    document.addEventListener('scroll', this.scrollHandler.bind(this))
    document.addEventListener('click', this.clickHandler.bind(this))
  }

  progressStyles() {
    this.progressPath.style.transition = this.progressPath.style.WebkitTransition = 'none'
    this.progressPath.style.strokeDasharray = this.pathLength + ' ' + this.pathLength
    this.progressPath.style.strokeDashoffset = this.pathLength
    this.progressPath.style.transition = this.progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear'

    return this
  }

  static mergeSettings(options) {
    const settings = defaultSettings

    for (const attr in options) {
      settings[attr] = options[attr]
    }

    return settings
  }
}
