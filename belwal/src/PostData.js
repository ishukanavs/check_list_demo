export function PostData(type, userData) {
  let BaseURL = 'https://apipaypal.9lessons.info/apipaypal/';
  //let BaseURL = 'http://localhost/socialapi/';
  
  return new Promise((resolve, reject) =>{
  fetch(BaseURL+type, {
      method: 'POST',
      body: JSON.stringify(userData)
  },console.log(userData.name,userData.email))
  .then((response) => console.log("Hello"+response.json()))
  .then((res) => {
      resolve(res);
  })
  .catch((error) => {
     reject(error);
  });
  
  });
  }