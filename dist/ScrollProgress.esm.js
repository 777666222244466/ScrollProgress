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
  /**
   * The selector to append the progress bar to.
   *
   * @type {Boolean|String}
   */
  selector: false,

  /**
   * The background color of the progress bar.
   * Any valid css for `background-color` attribute will do.
   *
   * @type {String}
   */
  backgroundColor: 'rgba(255,255,255,0.2)',

  /**
   * The progress bar color.
   * Any valid css for `background-color` attribute will do.
   *
   * @type {String}
   */
  progressColor: '#ECEDF3',

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

  /**
   * The progress path css transition.
   *
   * @type {String}
   */
  progressPathTransition: '10ms linear',

  /**
   * The function to fire when clicking the progress bar.
   *
   * @return {Function}
   */
  onClick: function onClick() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
};

var ScrollProgress =
/*#__PURE__*/
function () {
  function ScrollProgress() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ScrollProgress);

    this.settings = ScrollProgress.mergeSettings(options);
    this.selector = typeof this.settings.selector === 'string' ? document.querySelector(this.settings.selector) : ScrollProgress.buildSelector();
  }

  _createClass(ScrollProgress, [{
    key: "mount",
    value: function mount() {
      ScrollProgress.validateSelector(this.selector);
      this.buildSvg();
      this.attachEvents();
      return this;
    }
  }, {
    key: "buildSvg",
    value: function buildSvg() {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'progress-circle');
      svg.setAttribute('viewBox', '-1 -1 102 102');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98');
      svg.appendChild(path);
      this.selector.appendChild(svg); // Append path styles...

      this.progressPath = path;
      this.pathLength = this.progressPath.getTotalLength();
      this.progressPath.style.strokeDasharray = this.pathLength + ' ' + this.pathLength;
      this.progressPath.style.strokeDashoffset = this.pathLength;
      this.progressPath.style.transition = "stroke-dashoffset ".concat(this.settings.progressPathTransition);
      this.progressPath.style.WebkitTransition = "stroke-dashoffset ".concat(this.settings.progressPathTransition);
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
      if (event.target !== this.selector) return; // continue

      event.preventDefault();

      if (this.scrolled > 0 && typeof this.settings.onClick === 'function') {
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
      document.addEventListener('scroll', this.scrollHandler.bind(this), false);
      document.addEventListener('click', this.clickHandler.bind(this), false);
    }
  }], [{
    key: "validateSelector",
    value: function validateSelector(selector) {
      if (!document.body.contains(selector)) throw new Error('Something is wrong with your selector 🕵️‍♂️');
      return true;
    }
  }, {
    key: "buildSelector",
    value: function buildSelector() {
      var el = document.createElement('div');
      el.className = 'js--scroll--progress';
      document.body.appendChild(el);
      return el;
    }
  }, {
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
