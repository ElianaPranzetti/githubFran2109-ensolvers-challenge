import containerMySql from "../containers/containerMySql.js";

export default class daoNotesCategories extends containerMySql {
    constructor(tableName, knex) {
        super(tableName, knex);
    }
}