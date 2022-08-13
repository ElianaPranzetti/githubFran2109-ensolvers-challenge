export default class containerMySql {
    constructor(tableName, knex) {
        this.tableName = tableName;
        this.knex = knex;
    }
    async save(data) {
        return await this.knex(this.tableName).insert(data);
    }
}