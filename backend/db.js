const { resolve } = require('path');

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err) return console.error(err.message)

    console.log('connection succesful');
})

// db.run("CREATE TABLE users(first_name, last_name, email, password, id)")

const insert = (first_name, last_name, email, password, id) =>{
    const sql = 'INSERT INTO users (first_name, last_name, email, password, id) VALUES(?,?,?,?,?)';

    db.run(sql,[first_name, last_name, email, password, id],(err)=>{
        if(err) return console.error(err.message);

        console.log('A new row has been created')
    })
}

async function getData(){
    const sql = 'SELECT * FROM users'

    // return new Promise((resolve, reject)=>{
    //     db.all(sql, [], (err, rows)=>{
    //         if(err) return console.error(err.message);
        
    //         // rows.forEach((row)=>{
    //         //     console.log(row)
    //         // })

    //         if(err) reject(err)

    //         resolve(rows)
            
    //     })
    // })

        await  new Promise ((resolve, reject)=>{
            db.all(sql,[],(err, rows)=>{

            if(err) reject(err)

            resolve(rows)
        })
        })

}

const deleteRow = (id) =>{
    const sql = `DELETE FROM users WHERE id = `+id

    db.run(sql, (err)=>{
        if(err) return console.error(err.message)
    })

    console.log('Delete completed')
}

//insert('ram', 'limbu', 'ramlim123@gmail.com', 'ramlim', '2')
// let promise = getData()
// .then(results=>{
//     console.log(results)
// })

console.log(getData)


db.close((err)=>{
    if(err) return console.error(err.message);
})
