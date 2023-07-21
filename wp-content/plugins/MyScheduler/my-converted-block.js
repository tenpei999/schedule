const registerBlockType = wp.blocks.registerBlockType;
registerBlockType('gutenberg-examples/example-dynamic', {
  apiVersion: 1,
  title: 'myScheduler',
  icon: 'smiley',
  category: 'common',
  edit: function BlockEdit() {
    // "<h1>Hello World</h1>"を出力するJSXを返す
    d = new Date();
    const startDate = new Date("1900-01-1");
    const endDate = new Date("2100-12-31");
    const yearList = new Array();
    const monthList = new Array();
    const dateList = new Array();
    const dayname = ['日', '月', '火', '水', '木', '金', '土'];
    const sat = dayname[6];
    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      let formatedYear = d.getFullYear() + '年';
      let formatMonth = d.getMonth() + 1 + '月';
      let formatedDate = d.getDate() + '日' + '[' + dayname[d.getDay()] + ']';
      yearList.push(formatedYear);
      monthList.push(formatMonth);
      dateList.push(formatedDate);
      if (formatedYear === '2023年') {
        if (formatMonth === '8月') {
          console.log(formatedDate);
        }
      }
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, sat), console.log("hoge"));
  }
});
