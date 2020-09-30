const fs = require('fs')

exports.createfolder = 'et'
exports.createfolder = writeCODE

function writeCODE(){
    
    const foldername = process.argv[2]
    if (!fs.existsSync(`${process.cwd()}\\${foldername}`)){
        fs.mkdirSync(`${process.cwd()}\\${foldername}` )
    }
    fs.writeFileSync(`${process.cwd()}\\${foldername}\\urls.js`, "COOJH")
    fs.writeFileSync(`${process.cwd()}\\${foldername}\\db.sqllite3`, "COOJH")
}

writeCODE()