const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')

const outputPath = path.join(__dirname, 'outputs')

if(!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true })
}

const executeCpp = async (filepath) => {
        // to get stored file name to execute
    // const jobId = path.basename(filepath).split('.')[0]
    const jobId = path.basename(filepath)
    const fileName = jobId.split(".")[0]

        // generate the .out file of cpp program to execute through shell command
    const outPath = path.join(outputPath, `${fileName}.exe`)
    // return outPath

    return new Promise((resolve, reject) => {
        exec(`g++ ${filepath} -o ${outPath} && cd ${outputPath} && ${fileName}.exe`, (err, stdout,stderr) => {
            // err => normal error
            // stdout => standard output
            // stderr => statndrd error at the time of compile
            // if(err) {
            //     reject({ err, stderr })
            // }
            // if(stderr) {
            //     reject({ stderr })
            // }
            // resolve(stdout)
            err && reject({ err, stderr })
            stderr && reject({ stderr })
            resolve(stdout)
        })
    })
}

module.exports = { executeCpp }