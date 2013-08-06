Quips = require 'quips'


class RateSliderView extends Quips.View
  template: require 'templates/heart/rate_slider'

  elements:
    '#amount': '$amount'
    '.slider': '$slider'

  render: ->
    super
    @$slider.slider
      orientation: 'vertical'
      range: 'min'
      min: 40
      max: 180
      value: 75
      slide: (event, ui) =>
        @$amount.val ui.value
        @trigger 'update-interval', ui.value
    @$amount.val @$slider.slider('value')
    this


module.exports = RateSliderView
