let freelancers = [];
const maxFreelancers = 3;  

function addRandomFreelancer() {
    const names = ["Devonte", "Marilu", "Ramirez", "Perez", "Macias", "Lambert", "Emiliano", "Edwin", "Aaron", "Pridgen", "Gabriel", "Belmonte"];
    const occupations = ["Software Developer", "Cyber Security", "Graphic Artist", "Teacher", "Construction Worker", "Accountant", "Lawyer", "Personal Security", "Electrician", "Logistic", "Doctor", "Bounty Hunter"];
    const prices = [65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120];

    const randomIndex = Math.floor(Math.random() * names.length);
    const newFreelancer = {
        name: names[randomIndex],
        occupation: occupations[randomIndex],
        startingPrice: prices[randomIndex]
    };

    
    freelancers.unshift(newFreelancer);

    
    if (freelancers.length > maxFreelancers) {
        freelancers.pop();
    }

    createFreelancers();
    updateAveragePrice();
}

function createFreelancers() {
    const tableBody = document.getElementById("freeLancerTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    freelancers.forEach(freelancer => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = freelancer.name;
        row.insertCell(1).textContent = freelancer.occupation;
        row.insertCell(2).textContent = `$${freelancer.startingPrice}`;
    });
}

function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = freelancers.length > 0 ? (total / freelancers.length).toFixed(2) : 0;
    document.getElementById('averagePrice').textContent = `Average Starting Price: $${averagePrice}`;
}


setInterval(addRandomFreelancer, 5000);
