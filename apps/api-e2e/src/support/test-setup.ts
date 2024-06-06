/* eslint-disable */

import axios from 'axios';
import { loginAndGetBearerToken } from './login';

module.exports = async function () {
  // Configure axios for tests to use.
  const host = 'localhost'; //  process.env.HOST ?? 'localhost';
  const port = '3000'; //  process.env.PORT ?? '3000';
  axios.defaults.baseURL = `http://${host}:${port}`;
};
