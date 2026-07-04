// @keep-sorted
export default {
  "declaration-no-important": true,
  "font-family-no-missing-generic-family-keyword": null,
  "no-descending-specificity": null,
  "no-duplicate-selectors": null,
  "no-empty-source": null,
  "property-no-unknown": [true, {
    ignoreProperties: ["corners", /^corner-/],
  }],
  "selector-id-pattern": null,
  "selector-pseudo-class-no-unknown": [true, {
    ignorePseudoClasses: ["deep", "global", "slotted"],
  }],
};
