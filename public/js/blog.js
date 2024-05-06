const createPostForm = document.querySelector('.new-post-form');
  const createPostBtn = document.querySelector('#create-post-btn');
  
  createPostBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts/new', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('Post created successfully!');
        document.location.replace('/')
      } else {
        console.error('Failed to create post!');
      }
    }
  });
  
  document
    .querySelector('.edit-me')
    .addEventListener('click', editBtnHandler);
  
  document
    .querySelector('.btn-danger')
    .addEventListener('click', delButtonHandler);