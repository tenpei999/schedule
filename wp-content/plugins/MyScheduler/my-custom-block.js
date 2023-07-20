(function () {
  const el = wp.element.createElement;
  const registerBlockType = wp.blocks.registerBlockType;

  registerBlockType('my-plugin/custom-block', {
    title: 'My Custom Block',
    icon: 'smiley',
    category: 'common',
    edit: function () {
      return el('p', null, 'Hello, World!');
    },
    save: function () {
      return el('p', null, 'Hello, World!');
    },
  });
})();
