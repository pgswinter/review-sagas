import axios from 'axios'
export async function fetchData(url){
  return await axios.get(url || 'http://5c393250b9bfb20014f71477.mockapi.io/users')
  .then(function (response) {
    debugger
    return response;
  })
  .catch(function (error) {
    return error;
  });
  
}