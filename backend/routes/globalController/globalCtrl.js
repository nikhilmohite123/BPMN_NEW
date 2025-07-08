import { executeArrSelect } from "../../utils/dbqueryexecute.js";
import { speakupquery } from "./globalSqlc.js";
import connection from '../../config/config.js'

const con = connection;

const speakup = (req, res) => {
    executeArrSelect(speakupquery(req, res), con).then(data => {
        res.status(200).json(data)
    })
        .catch(err => {
            console.log('Json Error : ', err);
        })
}

export { speakup }
