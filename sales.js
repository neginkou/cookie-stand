const seattleSalesList = document.getElementById("root");
const totalSalesList = document.getElementById("total-sales");
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const Seattle = {
    location: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerSale: 6.3,
    estimatedSales: [],
    render: function () {
        renderStore(this);
    },
    estimate: function () {
        this.estimatedSales = estimate(this);
    },
};

const Tokyo = {
    location: "Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerSale: 1.2,
    estimatedSales: [],
    render: function () {
        renderStore(this);
    },
    estimate: function () {
        this.estimatedSales = estimate(this);
    },
};

const Dubai = {
    location: "Dubai",
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerSale: 3.7,
    estimatedSales: [],
    render: function () {
        renderStore(this);
    },
    estimate: function () {
        this.estimatedSales = estimate(this);
    },
};

const Paris = {
    location: "Paris",
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerSale: 2.3,
    estimatedSales: [],
    render: function () {
        renderStore(this);
    },
    estimate: function () {
        this.estimatedSales = estimate(this);
    },
};

const Lima = {
    location: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerSale: 4.6,
    estimatedSales: [],
    render: function () {
        renderStore(this);
    },
    estimate: function () {
        this.estimatedSales = estimate(this);
    },
};

function renderStore(location) {
    // Your rendering logic here
}

function estimate(store) {
    let estimatedSales = [];
    for (let i = 0; i < hours.length; i++) {
        const numCustomers = generateRandomCustomers(store);
        const hourlySales = Math.ceil(numCustomers * store.avgCookiesPerSale);
        estimatedSales.push(hourlySales);
    }
    return estimatedSales;
}

function generateRandomCustomers(location) {
    return Math.floor(Math.random() * (location.maxCustomers - location.minCustomers + 1)) + location.minCustomers;
}
function renderStore(store) {
  const storeSalesList = document.createElement("ul");
  storeSalesList.innerHTML = `<strong>${store.location}</strong><br>`;
  
  for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${store.estimatedSales[i]} cookies`;
      storeSalesList.appendChild(listItem);
  }

  seattleSalesList.appendChild(storeSalesList);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let stores = [Seattle, Tokyo, Dubai, Paris, Lima];
for (let i = 0; i < stores.length; i++) {
    stores[i].estimate();
    stores[i].render();
    console.log(stores[i]);
}
