// valid-text.js

const validText = str => {
    //I have little idea of how this works.  I am going to place a console.log for more understanding
    console.log(str)
    return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;