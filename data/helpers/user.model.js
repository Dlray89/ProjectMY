const UsersDB = require("../dbConfig")

module.exports = {
    find,
    findBy,
    findById,
    add,
}

function find(){
return UsersDB("users")
.select("id", "username")
}

function findBy(filter){
    return UsersDB("users")
    .where(filter)
}

function findById(id){
    return UsersDB("users")
    .where({ id })
    .first()
    
}

async function add(user){
    const [id] = await UsersDB("users")
    .insert(user, "id")

    return findById(id)
}