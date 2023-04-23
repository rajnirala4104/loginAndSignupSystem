const { MongoClient } = require('mongodb')

const uri = "mongodb+srv://rajmongo:rajmongo@cluster0.2yskbyq.mongodb.net/?retryWrites=true&w=majority";
const myClient =  new MongoClient(uri)
async function main(){
    try{
        await myClient.connect()
        console.log(`database connect successfully`)
    }catch(e){
        console.log("Oops!! I'm facing porblem to connect the database", e)
    }
    // finally{
    //     await myClient.close()
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

// main()


const exportContent = {
    readDataFromDatabase,
    main,
    myClient
}


module.exports = exportContent;