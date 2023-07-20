
(function () {
  const el = wp.element.createElement;
  const registerBlockType = wp.blocks.registerBlockType;

  d = new Date;

  const startDate = new Date("1900-01-1");
  const endDate = new Date("2100-12-31");
  const dateList = new Array();
  const dayname = ['日','月','火','水','木','金','土'];
  const sat = dayname[6];

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    let formatedDate = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日' + '[' + dayname[d.getDay()] + ']';

    dateList.push(formatedDate);
  }

  console.log(dateList[70000]);
  


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
