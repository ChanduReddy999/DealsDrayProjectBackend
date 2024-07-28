const empService = require("../services/index")
const { callServices } = require('./callServices')

const getEmployeeDetailsController = async(req,res)=>{
    callServices(empService.getEmployeeDetailsService,req,res)
}

const addEmployeeController = async(req,res)=>{
    callServices(empService.addEmployeeService,req,res)
}

const editEmployeeDetailsController = async(req,res)=>{
    callServices(empService.editEmployeeDetailsService,req,res)
}

const getEmployeeDetailsByIdController = async(req,res)=>{
    callServices(empService.getEmployeeDetailsByIdService,req,res)
}

module.exports = {
    getEmployeeDetailsController,addEmployeeController,editEmployeeDetailsController, getEmployeeDetailsByIdController
}