export default (tagName, { attrs = {}, children = [] } = {}) => {
  let vElem = Object.create(null);
  return Object.assign(vElem, {
    tagName,
    attrs,
    children,
  });
};
