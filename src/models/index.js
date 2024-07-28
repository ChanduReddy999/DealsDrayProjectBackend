const { executeQuery } = require('../../database/index')

const getEmployeeDetailsModel = async () => {
    try {
        const q = 'CALL sp_get_employee_details()';
        const results = await executeQuery(q);

        const data = results[0];

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('No data found');
        }

        return {
            status: 200,
            message: "Successfully fetched data!",
            data: data
        };
    } catch (error) {
        console.error('Error in function:', error.message);  
        throw new Error(`function error: ${error.message}`);
    }
};


const addEmployeeModel = async(f_Image,f_Name,f_Email,f_Mobile,f_Designation,f_Gender,f_Course,f_CreatedDate,f_UpdatedDate)=>{
    try {
        const q = `call sp_add_emp('${f_Image}','${f_Name}','${f_Email}',${f_Mobile},'${f_Designation}','${f_Gender}','${f_Course}','${f_CreatedDate}','${f_UpdatedDate}')`
        const results = await executeQuery(q);
        return {status : 200, message: "success", data:[]}
    } catch (error) {
        console.log(error);
        return {status:300, message:"error from query", data:[]}
    }
}


const editEmployeeDetailsModel = async(f_Id,f_Image,f_Name,f_Email,f_Mobile,f_Designation,f_Gender,f_Course,f_UpdatedDate)=>{
    try {
        const q = `call sp_update_emp_details(${f_Id},'${f_Image}','${f_Name}','${f_Email}',${f_Mobile},'${f_Designation}','${f_Gender}','${f_Course}','${f_UpdatedDate}')`
        const results = await executeQuery(q);
        return {status : 200, message: "success", data:[]}
    } catch (error) {
        console.log(error);
        return {status:300, message:"error from query", data:[]}
    }
}

const getEmployeeDetailsByIdModel = async (f_Id) => {
    try {
        const q = `CALL sp_get_employee_details_by_id(${f_Id})`;
        const results = await executeQuery(q);
        const data = results[0];

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('No data found');
        }
        return {
            status: 200,
            message: "Successfully fetched data!",
            data: data
        };
    } catch (error) {
        console.error('Error in function:', error.message);  
        throw new Error(`function error: ${error.message}`);
    }
};


module.exports = {
    getEmployeeDetailsModel,addEmployeeModel,editEmployeeDetailsModel,getEmployeeDetailsByIdModel
};
