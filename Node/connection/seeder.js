var execSQL = require('exec-sql');
var path = require('path');

execSQL.connect({
    'database': 'se',
    'user': 'root',
    'password': ''
});
console.log(path.join(__dirname,'/'))
execSQL.executeDirectory(path.join(__dirname,''), function(err) {
    if(err){
        console.log("Cannot Seed the data")
    }else{
    console.log('Data Seeded Succesfully');
    }
    execSQL.disconnect();
});