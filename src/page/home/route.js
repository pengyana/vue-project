const Register =()=>import('../home/register')
const indexList =()=>import('../home/index-list')

export default [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/index-list',
    name: 'index-list',
    component: indexList
  }
]
