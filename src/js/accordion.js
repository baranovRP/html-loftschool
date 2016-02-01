/**
 * @accordion vertical navigation menu.
 * @author Неопознанный Енот
 */

'use strict';

(function () {

  /**
   * The class name of high level item in navigation menu.
   * @const
   * @type {String}
   */
  var ACCORDION_NAV_ITEM = 'accordion-nav__item';

  /**
   * The class name of internal list in navigation menu.
   * @const
   * @type {String}
   */
  var ACCORDION_NAV_INT = 'accordion-nav__int';

  /**
   * The part of class name of element in visible state.
   * @const
   * @type {String}
   */
  var SHOW = 'show';

  /**
   * The part of class name of element in hidden state.
   * @const
   * @type {String}
   */
  var HIDDEN = 'hidden';

  /**
   * Array, that contains nodes with class 'accordion-nav__item'.
   * @type {Array}
   */
  var toggle = Array.prototype.slice.call(document.querySelectorAll('.' + ACCORDION_NAV_ITEM));

  /**
   * Play on accordion
   * @param {Array} arrEls
   */
  function playTheAccordion(arrEls) {

    arrEls.forEach(function (item) {
      var intList = item.querySelector('.' + ACCORDION_NAV_INT);

      /**
       * Add event handler on each node in array
       */
      item.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (item.classList.contains(ACCORDION_NAV_ITEM + '--' + SHOW)) {
          item.classList.remove(ACCORDION_NAV_ITEM + '--' + SHOW);
          intList.classList.remove(ACCORDION_NAV_INT + '--' + SHOW);
          intList.classList.add(ACCORDION_NAV_INT + '--' + HIDDEN);
        } else {
          item.classList.remove(ACCORDION_NAV_ITEM + '--' + HIDDEN);
          intList.classList.remove(ACCORDION_NAV_INT + '--' + HIDDEN);
          item.classList.add(ACCORDION_NAV_ITEM + '--' + SHOW);
          intList.classList.add(ACCORDION_NAV_INT + '--' + SHOW);
        }
      });
    });
  }

  playTheAccordion(toggle);
})();
