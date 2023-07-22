const registerBlockType = wp.blocks.registerBlockType;

registerBlockType('gutenberg-examples/example-dynamic', {
  apiVersion: 1,
  title: 'myScheduler',
  icon: 'smiley',
  category: 'common',
  edit: function BlockEdit() {
    // "<h1>Hello World</h1>"を出力するJSXを返す
    d = new Date;
    const startDate = new Date("1900-01-1");
    const endDate = new Date("2100-12-31");
    const yearList = new Array();
    const monthList = new Array();
    const dateList = new Array();
    const dayname = ['日', '月', '火', '水', '木', '金', '土'];
    const sat = dayname[6];
    const editor = document.querySelector('.editor-styles-wrapper.block-editor-writing-flow');
    const div = document.createElement('div');
    editor.appendChild(div);
    div.classList.add('carender');
    div.style.display = 'flex';

    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      let formatedYear = d.getFullYear() + '年';
      let formatedMonth = (d.getMonth() + 1) + '月';
      let formatedDate = d.getDate();
      let formatedDateAsDay = d.getDate() + '日' + '[' + dayname[d.getDay()] + ']';
      yearList.push(formatedYear);
      monthList.push(formatedMonth);
      dateList.push(formatedDate);


      if (formatedYear === '2023年') {
        if (formatedMonth === '8月') {
          const box = document.createElement('div');
          box.textContent = formatedDate;
          div.appendChild(box);
          console.log(formatedDate);
        }
      }
    }

    // return (
    //   <div>
    //     <h1>{sat}</h1>
    //     {
    //       console.log("hoge")
    //     }
    //   </div>
    // );
  },
});
