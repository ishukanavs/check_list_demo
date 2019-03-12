    export function PostData(type, postData) {
  let BaseURL = 'https://401baaab.ngrok.io/adduser';
  //let BaseURL = 'http://localhost/socialapi/';
  
  return new Promise((resolve, reject) =>{
  fetch(BaseURL, {
      method: 'POST',
      headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin':'*',
                 'Content-Security-Policy':'upgrade-insecure-requests'
               },
      body: JSON.stringify(postData)
  },console.log(postData.name,postData.email))
  .then((response) => console.log(response.json()))
  .then((res) => {
      resolve(res);
  })
  .catch((error) => {
     reject(error);
  });
  
  });
  }




  //export function PostData(type, postData) {
  // let BaseURL = ;http://70f15926.ngrok.io/adduser
  //let BaseURL = 'http://localhost/socialapi/';  
    
  //     fetch('https://95bfb631.ngrok.io/adduser', {
  //       method: "POST",
  //       mode:"cors",
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin':'*',
  //         'Content-Security-Policy':'upgrade-insecure-requests',
  //       },
  //       body: JSON.stringify(postData)
  //     },console.log(JSON.stringify(postData.name),JSON.stringify(postData.email)))
  //       .then(response => response.json())
  //       .then(response => {
  //         // console.log(response);
  //         // console.log(postData);
  //         sessionStorage.setItem('tokenRecieved',response.postData.token);
  //         console.log(sessionStorage.getItem('tokenRecieved'));
  //         })

  //       .catch((error) => {
  //         console.log("error");
  //   });
  // }

