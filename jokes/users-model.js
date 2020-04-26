const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    removeById

}

function find() {
   return db('users').select("id", "username", "password")
}
function findBy(entry) {
    return db('users').where(entry)
}
function findById(id) {
    return db('users').where({ id }).first()

}
function add(user) {
    return db('users').insert(user, "id").then(([id]) => {
        return findById(id)
    })

}

function removeById(id) {
    return db("users").where({ id }).del()
}