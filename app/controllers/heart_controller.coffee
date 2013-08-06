Quips = require 'quips'

HeartView       = require 'views/heart/heart'
RateSliderView  = require 'views/heart/rate_slider'


class HeartController extends Quips.Controller
  layout: require 'templates/heart/layout'

  views:
    '#heart':       'heart'
    '#rate-slider': 'rateSlider'

  events:
    'rateSlider.update-interval': 'updateInterval'

  constructor: ->
    @heart = new HeartView().render()
    @rateSlider = new RateSliderView().render()
    super

  setup: ->
    $amount.change ->
      value = parseInt($amount.val())
      if value < 1 or value > 400
        value = 75
        $amount.val(value)
      $slider.slider('value', value)
      updateInterval(value)

    updateInterval($('#amount').val())

  updateInterval: ->


module.exports = HeartController
