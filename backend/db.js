const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err) return console.error(err.message)

    console.log('connection succesful');
})

// db.run("CREATE TABLE users(first_name, last_name, email, password, id)")

const insert = () =>{
    const sql = 'INSERT INTO users (first_name, last_name, email, password, id) VALUES(?,?,?,?,?)';

    db.run(sql,['alan', 'sub', 'alansub123@gmail.com', 'alansub', 'alansub'],(err)=>{
        if(err) return console.error(err.message);

        console.log('A new row has been created')
    })
}

const getData = () =>{
    const sql = 'SELECT * FROM users'

    db.all(sql, [], (err, rows)=>{
        if(err) return console.error(err.message);
    
        // rows.forEach((row)=>{
        //     console.log(row)
        // })
        console.log(rows)
    })
}

const deleteRow = () =>{
    const sql = 'DELETE FROM users WHERE first_name = alan'

    db.run(sql, (err)=>{
        if(err) return console.error(err.message)
    })

    console.log('Delete completed')
}

deleteRow();
getData();

db.close((err)=>{
    if(err) return console.error(err.message);
})