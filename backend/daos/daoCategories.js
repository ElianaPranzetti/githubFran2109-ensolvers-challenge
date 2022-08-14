import containerMySql from "../containers/containerMySql.js";

export default class daoCategories extends containerMySql {
    constructor(tableName, knex) {
        super(tableName, knex);
    }
}