export default {
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

  onClick: () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
}
