const puppeteer = require("puppeteer");

const URL = "https://tickets.cinemafocus.be/nl/movies";


exports.getAllMovies = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL, {waitUntil: "domcontentloaded"});
    const movies =  await page.evaluate(() => {
        const HOST = "https://tickets.cinemafocus.be";
        const movies = Array.from(document.querySelectorAll("div.col-6.col-md-4.col-lg-3"));
        const results = [];
        movies.forEach(movie => {
            const items = Array.from(movie.querySelectorAll("div"));
            const begin = items[0].innerHTML.indexOf("(");
            const end = items[0].innerHTML.indexOf(")");
            const id = items[0].querySelector("a").href.split("/")[6];
            const img = HOST + items[0].innerHTML.slice(begin+1,end).slice(6,items[0].innerHTML.slice(begin+1,end).length - 6);
            const name = items[2].querySelector("h5").innerText;
            const info = {
                "id": id,
                "img": img,
                "name": name
            }
            results.push(info);
        })
        return results;
    });
    await browser.close();
    return movies;
}

exports.getMovieDetails = async(id) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${URL}/view/${id}`, {waitUntil: "domcontentloaded"});
    const movieDetails =  await page.evaluate(() => {
        const HOST = "https://tickets.cinemafocus.be";
        const title = document.querySelector("div.col-lg-8 > div.movie-view > h1").innerText;
        const description = document.querySelector("#collapseDescription").innerText;
        const img = document.querySelector("div.poster-container");
        const info = Array.from(document.querySelectorAll("div.info-container.d-flex.flex-column > ul > li")).map(x => x.querySelector("span").innerText);
        const begin = img.innerHTML.indexOf("(");
        const end = img.innerHTML.indexOf(")");
        const trailer_url = document.querySelector("div.info-container.d-flex.flex-column > div > div > a").href;
        const img_url = HOST + img.innerHTML.slice(begin+1,end).slice(6,img.innerHTML.slice(begin+1,end).length - 6);
        const info_tickets =   Array.from(document.querySelectorAll("ul.tickets-list.d-sm-table.list-unstyled > li"))
                                    .map(x => {
                                      return {
                                        "dag" : Array.from(x.querySelectorAll("span"))[0].innerText.split("\n")[0],
                                        "datum" : Array.from(x.querySelectorAll("span"))[0].innerText.split("\n")[1],
                                        "uur" : Array.from(x.querySelectorAll("span"))[1].innerText
                                      }
                                    });
        const details = {
            "title": title,
            "regisseur": info[0],
            "hoofdrollen": info[1].split(","),
            "land": info[2],
            "release_datum": info[3],
            "duur": info[4],
            "description": description,
            "img": img_url,
            "trailer_url": trailer_url,
            "vertoningen": info_tickets
        }
        return details;
    });
    await browser.close();
    return movieDetails;
}
