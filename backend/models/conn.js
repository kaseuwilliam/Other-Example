const {Sequelize} = require("sequelize")

// Connect to database
const connectToDB = new Sequelize("pets_and_people", "pets_and_people_user", "Y97DazIx9rGEFkHD3nLDvFpVqsnzNJX1", {
    host:"dpg-ck2cdd703lhc73ag1v50-a.oregon-postgres.render.com",
    dialect:"postgres",
    dialectOptions: { //Need to add this as connecting to the database
        ssl: true
    }
})

async function testConnection(){

    try{

        await connectToDB.authenticate()
        console.log("You have successfully connected to the database")
        return true

    } catch (error){

        console.error("This is the Database connection error: ", error)
        return false
    }
}

testConnection()

module.exports = {connectToDB, testConnection}
