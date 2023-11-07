import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

export const getUsernameAndPassword = () => {
  // 从系统中读取username与password
  const homeDir = os.homedir();
  const usernamePath = path.resolve(homeDir, '.vben', 'username');
  const passwordPath = path.resolve(homeDir, '.vben', 'password');
  const username = fs.readFileSync(usernamePath).toString();
  const password = fs.readFileSync(passwordPath).toString();
  return { username, password };
};

export const success = (message, data) => {
  return {
    code: 0,
    message,
    result: data,
  };
};

export const error = (message) => {
  return {
    code: -1,
    message,
  };
};
