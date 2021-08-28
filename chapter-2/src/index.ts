console.log('Hello typescript!')

let a = 1042
let b = 'apples and oranges'
const c = 'pineapples'
let d = [true, true, false]
let e = {type: 'ficus'}
let f = [1, false]
const g = [3]
let h = null

function sumVariadic(): number {
  return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0)
}

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD'

type Currency = {
  unit: Unit
  value: number
}

let Currency = {
  from(value: number, unit: Unit): Currency {
    return {
      unit: unit,
      value
    }
  }
}

function tuple<
  T extends unknown[]
>(
  ...ts: T
): T {
  return ts
}

let aa = tuple(1, true)