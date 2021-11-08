const Movie = require("./movie");

const movie1 = new Movie({
    titel: 'DRUNK',
    regisseur: 'Thomas Vinterberg',
    hoofdrollen: ['Mads Mikkelsen', 'Thomas Bo Larsen'],
    release_datum: '9 juni 2021',
    land: 'Denemarken',
    duur: '1u57',
    description: 'Vier vrienden, allemaal leraren op dezelfde middelbare school, testen een theorie uit die beweert dat ze hun leven kunnen verbeteren door een constant alcoholpromille in hun bloed te handhaven. Als Churchill op een ontbijt van whisky een wereldoorlog kan winnen...',
    img_url: 'https://tickets.cinemafocus.be/storage/e/3/poster/3674/md.jpg?1634570545',
    trailer_url: 'https://cdn-videos.cinenews.be/Movies/20581/videos/trailers/compresed/987/MP4/video.mp4',
    vertoningen: [
        {
            datum: getLocalDateString(new Date(Date.now())).split(" ").slice(1).join(" "),
            dag: getLocalDateString(new Date(Date.now())).split(" ")[0],
            uur: "20:00",
            zaal: "1"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ")[0],
            uur: "20:00",
            zaal: "1"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ")[0],
            uur: "20:00",
            zaal: "1"
        },
    ]
});

const movie2 = new Movie({
    titel: 'ETERNALS',
    regisseur: 'Chloé Zhao',
    hoofdrollen: ['Angelina Jolie', 'Salma Hayek', 'Richard Madden'],
    land: 'Verenigde Staten',
    release_datum: '3 november 2021',
    duur: '2u35',
    description: 'Met Eternals verwelkomt Marvel Studios een opwindend nieuw team van superhelden in het Marvel Cinematic Universe. Het epische verhaal, dat duizenden jaren beslaat, gaat over een groep onsterfelijke helden die uit de schaduw worden gedwongen om zich te herenigen tegen de oudste vijand van de mensheid, de Deviants. De uitstekende cast bestaat uit Richard Madden als de almachtige Ikaris, Gemma Chan als de menslievende Sersi, Kumail Nanjiani als de kosmisch aangedreven Kingo, Lauren Ridloff als de supersnelle Makkari, Brian Tyree Henry als de intelligente uitvinder Phastos, Salma Hayek als de wijze en spirituele leider Ajak, Lia McHugh als de eeuwig jonge, oude ziel Sprite, Don Lee als de machtige Gilgamesh, Barry Keoghan als afstandelijke eenling Druig en Angelina Jolie als de woeste krijger Thena. Kit Harington speelt Dane Whitman. Geregisseerd door Chloé Zhao.',
    img_url: 'https://tickets.cinemafocus.be/storage/e/3/poster/3780/md.jpg?1635776217',
    trailer_url: 'https://www.youtube.com/watch?v=vRKeodTrICw',
    vertoningen: [
        {
            datum: getLocalDateString(new Date(Date.now())).split(" ").slice(1).join(" "),
            dag: getLocalDateString(new Date(Date.now())).split(" ")[0],
            uur: "20:00",
            zaal: "2"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ")[0],
            uur: "20:00",
            zaal: "2"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ")[0],
            uur: "20:00",
            zaal: "2"
        },
    ]
});

