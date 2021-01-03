'use strict'

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(calcTip(100))

const bills = [125, 555, 44]

const tips = []
tips.push(calcTip(bills[0]))
tips.push(calcTip(bills[1]))
tips.push(calcTip(bills[2]))

const total = []
total.push((bills[0] + tips[0]))
total.push((bills[1] + tips[1]))
total.push((bills[2] + tips[2]))

console.log(total)