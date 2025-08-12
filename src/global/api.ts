const apiMap = {
  login: {
    url: '/login',
    method: 'post',
  },
  logout: {
    url: '/logout',
    method: 'post',
  },
  home: {
    url: '/home',
    method: 'get',
  },
  userInfo: {
    url: '/user/info',
    method: 'get',
  },
  userMenus: {
    url: '/role/menus',
    method: 'get',
  },
}

export function getApi(url: string) {
  return apiMap[url]
}

export default apiMap