const movie3 = new Movie({
    titel: 'NO TIME TO DIE',
    regisseur: 'Cary Joji Fukunage',
    hoofdrollen: ['Rami Malek', 'Daniel Craig', 'Léa Seydoux'],
    land: 'Verenigde Staten',
    release_datum: '30 september 2021',
    duur: '2u43',
    description: 'Bond heeft zijn actieve dienst achter zich gelaten en geniet van een rustig leven in Jamaica. Zijn rust is echter van korte duur wanneer zijn oude vriend Felix Leiter van de CIA om hulp komt vragen. De missie om een ontvoerde wetenschapper te redden blijkt veel lastiger te zijn dan verwacht en leidt Bond tot een mysterieuze schurk, gewapend met gevaarlijke nieuwe technologie.',
    img_url: 'https://tickets.cinemafocus.be/storage/e/3/poster/3494/md.jpg?1632750772',
    trailer_url: 'https://cdn-videos.cinenews.be/Movies/19523/videos/trailers/compresed/1329/MP4/video.mp4',
    vertoningen: [
        {
            datum: getLocalDateString(new Date(Date.now())).split(" ").slice(1).join(" "),
            dag: getLocalDateString(new Date(Date.now())).split(" ")[0],
            uur: "17:00",
            zaal: "2"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ")[0],
            uur: "17:00",
            zaal: "2"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ")[0],
            uur: "17:00",
            zaal: "2"
        },
    ]
});

const movie4 = new Movie({
    titel: 'RED SANDRA',
    regisseur: 'Jan Verheyen & Lien Willaert',
    hoofdrollen: ['Sven De Ridder', 'Sara De Roo', 'Darya Gantura','Rosalie Charles', 'Elke Van Mello'],
    land: 'België',
    release_datum: '27 oktober 2021',
    duur: '1u40',
    description: '"Red Sandra" vertelt het waargebeurde verhaal van de familie Massart, een verhaal dat 10 jaar geleden de media en de publieke opinie in België en ver daarbuiten beroerde. William en Olga krijgen onverwacht de diagnose dat hun enige dochtertje Sandra (6) lijdt aan MLD, een zeldzame spierziekte. Ze heeft nog ongeveer een jaar te leven. De wereld van het gezin stort in elkaar. De vader weigert de hoop op te geven en gooit zich in een verbeten strijd tegen de farma-industrie',
    img_url: 'https://tickets.cinemafocus.be/storage/e/3/poster/3613/md.jpg?1634213382',
    trailer_url: 'https://cdn-videos.cinenews.be/Movies/20415/videos/trailers/compresed/965/MP4/video.mp4',
    vertoningen: [
        {
            datum: getLocalDateString(new Date(Date.now())).split(" ").slice(1).join(" "),
            dag: getLocalDateString(new Date(Date.now())).split(" ")[0],
            uur: "17:00",
            zaal: "1"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ")[0],
            uur: "17:00",
            zaal: "1"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ")[0],
            uur: "17:00",
            zaal: "1"
        },
    ]
});

const movie5 = new Movie({
    titel: 'VENOM: LET THERE BE CARNAGE',
    regisseur: 'Andy Serkis',
    hoofdrollen: ['Andy Serkis', 'Tom Hardy', 'Michelle Williams','Stephen Graham'],
    land: 'Verenigde Staten',
    release_datum: '13 oktober 2021',
    duur: '1u30',
    description: "Tom Hardy keert terug naar het groot scherm als dodelijke beschermer Venom, één van MARVEL's belangrijkste en meest complexe personages.",
    img_url: 'https://tickets.cinemafocus.be/storage/e/3/poster/3541/md.jpg?1633348646',
    trailer_url: 'https://cdn-videos.cinenews.be/Movies/19688/videos/trailers/compresed/1122/MP4/video.mp4',
    vertoningen: [
        {
            datum: getLocalDateString(new Date(Date.now())).split(" ").slice(1).join(" "),
            dag: getLocalDateString(new Date(Date.now())).split(" ")[0],
            uur: "20:00",
            zaal: "3"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 1)).split(" ")[0],
            uur: "20:00",
            zaal: "3"
        },
        {
            datum: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ").slice(1).join(" "),
            dag: getLocalDateString(addDays(new Date(Date.now()), 2)).split(" ")[0],
            uur: "20:00",
            zaal: "3"
        },
    ]
});


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

function getLocalDateString(date) {
    return date.toLocaleDateString("nl-BE", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: 'long'
    });
}

const movies = [movie1, movie2, movie3, movie4, movie5];

module.exports.movies = movies;
