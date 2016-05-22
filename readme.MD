Запуск mongodb:


create in root

mkdir data
cd data
mkdir db

cd ~

cd mongo
cd bin

nazar@nazar-Ideapad-Z570:~/mongo/bin$ mongod --dbpath ../../data/db/

mongo

show dbs   => показує базу даних

> show dbs
local	0.078125GB
> use contactlist
switched to db contactlist
> db.contactlist.insert({name: 'Tom', email: 'tom@email.com', number: '(444) 444-4444'})
> db.contactlist.find()
{ "_id" : ObjectId("5740959e8c8dfde0cee6c019"), "name" : "Tom", "email" : "tom@email.com", "number" : "(444) 444-4444" }
> db.contactlist.find().pretty()
{
	"_id" : ObjectId("5740959e8c8dfde0cee6c019"),
	"name" : "Tom",
	"email" : "tom@email.com",
	"number" : "(444) 444-4444"
}


https://www.youtube.com/watch?v=kHV7gOHvNdk&index=1&list=PLX2HoWE32I8Nkzw2TqcifObuhgJZz8a0U
