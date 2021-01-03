// tip calculator

const bill = 275

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

const totalValue = bill + tip

console.log(`the bill was ${bill}, the tip was ${tip}, and the total value was ${totalValue}`)