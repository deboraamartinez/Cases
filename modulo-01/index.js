const json = require('./pedidos.json')
const fs = require('fs')


const regexItem = /item_.+/
const regexMerchant = /merchant_.+/
const regexCustomer = /customer_.+/
const regexCart = /cart_.+/
const regexPayments = /payments_.+/


function totalPrice(json) {
  const quantity = json.item_quantity
  const unitPrice = json.item_unitPrice
  const totalPrice = parseFloat(quantity * unitPrice)
  return totalPrice
}

function totalSubCart(json) {

  const quantity = json.item_quantity
  const unitPrice = json.item_unitPrice
  const totalSubCart = parseFloat(quantity * unitPrice)
  return totalSubCart
}

function cartTotal(json) {
  const discount = json.item_discount
  const cartTotal = totalSubCart(json) - discount
  return cartTotal
}


function paymentsOneValue(json) {
  const cartTotalValue = cartTotal(json)
  const value = 0.33
  const paymentsValue = cartTotalValue * value
  return paymentsValue
}

function paymentsOneChange(json) {
  const paymentsValue = paymentsOneValue(json)
  const changeFor = X
  if (json['payments_payment[1]_method'] == "CASH") {
    const toPay = paymentsValue * 0.07
    const totalPay = paymentsValue + toPay
    return totalPay - changeFor
  }
}

function paymentsTwoValue(json) {
  const cartTotalValue = cartTotal(json)
  const value = 0.67
  const paymentsValue = cartTotalValue * value
  return paymentsValue
}


function paymentsTwoChange(json) {

  const paymentsValue = paymentsTwoValue(json)
  //const changeFor = X
  if (json['payments_payment[2]_method'] == "CASH") {
    const toPay = paymentsValue * 0.11
    const totalPay = paymentsValue + toPay
    return totalPay //- changeFor
  }
}


// função para 1/2/3
function groupBy(json, regex) {
  const newArray = []
  for (let object of json) {
    const newObj = {}
    Object.keys(object).forEach(key => {
      if (regex.test(key)) {
        newObj[key] = object[key]
      }
    }
    )
    newArray.push(newObj)
  }
  console.log(newArray)
}
groupBy(json, regexItem)


