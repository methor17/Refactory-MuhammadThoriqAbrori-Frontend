const axios = require( 'axios' );


const getUser = ()=> axios.get('https://jsonplaceholder.typicode.com/users');
const getPost = ()=> axios.get('https://jsonplaceholder.typicode.com/posts');


Promise.all([getUser(), getPost()])
  .then(results => {
    const users = results[0].data;
    const posts = results[1].data;
    const merge = posts.map(post => {
        post['user'] = users.filter(user => user.id == post.userId)[0]
        return post
    })

    console.log(merge)
  })
  .catch(err => console.log(err.message))