# MongoDB

| Operation                        | Command |
|----------------------------------|---------|
Compare ObjectIds - MongoDB filter | {_id:ObjectId("5ba251401058f60008956022")} 
Compare ObjectIds - Javascript     | x._id.equals(ObjectId("5b7573df7a88af0006f0075c")
Delete a collection                | db.\<collection>.drop()
Delete all documents in collection | db.\<collection>.remove({})
Delete array element by index      | db.lists.update({}, {\$unset : {"interests.3" : 1 }}) or db.lists.update({}, {$pull : {"interests" : null}})
Delete last array element with Javascript filter | db.\<collection>.updateMany({ $where : "this.x.length === 6"}, { $pop: { x: 1 }})
Display array count                | db.\<collection>.aggregate({$project: { count: { $size: "$<arrayField>"}}})
List databases or collections      | show dbs or show collections
Load Javascript file               | load(<fileName>)
Print values                       | print() or printjson()
Show collection documents          | db.\<collection>.find()
show or use database db            | use \<dataBaseName>
Update document value              | db.\<collection>.update({"<findField>": "<findValue>"}, { $set: { "<updateField>": "<updateValue>" } })

## Atlas

Filter on an object ID: `{"_id":{"$oid":"5b9ffcbcb13706000697143d"}}`