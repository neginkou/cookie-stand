"use strict";

let stores = [];
let totals = new Array(14);
totals.fill(0);

function City(name, minCust, maxCust, avgCookie) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.randomCust = [];
    this.hourCookies = [];
    this.completeCookies = [];
    this.totalCookies = [];
    this.totalSales = 0;
}

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);
City.prototype.cookieTime = function () {
    for (let i = 0; i < 14; i++) {
        let randCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
        this.randomCust.push(randCust);
        let estimate = (Math.floor(randCust * this.avgCookie));
        this.hourCookies.push(estimate);
        this.totalSales += estimate;
        totals[i] += estimate;
    }
};

City.prototype.render = function () {
    let body = document.getElementById("tableBody");
    let cityRow = document.createElement('tr');
    body.appendChild(cityRow);


    let cityName = document.createElement('td');
    cityName.textContent = this.name;
    cityRow.appendChild(cityName);



    for (let i = 0; i < this.hourCookies.length; i++) {
        let cell = document.createElement('td');
        cell.textContent = (this.hourCookies[i]);
        cityRow.appendChild(cell)
    }
    let cityTotal = document.createElement('td');
    cityTotal.textContent = this.totalSales;
    cityRow.appendChild(cityTotal);

};

let renderTotals = function () {

    let tableFooter = document.getElementById('tableFoot');
    let bottomTotal = document.createElement('tr');
    bottomTotal.textContent = 'Totals';
    tableFooter.appendChild(bottomTotal);
    for (let i = 0; i < totals.length; i++) {
        let footCell;
        footCell = document.createElement('td');
        footCell.textContent = totals[i];
        bottomTotal.appendChild(footCell);
    }

    let dailyTotal = (seattle.totalSales + tokyo.totalSales + dubai.totalSales + paris.totalSales + lima.totalSales);


    let totalAll = document.createElement("td");
    totalAll.textContent = dailyTotal;
    bottomTotal.appendChild(totalAll);
};
seattle.cookieTime();
tokyo.cookieTime();
dubai.cookieTime();
paris.cookieTime();
lima.cookieTime();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderTotals();

