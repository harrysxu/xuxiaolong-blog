// 通用交互功能

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // 搜索功能
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = document.getElementById('search-input');
      if (searchInput && searchInput.value.trim() !== '') {
        window.location.href = `search.html?q=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }
  
  // 获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('q');
  const categorySlug = urlParams.get('category');
  
  // 在搜索结果页面显示查询
  const searchQueryDisplay = document.getElementById('search-query');
  if (searchQueryDisplay && searchQuery) {
    searchQueryDisplay.textContent = searchQuery;
    document.getElementById('search-input').value = searchQuery;
  }
  
  // 在分类页面高亮当前分类
  if (categorySlug) {
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
      if (link.getAttribute('data-slug') === categorySlug) {
        link.classList.add('active');
      }
    });
  }
  
  // 后台登录表单验证
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      if (username === 'admin' && password === 'password') {
        // 演示用途，实际应使用后端验证
        window.location.href = 'admin-dashboard.html';
      } else {
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
          errorMessage.textContent = '用户名或密码错误';
          errorMessage.classList.remove('hidden');
        }
      }
    });
  }
  
  // 文章表单处理
  const articleForm = document.getElementById('article-form');
  if (articleForm) {
    articleForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // 在实际应用中，这里会有AJAX请求提交数据
      alert('文章已保存！');
      // 演示用途，跳转到文章列表
      window.location.href = 'admin-articles.html';
    });
  }
  
  // 分类表单处理
  const categoryForm = document.getElementById('category-form');
  if (categoryForm) {
    categoryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // 在实际应用中，这里会有AJAX请求提交数据
      alert('分类已保存！');
      // 演示用途，跳转到分类列表
      window.location.href = 'admin-categories.html';
    });
  }
  
  // 个人信息表单处理
  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // 在实际应用中，这里会有AJAX请求提交数据
      alert('个人信息已更新！');
    });
  }
  
  // 删除确认
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm('确定要删除这个项目吗？此操作不可撤销。')) {
        // 在实际应用中，这里会有AJAX请求删除数据
        alert('项目已删除！');
        // 演示用途，刷新页面
        window.location.reload();
      }
    });
  });
  
  // Markdown编辑器预览切换
  const previewButton = document.getElementById('preview-button');
  const editButton = document.getElementById('edit-button');
  const markdownEditor = document.getElementById('content');
  const markdownPreview = document.getElementById('markdown-preview');
  
  if (previewButton && editButton && markdownEditor && markdownPreview) {
    previewButton.addEventListener('click', function() {
      // 在实际应用中，这里会有Markdown转HTML的处理
      markdownPreview.innerHTML = `<h1>预览模式</h1><p>这里是Markdown内容的预览。在实际应用中，这里会显示解析后的HTML内容。</p>`;
      markdownEditor.classList.add('hidden');
      markdownPreview.classList.remove('hidden');
      previewButton.classList.add('hidden');
      editButton.classList.remove('hidden');
    });
    
    editButton.addEventListener('click', function() {
      markdownEditor.classList.remove('hidden');
      markdownPreview.classList.add('hidden');
      previewButton.classList.remove('hidden');
      editButton.classList.add('hidden');
    });
  }
}); 