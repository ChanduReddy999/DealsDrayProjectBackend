const empModel = require('../models/index');

const getEmployeeDetailsService = async (req) => {
    try {  
        let result = await empModel.getEmployeeDetailsModel();

        if (!result || !result.data) {
            throw new Error('Invalid result format');
        }

        return {
            status: 200,
            message: "Successfully fetched data!",
            data: result.data
        };
    } catch (err) {
        console.error('Error fetching names:', err.message);
        return {
            status: 400,
            message: "Error occurred while fetching names.",
            data: []
        };
    }
};


const addEmployeeService = async (req) => {
    try {
        const { f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course } = req.body;
        const f_CreatedDate = new Date().toISOString().slice(0, 19)
        const f_UpdatedDate = new Date().toISOString().slice(0, 19)
        let result = await empModel.addEmployeeModel(f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_CreatedDate, f_UpdatedDate);

        return {status:200,message:"success",data:result}
    } catch (error) {
        console.error('Error in addEmployeeService:', error.message);
        return { status: 400, message: "error", data: [] };
    }
}

const editEmployeeDetailsService = async (req) => {
    try {
        const { f_Id, f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_UpdatedDate } = req.body;

        let result = await empModel.editEmployeeDetailsModel(f_Id, f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_UpdatedDate);

        return {status:200,message:"success",data:result}
    } catch (error) {
        console.error('Error in addEmployeeService:', error.message);
        return { status: 400, message: "error", data: [] };
    }
}

const getEmployeeDetailsByIdService = async (req) => {
    try {  
        const { f_Id } = req.body;
        let result = await empModel.getEmployeeDetailsByIdModel(f_Id);

        if (!result || !result.data) {
            throw new Error('Invalid result format');
        }

        return {
            status: 200,
            message: "Successfully fetched data!",
            data: result.data
        };
    } catch (err) {
        console.error('Error fetching names:', err.message);
        return {
            status: 400,
            message: "Error occurred while fetching names.",
            data: []
        };
    }
};


module.exports = {
    getEmployeeDetailsService,addEmployeeService,editEmployeeDetailsService,getEmployeeDetailsByIdService
};
