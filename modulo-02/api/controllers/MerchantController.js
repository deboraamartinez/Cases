merchantArray = [];
class MerchantController {
  static readAllMerchants(req, res) {
    try {
      return res.status(200).json(merchantArray);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static createMerchant(req, res) {
    const newMerchant = req.body;
    try {
      const addMerchant = merchantArray.push(newMerchant);
      return res.status(200).json(newMerchant);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static readOneMerchant(req, res) {
    const id = req.params.id;
    try {
      // fetchMerchantById(id)
      const oneMerchant = merchantArray.find((el) => el.merchantId == id);
      return res.status(200).json(oneMerchant);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static updateMerchant(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      // essa recurso também é usado em outros lugares, não seria interessante criar uma função para isso?
      // como fetchIndexMerchantById(id)
      const oneMerchant = merchantArray.findIndex((el) => el.merchantId == id);
      merchantArray[oneMerchant] = body;
      return res.status(200).json(`Merchant atualizada com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static deleteMerchant(req, res) {
    const id = req.params.id;
    try {
      // poderia usar a função fetchIndexMerchantById aqui
      const oneMerchant = merchantArray.findIndex((el) => el.merchantId == id);
      merchantArray.splice(oneMerchant, 1);
      return res.status(200).json(`Merchant deletada com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // atualiza status
  // atualiza para qual status? o que o usuário tem que enviar através do corpo da requisição?
  static updateStatus(req, res) {
    const id = req.params.id;
    const { status } = req.body;
    try {
      // poderia usar a função fetchIndexMerchantById aqui também
      const oneMerchant = merchantArray.findIndex((el) => el.merchantId == id);
      merchantArray[oneMerchant].status = status;
      return res.status(200).json(`Status atualizado com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // merchants abertos
  // leitura de qualquer merchant de acordo com a rota
  static readMerchantByStatus(req, res) {
    try {
      let temp = true;
      const { status } = req.query;
      if (status === "off") {
        temp = false;
      }
      // você definiu o status com "On" e "Off", por que não ter feito o uso dos Booleans para minimizar erros?
      // aqui você poderia também criar uma função para não repetir várias vezes o mesmo código
      // como fetchMerchantsByStatus(status)
      const oneMerchant = merchantArray.filter((el) => el.status == temp);
      return res.status(200).json(oneMerchant);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // merchants abertos
  static readOnStatus(req, res) {
    try {
      let temp = true;
      const { status } = req.query;
      if (status === "off") {
        temp = false;
      }
      const oneMerchant = merchantArray.filter((el) => el.status == temp);
      console.log("oneMerchant: ", oneMerchant);
      return res.status(200).json(oneMerchant);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //merchants fechados
  static readOffStatus(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      const oneMerchant = merchantArray.findIndex((el) => el.status == "Off");
      return res.status(200).json(oneMerchant);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Enviar Mensagem
  // o merchant manda mensagem para ele mesmo?
  static sendMensagem(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      const date = Date.now();
      const newDate = new Date(date);
      const oneMerchant = merchantArray.findIndex((el) => el.merchantId == id);
      merchantArray[oneMerchant].message = `Mensagem: ${JSON.stringify(body)}. Enviada com sucesso às ${newDate}`;

      return res.status(200).json(`Mensagem enviada com sucesso`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = MerchantController;
