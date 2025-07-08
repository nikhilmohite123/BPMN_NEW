const executeSelect = (query, con) => {
    return new Promise((resolve, reject) => {
        con.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
};

const executeObjSelect = (obj, con) => {
    return new Promise((resolve, reject) => {
        con.query(obj.query, obj.arr, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

const executeArrSelect = (obj, con) => {
    return new Promise((resolve, reject) => {
        con.query(obj.query, obj.arr, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};


export { executeSelect, executeObjSelect, executeArrSelect };