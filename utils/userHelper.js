require('dotenv').config();

function getUserCredentials(type = 'valid') {
  if (type === 'locked') {
    return {
      username: process.env.SAUCE_LOCKED_USER,
      password: process.env.SAUCE_PASSWORD
    };
  }

  if (type === 'invalid') {
    return {
      username: 'invalid_user',
      password: 'invalid_pass'
    };
  }

  return {
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_PASSWORD
  };
}


module.exports = { getUserCredentials };