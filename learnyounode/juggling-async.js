const http = require('http')
const bl = require('bl')


var results = []
var count = 0

var urlsArray = process.argv.slice(2);
var noOfUrls = urlsArray.length;
function printResults () {
    for (var i = 0; i < noOfUrls; i++) {
    console.log(results[i])
    }
}

function httpGet (index) {
        http.get(urlsArray[index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
        results[index] = data.toString()
        count++
        if (count === noOfUrls) {
        printResults()
        }
        }))
        })
        }

    for (var i = 0; i < noOfUrls; i++) {
            httpGet(i)
            }










// let url1 = process.argv[2]
// let url2 = process.argv[3]
// let url3 = process.argv[4]

// let list = [url1, url2, url3]

// for (let  i = 0; i < 3; i++) {
//     let url = list[i]

//     http.get(url, function (response) {
//         let aRay = []

//         response.pipe(bl(function(err, data) {
//             if (err) {
//                 return console.error(err) 
                
//             }
//             data = data.toString()
//             aRay.push(data)
//                 if (aRay.length == 3)
//                 {aRay.forEach (function (item) {console.log(item)})}
            
        
//         }))
//     })
// }





        
        // response.setEncoding("utf-8")
        // let concat = ''
        // response.on('data', (snip => {
            // console.log(snip)
            // count += snip.length
        //     concat += snip
        // }))
        // response.on('end', () => {
            // console.log(count)
//             console.log(concat)
//         })
//     }))
// }
    
    
    
    

// console.log(url1, url2, url3)

