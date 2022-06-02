const json = require('./pedidos.json')
const fs = require('fs')


const regexItem = /item_.+/
const regexMerchant = /merchant_.+/
const regexCustomer = /customer_.+/
const regexCart = /cart_.+/
const regexPayments = /payments_.+/

// function for item_totalPrice
function totalPrice(json) {
  const quantity = json.item_quantity
  const unitPrice = json.item_unitPrice
  const totalPrice = parseFloat(quantity * unitPrice)
  return totalPrice
}

//console.log(totalPrice(json[1]))
// function for cart_subtotal and payments_charges_subTotal"
function totalSubCart(json) {

  const quantity = json.item_quantity
  const unitPrice = json.item_unitPrice
  const totalSubCart = parseFloat(quantity * unitPrice)
  return totalSubCart
}
//console.log(totalPrice(json[1]))
//function for carttotal
function cartTotal(json) {
  const discount = json.item_discount
  const cartTotal = totalSubCart(json) - discount
  return cartTotal
}

// console.log(cartTotal(json[1]))

//function for payments_payment[1]_value"
function paymentsOneValue(json) {
  const cartTotalValue = cartTotal(json)
  const value = 0.33
  const paymentsValue = cartTotalValue * value
  return paymentsValue
}
//console.log(paymentsOneValue(json[1]))

// function for payments_payment[1]_changeFor
function paymentsOneChangeFor(json) {
  const paymentsValue = paymentsOneValue(json)
  if (json['payments_payment[1]_method'] !== "CASH") return 0;

  const toPay = paymentsValue * 0.07
  const totalPay = paymentsValue + toPay
  return totalPay
}

console.log(paymentsOneChangeFor(json[1]))

// function for payments_payment[2]_value"
function paymentsTwoValue(json) {
  const cartTotalValue = cartTotal(json)
  const value = 0.67
  const paymentsValue = cartTotalValue * value
  return paymentsValue
}

//console.log(paymentsTwoValue(json[1]))

//function for "payments_payment[2]_changeFor"
function paymentsTwoChangeFor(json) {
  const paymentsValue = paymentsTwoValue(json)
  if (json['payments_payment[2]_method'] !== "CASH") return 0
  const toPay = paymentsValue * 0.11
  const totalPay = paymentsValue + toPay
  return totalPay
}


//console.log(paymentsTwoChangeFor(json[1]))
//function for payments_charges_totalInCash":
function totalInCash(json) {
  const valueOne = paymentsOneValue(json)
  const valueTwo = paymentsTwoValue(json)

  if (json['payments_payment[1]_method'] == "CASH" && json['payments_payment[2]_method'] == "CASH") {
    return valueOne + valueTwo
  } else if (json['payments_payment[1]_method'] == "CASH" && json['payments_payment[2]_method'] != "CASH") {
    return valueOne
  } else if (json['payments_payment[1]_method'] != "CASH" && json['payments_payment[2]_method'] == "CASH") {
    return valueTwo
  } else if (json['payments_payment[1]_method'] != "CASH" && json['payments_payment[2]_method'] != "CASH") {
    return 0
  }
}

//  function for "payments_charges_change"
function chargesChange(json) {

  const valueOneChange = paymentsOneValue(json) * 0.07
  const valueTwoChange = paymentsTwoValue(json) * 0.11

  if (json['payments_payment[1]_method'] == "CASH" && json['payments_payment[2]_method'] == "CASH") {
    return valueOneChange + valueTwoChange
  } else if (json['payments_payment[1]_method'] == "CASH" && json['payments_payment[2]_method'] != "CASH") {
    return valueOneChange
  } else if (json['payments_payment[1]_method'] != "CASH" && json['payments_payment[2]_method'] == "CASH") {
    return valueTwoChange
  } else if (json['payments_payment[1]_method'] != "CASH" && json['payments_payment[2]_method'] != "CASH") {
    return 0
  }

}


// function for exercices 1,2 and 3
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
//groupBy(json, regexItem)


