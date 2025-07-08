import { executeObjSelect, executeSelect } from "../../utils/dbqueryexecute.js";
import { loginquery } from "./loginSqlc.js"
import connection from '../../config/config.js'

const con = connection;

const login = (req, res) => {
    executeObjSelect(loginquery(req, res), con).then(data => {
        res.status(200).json(data)
    })
        .catch(err => {
            console.log('Json Error : ', err);
        })
}

export { login }
