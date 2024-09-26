// Sample data for tour destinations
const destinations = [
  { 
    name: 'Kashmir', 
    price: 20000, 
    image: 'img/k1.jpeg', 
    details: 'contentDetails.html?destination=Kashmir' 
  },
  { 
    name: 'Ladakh', 
    price: 22000, 
    image: 'img/l1.jpeg', 
    details: 'contentDetails.html?destination=Ladakh' 
  },
  { 
    name: 'Rajasthan', 
    price: 30000, 
    image: 'img/rj1.jpeg', 
    details: 'contentDetails.html?destination=Rajasthan' 
  },
  { 
    name: 'Himachal Pradesh', 
    price: 40000, 
    image: 'img/h1.jpeg', 
    details: 'contentDetails.html?destination=Himachal Pradesh' 
  },
  { 
    name: 'Maharashtra', 
    price: 18000, 
    image: 'img/m1.jpeg', 
    details: 'contentDetails.html?destination=Maharashtra' 
  },
  { 
    name: 'Uttar Pradesh', 
    price: 35000, 
    image: 'img/up1.jpeg', 
    details: 'contentDetails.html?destination=Uttar Pradesh' 
  },
  { 
    name: 'Tamilnadu', 
    price: 25000, 
    image: 'img/t1.jpeg', 
    details: 'contentDetails.html?destination=Tamilnadu' 
  },
  { 
    name: 'Kerala', 
    price: 15000, 
    image: 'img/k1.jpeg', 
    details: 'contentDetails.html?destination=Kerala' 
  },
];

// Create cards dynamically
const container = document.getElementById('cardContainer');
destinations.forEach(destination => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${destination.image}" alt="${destination.name}">
    <h3>${destination.name}</h3>
    <p>Price: ₹${destination.price}</p>
  `;
  card.addEventListener('click', () => {
    window.location.href = destination.details;
  });
  container.appendChild(card);
});
