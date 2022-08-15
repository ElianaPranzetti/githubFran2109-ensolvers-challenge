import containerMySql from "../containers/containerMySql.js";

export default class daoNotesCategories extends containerMySql {
    constructor(tableName, knex) {
        super(tableName, knex);
    }
    async saveMultiple(data) {
        const { noteId, categories } = data;
        const newData = categories.map(category => {
            return{
               category_id: category.id,
                note_id: noteId 
            }
        });
        return await this.knex(this.tableName).insert(newData);
    }
    async deleteMultiple(noteId) {
        return await this.knex(this.tableName).where('note_id', noteId).del();
    }
}