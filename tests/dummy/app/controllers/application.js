import Em from 'ember'

export default Em.Controller.extend({
  date: '',

  maxDate: moment().add(1, 'month'),
  minDate: moment().subtract(1, 'month'),

  disableFn (date) {
    return date.day() === 6 || date.day() === 0
  },

  focusedCode: `
    {{en-daypicker-input
      minDate=minDate
      disableFn=disableFn
      on-select=(action "onSelect")
      on-focus=(action "onFocus")
      format="MMM D, YYYY"
      placeholder="Select a date"
      date=date}}
  `,

  actions: {
    onSelect (date) {
      console.log('Got on-select')
      this.set('date', date)
    },

    onFocus () {
      console.log('Got on-focus')
    }
  }
})
