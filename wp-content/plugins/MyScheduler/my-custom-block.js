const registerBlockType = wp.blocks.registerBlockType;

registerBlockType('gutenberg-examples/example-dynamic', {
  apiVersion: 1,
  title: 'myScheduler',
  icon: 'smiley',
  category: 'common',
  edit: function BlockEdit() {

    const editor = document.querySelector('.editor-styles-wrapper.block-editor-writing-flow');

    const parent = document.createElement('div');
    parent.classList.add('carender');
    parent.style.textAlign = 'center';
    parent.style.width = '18rem';

    const Week = document.createElement('ul');
    Week.classList.add('week');
    Week.style.display = 'flex';
    Week.style.listStyle = 'none';
    Week.style.width = '18rem';
    Week.style.paddingLeft = 'unset';
    Week.style.marginBottom = '0.7rem';

    const dayOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];
    for(let i = 0; i < dayOfTheWeek.length; i++) {
      const dayAsWeek = document.createElement('li');
      dayAsWeek.textContent = dayOfTheWeek[i];
      dayAsWeek.style.width = '14.28%';
      Week.appendChild(dayAsWeek);  
      if((i % 7) == 0 ) {
        dayAsWeek.style.color = 'red';
      }  
    }

    const border = document.createElement('span');
    border.classList.add('border');
    border.style.height = '1px';
    border.style.width = '90%';
    border.style.backgroundColor = '#000';
    border.style.margin = 'auto';
    border.style.display = 'block';

    const days = document.createElement('ul');
    days.classList.add('days');
    days.style.listStyle = 'none';
    days.style.display = 'flex';
    days.style.flexWrap = 'wrap';
    days.style.width = '18rem';
    days.style.paddingLeft = 'unset';
    days.style.marginTop = '0';
    days.style.paddingTop = '1rem';

    const aWeek = 7;
    const daysLength = 32;

    editor.appendChild(parent);
    parent.appendChild(Week);
    parent.appendChild(border);
    parent.appendChild(days);
    
    for (let i = 1; i < daysLength; i++) {
      const li = document.createElement('li');
      li.classList.add('day');
      li.textContent = i;
      li.style.width = '14.28%';
      days.appendChild(li);
      if(((i % 7) - 1) == 0 ) {
        li.style.color = 'red';
      }  
    }
  },
});
