/**
 * 500 (Server Error) Response
 */

const util = require('util')

module.exports = function serverError (data, options) {
  const res = this.res
  const req = this.req

  sails.log.error(`${req.method} ${req.url} Result: ${util.inspect(data)}`);

  if (data instanceof VError) {
    const info = VError.info(data)
    const cause = VError.cause(data)
    const message = info.message + ':' + (cause ? cause.message : "" )
    res.status(info.status)
    res.json({ code: info.code, message, data: info.data || {} })
  } else {
    const code = ERROR_CODES.ERR_FAILURE
    const status = ERROR_PAYLOADS[code].status || 500
    const message = data.message || ERROR_PAYLOADS[code].message
    res.status(status)
    res.json({ code, message, data: {} })
  }

  return
}
