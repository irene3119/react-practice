
const authMock = (username, password) =>
  new Promise((resolve, reject) => {
    if (username === 'root' && password === 'root') {
      resolve('secret-token');
    } else {
      reject({ status: 401 });
    }
});

export default authMock;