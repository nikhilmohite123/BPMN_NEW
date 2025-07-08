const loginquery = (req) => {
    const { username } = req.body;
    
    return {
        query: "SELECT * FROM tbl_employee WHERE s_emp_name = ?",
        arr: [username]
    };
};

export { loginquery };
