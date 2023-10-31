const locations = [
    {
      name: "Seattle",
      minCustomers: 23,
      maxCustomers: 65,
      avgCookiesPerCustomer: 6.3,
      hourlySales: [],
      totalSales: 0,
      
      
      generateRandomCustomers: function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      },

      
      calculateHourlySales: function() {
        const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        for (const hour of hours) {
          const customers = this.generateRandomCustomers();
          const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
          this.hourlySales[hour] = cookiesSold;
          this.totalSales += cookiesSold;
        }
      },

      
      displayHourlySales: function() {
          const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
          for (const hour of hours) {
              const cookiesSold = this.hourlySales[hour];
              const listItem = document.createElement('li');
              listItem.textContent = `${hour}: ${cookiesSold} cookies`;
              seattleSalesList.appendChild(listItem);
            }
            
            const totalListItem = document.createElement('li');
            totalListItem.textContent = `Total: ${this.totalSales} cookies`;
            totalSalesList.appendChild(totalListItem);
            const totalSalesList = document.getElementById("total-sales");
            const seattleSalesList = document.getElementById("seattle-sales");
        },
    }
  ];
  locations[0].calculateHourlySales();
  locations[0].displayHourlySales();
  