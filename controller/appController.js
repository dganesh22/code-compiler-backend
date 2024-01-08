const {StatusCodes} = require('http-status-codes')
const { generateFile } = require('../generateFile')
const { executeCpp } = require('../executeCpp')

// index controller
const index = async (req,res) => {
    try {
        res.json({ msg: 'index'})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

// run controller
const run = async (req,res) => {
    try {
        const { language = "java", code } = req.body 

        if(!code) 
            return res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: `empty code body`})

        //need to generate a c++ file with content from the request
        const filepath = await generateFile(language, code)
         const output = await executeCpp(filepath)

        res.json({ filepath, output })  
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err })
    }
}

module.exports = { index, run }