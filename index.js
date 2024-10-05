const highlights = document.querySelectorAll('.highlight');
// 这里使用 document.querySelectorAll 选择页面上所有类名为 .highlight 的元素，并将它们保存到 highlights 变量中。highlights 是一个 NodeList，可以对它进行遍历操作。//

const definitionBox = document.getElementById('definition');
//使用 document.getElementById 获取页面上 ID 为 definition 的元素，定义框的内容和位置都会在后续操作中更新。//

highlights.forEach(highlight => {
    highlight.addEventListener('click', (e) => {
        const definition = e.target.getAttribute('data-definition');
        definitionBox.textContent = definition;
        definitionBox.style.display = 'block';
        definitionBox.style.left = `${e.pageX}px`;
        definitionBox.style.top = `${e.pageY + 20}px`;
    });
});
/*
.遍历 highlights 列表中的每个元素，对每个 .highlight 元素添加一个点击事件监听器。
.点击时，通过 e.target.getAttribute('data-definition') 获取被点击的 .highlight 元素的 data-definition 属性值。
.然后将这个值设置为 definitionBox 的文本内容：definitionBox.textContent = definition。
.通过 definitionBox.style.display = 'block' 显示定义框。
.根据点击位置 (e.pageX 和 e.pageY)，设置定义框的左 (left) 和顶部 (top) 坐标，使其出现在点击位置附近。*/

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('highlight')) {
        definitionBox.style.display = 'none';
    }
});
/*
.这里对整个 document 添加一个点击事件监听器。
.每当页面上任意地方被点击时，代码检查点击的目标 (e.target) 是否带有 .highlight 类名。
.如果点击的不是 .highlight 元素，定义框就会被隐藏：definitionBox.style.display = 'none'。*/

const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

// 添加点击事件监听器到整个文档
document.addEventListener('click', function(event) {
  // 如果点击的不是侧边栏，也不是复选框,也不是label按钮
  if (!sidebar.contains(event.target) && event.target !== sidebarToggle && event.target !== document.querySelector(".toggle-btn")) {
    // 取消复选框的选中状态
    sidebarToggle.checked = false;
  }
});

sidebar.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  
  // 阻止点击复选框本身时关闭它




document.querySelectorAll('.menu-item2').forEach(item => {
  item.addEventListener('click', function(s) {
      // 防止点击子菜单项时触发父菜单的点击事件
      if (s.target !== this) return;
      
      this.classList.toggle('open');
      const submenu = this.querySelector('.submenu');
      if (submenu) {
          submenu.classList.toggle('show');
      }
  });
});