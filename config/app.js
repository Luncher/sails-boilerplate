module.exports.app = {
  ERROR_CODES: {
    ERR_OK: 0,
    ERR_FAILURE: 8000,
    ERR_INVALID_PARAMS: 8008
  },
  ERROR_PAYLOADS: {
    0: {
      name: 'ERR_OK',
      message: '请求成功',
      status: 200
    },
    8000: {
      name: 'ERR_FAILURE',
      message: '请求失败',
      status: 200
    },
    8008: {
      name: 'ERR_INVALID_PARAMS',
      message: '无效的参数',
      status: 400
    }
  }
}
