// 获取右侧楼主的id
const getAuthorId = () => {
  const authorElement = document.querySelector('.left.right-data-user a.left');
  if (authorElement) {
    const href = authorElement.getAttribute('href');
    const userId = href.match(/blog\/(\d+)/)[1]; // Extract the numeric part
    return userId;
  }
  return null;
};

// 过滤留言，只显示楼主的留言
const filterComments = (authorId) => {
  const comments = document.querySelectorAll('.comment-data');
  comments.forEach(comment => {
    const commentAuthorId = comment.getAttribute('ustr');
    if (commentAuthorId !== authorId) {
      comment.style.display = 'none';
    }
  });
};

// 主函数
const main = () => {
  const authorId = getAuthorId();
  console.log("authorId: " + authorId);
  if (authorId) {
    filterComments(authorId);
  }
};

// 等待页面加载完成后执行主函数
window.addEventListener('load', main);