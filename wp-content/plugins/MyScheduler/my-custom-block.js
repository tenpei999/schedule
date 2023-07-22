const registerBlockType = wp.blocks.registerBlockType;

registerBlockType('gutenberg-examples/example-dynamic', {
  apiVersion: 1,
  title: 'myScheduler',
  icon: 'smiley',
  category: 'common',
  edit: function BlockEdit() {

    const editor = document.querySelector('.editor-styles-wrapper.block-editor-writing-flow')
    const parent = document.createElement('div');
    parent.classList.add('carender');
    const days = document.createElement('ul');
    days.classList.add('days');
    days.style.listStyle = 'none';
    days.style.display = 'flex';
    const aWeek = 7;
    const daysLength = 31;

    editor.appendChild(parent);
    parent.appendChild(days);
    
    for (let i = 1; i < daysLength; i++) {
      const li = document.createElement('li');
      li.classList.add('day');
      li.textContent = i;
      days.appendChild(li);
      if((i % 7) == 0 ) {
        const br = document.createElement('br');
        days.insertBefore(br,li);
      }  
    }
  },
});
