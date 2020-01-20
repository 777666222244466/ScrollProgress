function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var defaultSettings = {
  selector: '.scroll--progress',

  /**
   * The background color of the progress bar.
   * Any valid css for `background-color` attribute will do.
   *
   * @type {String}
   */
  backgroundColor: '#EAEAEA',

  /**
   * The progress bar color.
   * Any valid css for `background-color` attribute will do.
   *
   * @type {String}
   */
  progressColor: 'linear-gradient(to right, #ec008c, #fc6767)',

  /**
   * Determine if the progress bar is clickable and will scroll to top on click.
   *
   * @type {Boolean}
   */
  clickToTop: true,

  /**
   * The offset in which to scroll before showing the progress bar.
   *
   * @type {Number}
   */
  scrollOffset: 50,
  onClick: function onClick() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
};

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

var ScrollProgress =
/*#__PURE__*/
function () {
  function ScrollProgress() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ScrollProgress);

    this.settings = ScrollProgress.mergeSettings(options);
    this.selector = typeof this.settings.selector === 'string' ? document.querySelector(this.settings.selector) : this.settings.selector;

    if (!document.body.contains(this.selector)) {
      throw new Error('Something is wrong with your selector 🕵️‍♂️');
    } // this.selector = document.createElement('div')
    // this.selector.className = 'scroll--progress'
    // document.body.appendChild(this.selector)


    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'progress-circle svg-content');
    svg.setAttribute('viewBox', '-1 -1 102 102');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98');
    svg.appendChild(path);
    this.selector.appendChild(svg);
    this.progressPath = document.querySelector("".concat(this.settings.selector, " path")); // this.progressPath = this.selector.querySelector('path')

    this.pathLength = this.progressPath.getTotalLength();
  }

  _createClass(ScrollProgress, [{
    key: "mount",
    value: function mount() {
      this.getScrollOffset();
      this.progressStyles();
      this.attachEvents();
      return this;
    }
  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      this.getScrollOffset();
      var progress = this.pathLength - this.scrolled * this.pathLength / this.docHeight;
      this.progressPath.style.strokeDashoffset = progress;

      if (this.scrolled > this.settings.scrollOffset) {
        this.selector.classList.add('active-progress');
      } else {
        this.selector.classList.remove('active-progress');
      }

      return this;
    }
  }, {
    key: "clickHandler",
    value: function clickHandler() {
      if (!event.target.matches(this.settings.selector)) return; // continue

      event.preventDefault();

      if (this.scrolled > 0) {
        this.settings.onClick();
      }

      return this;
    }
  }, {
    key: "getScrollOffset",
    value: function getScrollOffset() {
      this.scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      this.docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      return this;
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      document.addEventListener('scroll', this.scrollHandler.bind(this));
      document.addEventListener('click', this.clickHandler.bind(this));
    }
  }, {
    key: "progressStyles",
    value: function progressStyles() {
      this.progressPath.style.transition = this.progressPath.style.WebkitTransition = 'none';
      this.progressPath.style.strokeDasharray = this.pathLength + ' ' + this.pathLength;
      this.progressPath.style.strokeDashoffset = this.pathLength;
      this.progressPath.style.transition = this.progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
      return this;
    }
  }], [{
    key: "mergeSettings",
    value: function mergeSettings(options) {
      var settings = defaultSettings;

      for (var attr in options) {
        settings[attr] = options[attr];
      }

      return settings;
    }
  }]);

  return ScrollProgress;
}();

export default ScrollProgress;
