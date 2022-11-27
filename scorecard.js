const url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");

request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        extractMatchDetails(html);
    }
}

function extractMatchDetails(html){
    let $ = cheerio.load(html);
    // date venue
    let descElem = $(".ds-text-tight-xs.ds-truncate.ds-text-ui-typo-mid.ds-mb-1")
    // result
    let result = $(".ds-text-tight-s.ds-font-regular.ds-truncate.ds-text-typo-title")
    console.log(descElem.text());
    // console.log(result.find('span').contents().text());
}

// module.exports = extractMatchDetails;