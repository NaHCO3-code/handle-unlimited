import seedrandom from 'seedrandom'
import { getHint } from '../logic'
import { answers } from './list'
import { answerSeed, unlimitedMode } from '~/storage'

export function getAnswer(day: number) {
  let answer: string[]
  // When the day is out of range or in unlimited mode, pick a random answer from the list.
  if (day > answers.length || unlimitedMode.value) {
    const seed = seedrandom(answerSeed.value)()
    answer = answers[Math.floor(seed * answers.length)]
  }
  else {
    answer = answers[day]
  }
  const [word = '', hint = ''] = answer
  return {
    word,
    hint: hint || getHint(word),
  }
}
