const url = 'https://api.github.com/repos/facebook/react/'

const issues = id => {
  const param = id ? `/${id}` : '';
  return retrieveData(`${url}issues${param}`);
}

const retrieveData = requestURL => {
  fetch(requestURL)
  .then(response => {
    return response.json();
  })
  .then(data => {
    return data;
  });
}

const api = {
  get: {
    issues,    
  },
}

export default api;
