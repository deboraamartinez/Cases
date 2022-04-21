merchantArray = []
class MerchantController {

  static readAllMerchants(req, res) {
    try {
      return res
        .status(200)
        .json(merchantArray)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static createMerchant(req, res) {
    const newMerchant = req.body
    try {
      const addMerchant = merchantArray.push(newMerchant)
      return res
        .status(200)
        .json(newMerchant)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static readOneMerchant(req, res) {
    const id = req.params.id
    try {
      const oneMerchant = merchantArray.find(el => el.merchantId == id)
      return res
        .status(200)
        .json(oneMerchant)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static updateMerchant(req, res) {
    const id = req.params.id
    const body = req.body
    try {
      const oneMerchant = merchantArray.findIndex(el => el.merchantId == id)
      merchantArray[oneMerchant] = body
      return res
        .status(200)
        .json(`Merchant atualizada com sucesso`)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static deleteMerchant(req, res) {
    const id = req.params.id
    try {
      const oneMerchant = merchantArray.findIndex(el => el.merchantId == id)
      merchantArray.splice(oneMerchant, 1)
      return res
        .status(200)
        .json(`Merchant deletada com sucesso`)
    }
    catch (error) {
      return res
        .status(500)
        .json(error.message)
    }
  }

  // atualiza status

  static updateStatus(req, res) {
    const id = req.params.id
    const body = req.body
    try {
      const oneMerchant = merchantArray.findIndex(el => el.merchantId == id)
      merchantArray[oneMerchant].status = body
      return res
        .status(200)
        .json(`Status atualizado com sucesso`)
    }
    catch (error) {
      return res
        .status(500)
        .json(error.message)
    }
  }

  // merchants abertos
  static readOnStatus(req, res) {

    try {
      const oneMerchant = merchantArray.filter(el => el.status == "On")
      return res
        .status(200)
        .json(oneMerchant)
    }
    catch (error) {
      return res
        .status(500)
        .json(error.message)
    }
  }

  //merchants fechados
  static readOffStatus(req, res) {
    const id = req.params.id
    const body = req.body
    try {
      const oneMerchant = merchantArray.findIndex(el => el.status == "Off")
      return res
        .status(200)
        .json(oneMerchant)
    }
    catch (error) {
      return res
        .status(500)
        .json(error.message)
    }
  }


  // Enviar Mensagem

  static sendMensagem(req, res) {
    const id = req.params.id
    const body = req.body
    try {
      const date = Date.now()
      const newDate = new Date(date)
      const oneMerchant = merchantArray.findIndex(el => el.merchantId == id)
      merchantArray[oneMerchant].message = `Mensagem: ${JSON.stringify(body)}. Enviada com sucesso às ${newDate}`

      return res
        .status(200)
        .json(`Mensagem enviada com sucesso`)
    }
    catch (error) {
      return res
        .status(500)
        .json(error.message)
    }
  }
}


module.exports = MerchantController