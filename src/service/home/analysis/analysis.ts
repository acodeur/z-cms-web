import zRequest from '@/service/index'

export function getAnalysisCountsDataApi() {
  return zRequest.get({
    url: '/goods/category/count',
  })
}

export function getAnalysisSalesDataApi() {
  return zRequest.get({
    url: '/goods/category/sale',
  })
}

export function getAnalysisSaleAddressDataApi() {
  return zRequest.get({
    url: '/goods/address/sale',
  })
}

export function getAnalysisAmountsDataApi() {
  return zRequest.get({
    url: '/goods/amount/list',
  })
}
