const { reporters } = require("mocha");

module.exports={
    // ui:'tdd',
    ui:'bdd',
    'watch-files':['test/**/*.js'],
    timeout:2000,
    slow:150,
    reporter:'spec',
    retries:1,

}