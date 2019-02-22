let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axios.get('https://dev.to/aurelkurtula')
    .then((response) => {
        if(response.status === 200) {
        const html = response.data;
            const $ = cheerio.load(html);
            let devtolist = [];
            $('.single-article').each(function(i, elem){
                devtolist[i] = {
                    title: $(this).find('h3').text().trim(),
                    url: $(this).children('.index-article-link').attr('href'),
                    tags: $(this).find('.tags').text().split('#')
                        .map(tag=>tag.trim())
                        .filter(function(n) { return n != '' })
                }
            })

            console.log(devtolist);

    }
    }, (error) => console.log(err) );
