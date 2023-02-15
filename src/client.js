axios.get('http://localhost:5173/')
  .then(function (response) {
    console.log(response.title);
    console.log(response.description);
    console.log(response.projectUrl);
    console.log(response.codeUrl);
    console.log(response.imgUrl);
    console.log(response.tags);
  });