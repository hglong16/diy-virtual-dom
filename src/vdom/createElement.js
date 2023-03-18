export default (tagName, { attrs = {}, children = [] } = {}) => {
  vElem = Object.create(null);
  return Object.assign(vElem, {
    tagName,
    attrs,
    children,
  });
};
