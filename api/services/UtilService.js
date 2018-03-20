module.exports = {
  createError: function (code, cause) {
    const payload = ERROR_PAYLOADS[code]
    const name = payload.name
    const info = payload
    info.code = code
    return new VError({ name, info, cause })
  }
}