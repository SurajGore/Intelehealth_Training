var mongoinstance = require('mongodb');
var MongoClient = mongoinstance.MongoClient;
var url = 'mongodb://127.0.0.1:27017/db_mar22';
// var url = 'mongodb://yourname:bitcode@localhost/db_mar22';
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    function (err, client) {
        //if(err) throw err;
        if (err) {
            throw err;
        }
        // var emps = [
        //     {
        //         "emp_id": 201,
        //         "emp_name": "bitcodenew",
        //         "emp_loc": "mumbai"
        //     },
        //     {
        //         "emp_id": 202,
        //         "emp_name": "prachi",
        //         "emp_loc": "nagpur"
        //     },
        // ];
        //  client.db().collection("emp").insertMany(emps);

        // client.db().collection("emp").insertOne(
        //     {
        //         "emp_id":200,
        //         "emp_name":"bitcode",
        //         "emp_loc":"pune"
        //     }
        // )


        // client.db().collection("emp").updateOne({"emp_id":201},
        // { $set: {"emp_name":"updatagain", "emp_loc":"updatagain"}},{upsert:true},
        // function (err, res) {
        //     var cursor = client.db().collection("emp").find();
        // cursor.forEach(function (doc) {
        //         console.log(doc);
        // });
        

        client.db().collection("emp").deleteOne({"emp_id":200},
        function (err, res){
            var cursor = client.db().collection("emp").find();
            cursor.forEach(function (doc) {
                console.log(doc);
        });

        console.log("Connected");

        //client.db().dropCollection("customers")
        //var cursor = client.db().collection("emp").find();
        //var cursor = client.db().collection("emp").find({"emp_id":110});
        
                //console.log(doc._id);
                //console.log(doc["emp_loc"]);
            }
        )
        // client.close();
    });