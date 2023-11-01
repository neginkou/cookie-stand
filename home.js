function renderStore(location) {
    const rootElement = document.getElementById("root");

    const storeSection = document.createElement("section");
    storeSection.classList.add("location");
    rootElement.appendChild(storeSection);

    const firstTitle = document.createElement("h2");
    firstTitle.textContent = location.name;
    storeSection.appendChild(firstTitle);

    const storeDataList = document.createElement("ul");
    storeSection.appendChild(storeDataList);

    for (let i = 0; i < location.HoursOpen.length; i++) {
        const hoursOpenItem = document.createElement("li");
        hoursOpenItem.textContent = location.HoursOpen[i];
        storeDataList.appendChild(hoursOpenItem);
    }
}

const Seattle = {
    name: "Seattle",
    HoursOpen: ["Hours Open 6am - 7pm", "Contact Info: 123 - 456 -7890", "Location: 2901 3rd Ave #300, Seattle, WA 98121"],
};

const Tokyo = {
    name: "Tokyo",
    HoursOpen: ["Hours Open 6am - 7pm", "Contact Info : 222-222-2222", "Location : 1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634"],
};

const Dubai = {
    name: "Dubai",
    HoursOpen: ["Hours Open 6am - 7pm", "Contact Info : 333-333-3333", "Location : 1 Sheikh Mohammad bin Rashid Blvd - Dubai"],
};

const Paris = {
    name: "Paris",
    HoursOpen: ["Hours Open 6am - 7pm", "Contact Info : 444-444-4444", "Location : Champ De Mars, 5 Avenue Anatole France, 75007 Paris"],
};

const Lima = {
    name: "Lima",
    HoursOpen: ["Hours Open 6am - 7pm", "Contact Info : 555-555-5555", "Location : Ca. Gral. Borgono cuadra 8, Miraflores 15074"],
};

// Call the renderStore function for each location
renderStore(Seattle);
renderStore(Tokyo);
renderStore(Dubai);
renderStore(Paris);
renderStore(Lima);
