use('demoDB')
db.createCollection('employees')
//CRUD OPS:
//CREATE
//inserting one record
db.employees.insertOne([{
    name:'Rahul Dhawan',
    age:22,
    department:'IT',
    salary:22000
}])
//for inserting the multiple records:
db.employees.insertMany([
    {
        "name": "Sara Johnson",
        "age": 28,
        "department": "Marketing",
        "salary": 30000
    },
    {
        "name": "Alex Rodriguez",
        "age": 35,
        "department": "Finance",
        "salary": 45000
    },
    {
        "name": "Emily Smith",
        "age": 26,
        "department": "Human Resources",
        "salary": 38000
    },
    {
        "name": "Michael Chen",
        "age": 30,
        "department": "Operations",
        "salary": 42000
    },
    {
        "name": "Priya Patel",
        "age": 24,
        "department": "Customer Service",
        "salary": 32000
    },
    {
        "name": "David Brown",
        "age": 29,
        "department": "Sales",
        "salary": 35000
    },
    {
        "name": "Amanda Thompson",
        "age": 31,
        "department": "Research and Development",
        "salary": 40000
    }
]
)
//READ
// let temp=db.employees.find({salary>25000})//wrong
let temp = db.employees.find({ salary: { $gt: 25000 } });
// console.log(temp);
// console.log(temp.count);
// console.log(temp.toArray());
//UPDATE:
// updateOne(filter, update, options, callback){Promise}
// db.employees.updateOne()//for first one
db.employees.updateMany({ salary: 35000 }, { $set: { salary: 220000 } });
//DELETE
db.employees.deleteMany({salary : 220000})


