const express = require('express')
const empController =require('../controllers/index')
router  = express.Router()


router.get('/getemployeedetails',empController.getEmployeeDetailsController);
router.post('/addemployee',empController.addEmployeeController);
router.put('/editemployeedetails',empController.editEmployeeDetailsController);
router.post('/getemployeedetailsbyid',empController.getEmployeeDetailsByIdController);


module.exports =router