const sails = require('sails')
const EventProxy = require('eventproxy')
const article = require('./fixtures/article')

function setupFixtures (onDone) {
  const ep = new EventProxy()
  ep.all('article', onDone)
  ep.fail(onDone)

  article.setup(ep.done('article'))

  return
}

function teardownFixtures (onDone) {
  const ep = new EventProxy()
  ep.all('article', onDone)
  ep.fail(onDone)

  article.teardown(ep.done('article'))

  return
}

before(function (done) {
  sails.lift({
    // configuration for testing purposes
  }, function (err) {
    if (err) return done(err)
    // here you can load fixtures, etc.
    setupFixtures(function (err) {
      done(err, sails)
    })
  })

  after(function (done) {
    // here you can clear fixtures, etc.
    teardownFixtures(function (err) {
      if (err) return done(err)
      sails.lower(done)
    })
  })
})
