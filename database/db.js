const { MongoClient } = require('mongodb')

const uri = "mongodb+srv://rajmongo:rajmongo@cluster0.2yskbyq.mongodb.net/?retryWrites=true&w=majority";
var myClient =  new MongoClient(uri)
async function main() {
    try {
        await myClient.connect()
        console.log("database connected successfully")
    } catch (e) {
        console.log("Oops!!! something went wrong... try again to connect the database");
        console.error(e)
    } 
    // finally {
    //     await client.close()
    // }
}



async function showingAllTheDatabases(client) {
    const dbs = await client.db().admin().listDatabases();
    dbs.databases.forEach(db => {
        console.log(`- ${db.name}`)
    });
}


async function readDataFromDatabase(Client) {
    const dbData = await Client.db('logingAndRegisterSystem').collection('userDetails').find({}).toArray()
    if(dbData.length > 0){
        return dbData
    }else{
        console.log("Oops!! there is nothing to show here..")
    }
}

async function insertDataInDatabase(client, data){
    const insertQuery = await client.db('logingAndRegisterSystem').collection('userDetails').insertOne(data);
    if(insertQuery){
        console.log(`${insertQuery}: inserted successfully...`);
    }else{
        console.log(`Oops!! i'm facing problem to insert the data, check your code or try again...`)
    }
}

// main()


const exportContent = {
    readDataFromDatabase,
    main,
    myClient,
    insertDataInDatabase
}


module.exports = exportContent;