import zRequest from '@/service/index'

export function getAnalysisAmountsDataApi() {
  return zRequest.get({
    url: '/goods/amount/list',
  })
}
