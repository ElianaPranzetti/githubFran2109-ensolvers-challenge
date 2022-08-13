import containerMySql from "../containers/containerMySql.js";

export default class daoNotes extends containerMySql {
    constructor(tableName, knex) {
        super(tableName, knex);
    }
}