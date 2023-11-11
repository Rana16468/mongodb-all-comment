{
    /*
    
    # MongoDB  installation process and also install compass and No SQL Booster which is the UI Interface .

1. video exist in programming hero next level web development module 4
2. second video in how to install mongo DB, mongo DB shell and No SQL Booster which is the GUI UI data representation0

## ****5-2 insert,insertOne, find, findOne, field filtering, project****

- [ ]  db.test.insertMany([{name:'complete web development'},{name:'Next Level Web Development'}]);    insert many data at a time .
- [ ]  db.test.find({}); find all data commands
- [ ]  db.test.find({age:17}); find specific data with using  https://github.com/Apollo-Level2-Web-Dev/mongodb-practice/blob/main/practice-data.json
- [ ]  db.test.find({company:'Demimbu'});
- [ ]  db.test.find({gender:"Male"})
- [ ]  db.test.find({gender:"Male"},{name:1,email:1,address:1});  // specific user needed data gathering process .  // field filtering process
- [ ]  db.test.find({gender:"Female"}).project({name:1,email:1,address:1}); find filtering process

# ****5-3 $eq, $neq, $gt, $lt, $gte, $lte****

- [ ]  https://www.mongodb.com/docs/manual/reference/operator/query/eq/#mongodb-query-op.-eq
- [ ]  db.test.find( {gender: { $eq:'Male' }}); // equal operator
- [ ]  db.test.find( {age: { $ne:12 }}); // not equal operator
- [ ]  db.test.find({age:{$gt:30}}); // gather then operator
- [ ]  db.test.find({age:{$gte:30}}).sort({ age:1 }); gather then and equal with sorting —→ ascending order;
- [ ]  db.test.find({age:{$lte:30}}).sort({ age:1 }); less  then and equal with sorting —→ ascending order;
- [ ]  

## ****5-4 $in, $nin, implicit and condition****

- [ ]  db.test.find({age:{$lt:18}}).sort({ age:1 });
- [ ]  db.test.find({age:{$gt:18,$lt:30}},{age:1}).sort({ age:1 }); // less then 18 to gather then 30 with only need age data also ascending order sorting .
- [ ]  db.test.find({gender:{$eq:'Female'},age:{$gt:18,$lt:30}},{age:1,gender:1}).sort({ age:1 }); //implicate And condition
- [ ]  db.test.find({gender:{$eq:'Female'},age:{$in:[18,24,28,36]}},{age:1,gender:1}).sort({ age:1 }); //implicate And condition  // in operator working with like or condition if any thing match this operator will be return the document ;
- [ ]  db.test.find({gender:{$eq:'Female'},age:{$nin:[18,24,28,36]}},{age:1,gender:1}).sort({ age:1 }); // nin not equal operator
- [ ]  db.test.find(
{
gender:{$eq:'Female'},
age:{$nin:[18,24,28,36]},
interests:'Cooking'

```
},{age:1,gender:1,interests:1}).sort({ age:1 });

```

//implicit And

- [ ]  

db.test.find(
{
gender:{$eq:'Female'},
age:{$nin:[18,24,28,36]},
interests:{$in:['Cooking','Gaming']}

```
},{age:1,gender:1,interests:1}).sort({ age:1 });

```

//implicit And

## **5-5 $and, $or, implicit vs explicit**

- // db.test.find({age:{$ne:26,$lte:30}}).projection({age:1})
db.test.find({$and:[
{age:{$ne:26}},
{age:{$lte:30}},

```
]},{age:1}); // and opertaor 

```

- [ ]  

db.test.find({$and:[
{age:{$ne:26}},
{age:{$lte:30}},
{gender:'Female'}

```
]},{age:1,gender:1}).sort({ age:1});  //and opertaor

```

- [ ]  

db.test.find({
$or:[
{interests:'Gardening'},
{interests:'Travelling'}
]
})
.projection({interests:1});

- [ ]  Array of Object handeling in mongodb

db.test.find({
$or:[
{"[skills.name](http://skills.name/)":"JAVASCRIPT"},
{"[skills.name](http://skills.name/)":"JAVA"}

```
]

```

})
.projection({ skills:1})

- [ ]  db.test.find({
"[skills.name](http://skills.name/)":{$in:['JAVASCRIPT','PYTHON']}
})
.projection({ skills:1})
- [ ]  db.test.find({
$or:[
{'[skills.name](http://skills.name/)':'JAVASCRIPT'},
{'[skills.name](http://skills.name/)':'PYTHON'},
]
})
.projection({ skills:1})

# ****5-6 $exists, $type,$size****

db.test.find({
phone:{$exists:true}
}) // exists property in mongodb

Type : 

Type operator 

db.test.find({age:{$type: 'number'}});

SIZE Operator 

db.test.find({friends:{$size: 4}})
.projection({friends:1});

NULL Operator 

db.test.find({company:{$type: "null"}})
.projection({company:1});

# ****5-7 $all , $elemMatch****

1. db.test.find({'interests.2' :'Cooking'}).project({interests:1});  // indexing data searching process 

//I have to search second index all data for interests.

1. db.test.find({interests:{$all:["Travelling", "Reading", "Cooking"]}}); 

  if(ravelling" && "Reading", && "Cooking){} it is working like and operator 

all operator working like && operator

1. db.test.find({skills:{$elemMatch: {name:'JAVASCRIPT',level:'Intermidiate'}}}).project({skills:1}); elemMatch : **There is no problem of position, just match(পজিশনের কোন সমস্যা নাই শুধু ম্যাচ করলেই হবে)  এক্ষেত্রে আমরা সবসময় ম্যাচ এলিমেন্ট ইউজ করতে পারি**

# ****5-8 $set, $addToSet, $push****

1.https://www.mongodb.com/docs/manual/reference/operator/update/set/

1. //update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{$set:{

```
age:'55'

```

}}); have a problem the $set operator can not be update array, object or array of object type data;

3.https://www.mongodb.com/docs/manual/reference/operator/update-array/

new data added property  $addToSet duplicate value can not be accept easily identify the data redundancy 

//update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{$addToSet:{
interests:'Writting'
}});

1. https://www.mongodb.com/docs/manual/reference/operator/update/addToSet/

$each operator —> মাল্টিপল এরে অথবা অবজেক্ট একসাথে আপডেট করতে চাইলে আমরা each operator use . 

db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{$addToSet:{
interests:{$each: ['sohel','rana','ali']}

}});  this operator duplicate value can not be accept easily identify the data redundancy 

5.

//update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{$push:{
interests:{$each: ['sohel']}

}});  

$push operator   working  with duplicate value

# ****5-9 $unset, $pop, $pull, $pullAll****

https://www.mongodb.com/docs/manual/reference/operator/update/unset

1. specific  documentation data deleting process 

//update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{
$unset:{birthday:""}
});

1. https://www.mongodb.com/docs/manual/reference/operator/update/pop/

//update document last index
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{
$pop: {interests:1}
});

//update document first index 
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{
$pop: {interests:-1}
});

1. https://www.mongodb.com/docs/manual/reference/operator/update/pull/

//update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{
$pull: {interests:'Writting'}
});

1. https://www.mongodb.com/docs/manual/reference/operator/update/pullAll/

//update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{
$pullAll: {interests:["sohel","rana"]}
});

# ****5-10 More about $set, how to explore documentation****

1. update object data  use $set operator 

//update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{
$set:{"address.city":'Dhaka'}
});

1. Multiple object Updating process 

//update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{
$set:{"address.city":'Dhaka',
"address.country":'Bangladesh',
"address.postalCode":"00017852"
}
});

1. Update array of object property 

https://www.mongodb.com/docs/manual/reference/operator/update/positional/

//update document
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065"),"education.major":"Art"},{
$set:{
"education.$.major":"Mathematices"
}
});

1. Increment data : https://www.mongodb.com/docs/manual/reference/operator/update/inc/

//update document
//{ $inc: { quantity: -2, "metrics.orders": 1 } }
db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},{
$inc:  {
age: 1
}
});

# ****5-11 delete documents, drop collection and how to explore by yourself****

https://www.w3schools.com/mongodb/mongodb_mongosh_create_collection.php

create  collection process : db.createCollection("posts")

https://www.mongodb.com/docs/manual/reference/method/db.collection.drop/

drop collection

## Precise Modules

1.problem file url : https://docs.google.com/document/d/1VBpfx8k1ZFck21A2fkXfwZD0sOww998bixeHcqNEa8Q/edit

1. solution of problem no 1 is 

//pretices module
db.test.find({age:{$gt:30}}).project({name:1,email:1});

1. solution of problem no 2 is 

db.test.find({$or: [
{favoutiteColor:"Maroon"},
{favoutiteColor:"Blue"}
]}).project({name:1,email:1, phone:1,favoutiteColor:1}); //solution type 1

db.test.find({favoutiteColor:{$in:[ "Blue" ,"Maroon"]}}).project({
name:1,email:1, phone:1,favoutiteColor:1
}); // solution no 2

// solution 1 and solution 2 both are return same  result;

4 . solution of problem no  3 is

db.test.find({skills:{$exists: true,$size: 0}});

1. solution of problem on 4 is 

db.test.find({$and: [
{'[skills.name](http://skills.name/)':'JAVASCRIPT'},
{'[skills.name](http://skills.name/)':'JAVA'}
]}).project({name:1,skills:1});

//Alternative solution  same problems 

db.test.find({skills:{$all: [
{"$elemMatch":{name:'JAVASCRIPT'}},
{"$elemMatch":{name:'JAVA'}}

]}}).project({name:1,skills:1});

both solution are return same result;

1. solution  no 5  // all time push duplicate value can not  checked data redundancy

db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},
//{"name": "Python", "level": "Beginner", "isLearning": true}
{$push:{
skills:{$each: [{name:'Python',level:'Beginner',isLearning:true}]}
}}

//Alternative solution  same problems —→ data duplicate data redundancy checked

db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},
//{"name": "Python", "level": "Beginner", "isLearning": true}
{$addToSet:{
skills:{$each: [{name:'Python',level:'Beginner',isLearning:true}]}
}}
)

1. solution no 6

db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},
//{"name": "Python", "level": "Beginner", "isLearning": true}
{$addToSet:{
languages:{$each: ["Spanish" ]}
}}
) ;

//Alternative solution  same problems —→ data duplicate data redundancy checked

db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000065")},
//{"name": "Python", "level": "Beginner", "isLearning": true}
{$push:{
languages:{$each: ["Spanish" ]}
}}
) ;

7.solution No: 7

db.test.updateOne({_id:ObjectId("6406ad63fc13ae5a40000066")},
//{"name": "Python", "level": "Beginner", "isLearning": true}
{$pull: {
skills:{name:{$in:['KOTLIN']}}

```
}}

```

) ;
    
    */
}