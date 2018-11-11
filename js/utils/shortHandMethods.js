/**
 * Treat the same as document.querySelector('.example')
 * @param {Nodelist} DOMelement 
 * @returns Return the first element that matches the selector
 */
export function get(DOMelement) {
  return document.querySelector(DOMelement);
}

/**
 *
 *Treat the same as document.querySelectorAll('#example')
 * @param {NodeListOf } DOMelements
 * @returns  An array of all elements that match pattern in DOM
 */
export function getAll(DOMelements) {
  return document.querySelectorAll(DOMelements);
}