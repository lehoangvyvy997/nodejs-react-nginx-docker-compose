use TestDB
db.auth( "root", 1 )

db.createUser({
    user: 'testUser',
    pwd: 1,
    roles: [
        { role: 'readWrite', db:'TestDB'}
    ]
})