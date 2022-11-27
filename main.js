const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const cheerio = require("cheerio");
request(url,cb);
function cb(err,request,html){
    if(err){
        console.log(err);
    }
    else{
        // console.log(html);
        extractLink(html);
    }
}

function extractLink(html){
    let $ = cheerio.load(html);
    let anchorElem = $(".ds-border-t.ds-border-line.ds-text-center.ds-py-2");
    // console.log(anchorElem);
    let link = anchorElem.find('a').attr("href");
    let fullLink = "https://www.espncricinfo.com"+link;
    getAllMatchesLink(fullLink);
}

function getAllMatchesLink(url){
    request(url,function(err,response,html){
        if(err){
            console.log(err);
        }else{
            extractAllLinks(html);
        }
    })
}

function extractAllLinks(html)
{
    let $ = cheerio.load(html);
    let scorecardElems = $(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent");
    for(let i=0;i<scorecardElems.length;i++){
        let link = $(scorecardElems[i]).find('a').attr("href");
        let fullLink = "https://www.espncricinfo.com"+link;
        console.log(fullLin);
    }
}