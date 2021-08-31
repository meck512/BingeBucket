async function createPostHandler(event) {
    event.preventDefault();
  // needs to be routed
    document.location.replace('/homepage')
  }
  
  
  document.querySelector('#create-new-post').addEventListener('click', createPostHandler);