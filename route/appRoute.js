const appRoute = require('express').Router()
const { index, run } = require('../controller/appController')

appRoute.get(`/`, index)
appRoute.post(`/compile`, run)

module.exports  = appRoute