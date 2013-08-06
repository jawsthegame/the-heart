Quips     = require 'quips'
$         = require 'jqueryify'
Backbone  = require 'backbone'

require 'lib/js/jquery-ui-1.10.3.custom.min'

HeartController  = require 'controllers/heart_controller'


class App

  constructor: ->
    @showUI()

  showUI: ->
    $layout = $('body').empty().append(require 'templates/layout')
    $content = $layout.find('#main-content')

    new HeartController(el: $content).activate()

    Backbone.history.start()


module.exports = App
