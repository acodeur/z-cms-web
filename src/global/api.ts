interface IApiMap {
  [key: string]: {
    [key: string]: {
      url: string
    }
  }
}

const apiMap: IApiMap = {
  department: {
    list: { url: '/department/list' },
    add: { url: '/department' },
    edit: { url: '/department/${id}' },
    delete: { url: '/department/${id}' },
  },
}

export default apiMap
