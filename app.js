/*
const API_KEY = "acfec20727e04f14b172aa27e88b56ff";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));
async function fetchNews(query) {
  const response = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  // console.log(data)

  const results = data.articles;
  console.log(results);

  bindData(data.articles);// variables
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis 
const API_KEY ="9a7b2994c1b548a09c32bcdedd5b8df6";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};


generalBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>General news</h4>";
    fetchGeneralNews();z
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Technology</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}

}

function bindData(newsArticles) {
  const cardsContainer = document.getElementById("cards-container");
  const newsTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  newsArticles.forEach((article) => {
    if (!article.urlToImage) {
      return;
    }
    const cardClone = newsTemplate.content.cloneNode(true);
    fillDataCards(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataCards(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-image");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDescription = cardClone.querySelector("#news-desc");

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDescription.innerHTML = article.description;

  const date = new Date(article.publishedAt).toLocaleString("en-US");
  newsSource.innerHTML = `${article.source.name} | ${date}`;
  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

let currentSelectedNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  currentSelectedNav?.classList.remove("active");
  currentSelectedNav = navItem;
  currentSelectedNav.classList.add("active");
}

const newsInput = document.querySelector(".news-input");
const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!newsInput.value) {
    return;
  } else {
    fetchNews(newsInput.value);
    currentSelectedNav.classList.remove("active");
    currentSelectedNav = null;
  }
});
*/

// Code For Practice -->

const API_KEY = "9a7b2994c1b548a09c32bcdedd5b8df6";
const url = "https://newsapi.org/v2/everything?q=";

const myLogo = document.querySelector(".logo");
myLogo.addEventListener("click", function () {
  window.location.href = "index.html";
});

window.addEventListener("load", () => {
  fetchNews("India");
});

async function fetchNews(query) {
  const response = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  // console.log(data)

  const results = data.articles;
  console.log(results);

  bindData(data.articles);
}

function bindData(newsArticles) {
  const cardsContainer = document.getElementById("cards-container");
  const cardsTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  newsArticles.forEach((article) => {
    if (!article.urlToImage) {
      return;
    }
    let card = cardsTemplate.content.cloneNode(true);
    setupCard(card, article);
    cardsContainer.appendChild(card);
  });
}

function setupCard(newsCard, newsArticle) {
  const newsImage = newsCard.querySelector("#news-image");
  const newsTitle = newsCard.querySelector("#news-title");
  const newsAuthor = newsCard.querySelector("#news-author");
  const newsDescription = newsCard.querySelector("#news-desc");
  const newsSource = newsCard.querySelector("#news-source");

  newsImage.src = newsArticle.urlToImage;
  newsTitle.innerHTML = newsArticle.title;
  newsAuthor.innerHTML = `By - ${newsArticle.author}`;
  newsDescription.innerHTML = newsArticle.description;
  newsSource.innerHTML =
    `Published` + "&nbsp;" + `- ${newsArticle.publishedAt.split("T")[0]}`;

  newsCard.firstElementChild.addEventListener("click", () => {
    window.open(newsArticle.url, "_blank");
  });
}

let currentSelectedNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  currentSelectedNav?.classList.remove("active");
  currentSelectedNav = navItem;
  currentSelectedNav.classList.add("active");
}

const newsInput = document.querySelector(".news-input");
const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!newsInput.value) {
    return;
  } else {
    fetchNews(newsInput.value);
    currentSelectedNav.classList.remove("active");
    currentSelectedNav = null;
  }
});
