export default {
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
  backgroundColor: 'rgba(255,255,255,0.2)', // to be implemented

  /**
   * The progress bar color.
   * Any valid css for `background-color` attribute will do.
   *
   * @type {String}
   */
  progressColor: '#ECEDF3', // to be implemented

  /**
   * The offset in which to scroll before showing the progress bar.
   *
   * @type {Number}
   */
  scrollOffset: 50,

  /**
   * The progress path css easing.
   *
   * @type {String}
   */
  progressEasing: '10ms linear',

  /**
   * The function to fire when clicking the progress bar.
   *
   * @return {Function}
   */
  onClick: () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
}
