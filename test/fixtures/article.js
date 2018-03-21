const EventProxy = require('eventproxy')

module.exports.setup = function (onDone) {
  const ep = new EventProxy()

  ep.all('one', 'two', function (articleOne, articleTwo) {
    stubInstance.articleOneId = articleOne.data
    stubInstance.articleTwoId = articleTwo.data
    onDone()
  })
  ep.fail(onDone)

  // TODO FIXME
  ep.done('one')
  ep.done('two')

  return
}

module.exports.teardown = function (onDone) {
  const ep = new EventProxy()
  ep.all('one', 'two', function () {
    onDone()
  })
  ep.fail(onDone)

  // TODO FIXME
  ep.done('one')
  ep.done('two')

  return
}

const stubInstance = {}
module.exports.stubInstance = stubInstance
