export const documentOffsetTop = () => {
  try {
    if (Element) {

      // @ts-ignore
      Element.prototype.documentOffsetTop = function () {
        // @ts-ignore
        return this.offsetTop + (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0);
      };
    }
  } catch (e) {
  }
};
