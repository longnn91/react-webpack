export const headerMenu = [
  {
    name: 'PRODUCTS',
    to: '/product',
    exact: false,
    auth: true
  },
  {
    name: 'REGISTER',
    to: '/register',
    exact: true,
    auth: false
  },
  {
    name: 'LOG IN',
    to: '/login',
    exact: false,
    auth: false
  }
];
