
const TOKEN:string = 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';

const TOKEN_NAME: string ='auth_token';

console.log(TOKEN);
export const getToken = (): string => {
  const token = localStorage.getItem(TOKEN_NAME);
  return token?token:""
};

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const rmToken = (): void => {
  localStorage.removeItem(TOKEN_NAME);
};