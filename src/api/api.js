const url = 'https://api.github.com/repos/facebook/react'

const error = () => ({response: false})

const issue = id => {
  const param = id ? `/${id}` : error();
  return retrieveData(`${url}/issues${param}`);
}

const issues = () => {
  return retrieveData(`${url}/issues`);
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
    issue,  
    issues,
  },
}

export default api;
