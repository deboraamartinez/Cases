const { Router } = require("express");
const MerchantController = require("../controllers/MerchantController");

const router = Router();

router.post("/merchant", MerchantController.createMerchant);
router.get("/merchant", MerchantController.readAllMerchants);
router.get("/merchant/:id", MerchantController.readOneMerchant);
router.put("/merchant/:id", MerchantController.updateMerchant);
router.delete("/merchant/:id", MerchantController.deleteMerchant);

// Status
/* 
  Como convessão de boas práticas adote o padrão REST/REST Full para criar suas rotas
  veja mais em https://github.com/WhiteHouse/api-standards#pragmatic-rest
  exemplo para as rotas abaixo
  PUT /merchant/:id/status
  GET /merchant/:id/status/on ou GET /merchant/:id/status?status=on GET /merchant/:id/status?status=off
  GET /merchant/:id/status/off
*/
router.put("/merchantStatus/:id", MerchantController.updateStatus);
router.get("/merchant/:id/status/on", MerchantController.readMerchantByStatus);
router.get("/merchant/:id/status/off", MerchantController.readMerchantByStatus);

//mensagem
// mesma coisa aqui
// /merchant/:id/message
router.put("/merchantMessage/:id", MerchantController.sendMensagem);

module.exports = router;
