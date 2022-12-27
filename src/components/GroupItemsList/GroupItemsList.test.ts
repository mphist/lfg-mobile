import { getDaysPassedFrom } from './GroupItemsList'

describe('Test GroupItemsList', () => {
  it('getDaysPassed() should return yesterday', () => {
    const currentDate = new Date()
    const days = getDaysPassedFrom(
      new Date(currentDate.setDate(currentDate.getDate() - 1))
    )
    expect(days).toEqual('yesterday')
  })

  it('getDaysPassed() should return 2 days ago', () => {
    const currentDate = new Date()
    const days = getDaysPassedFrom(
      new Date(currentDate.setDate(currentDate.getDate() - 2))
    )
    expect(days).toEqual('2 days ago')
  })

  it('getDaysPassed() should return today', () => {
    const currentDate = new Date()
    const days = getDaysPassedFrom(
      new Date(currentDate.setDate(currentDate.getDate()))
    )
    expect(days).toEqual('today')
  })
})
