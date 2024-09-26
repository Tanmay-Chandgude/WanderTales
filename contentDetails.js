// Get the 'destination' query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const destinationName = urlParams.get('destination');

// Sample data for tour destinations
const destinations = [
  { 
    name: 'Kashmir',
    price: 20000, 
    image: ['img/k1.jpeg','img/k2.jpeg','img/k3.jpeg','img/k4.jpeg','img/k5.jpeg'],
    description: 'Kashmir Tour Package: 7 Days of Enchantment Discover the breathtaking beauty of Kashmir in this 7-day tour!\nExperience the serenity of Dal Lake on a traditional houseboat, explore the lush Mughal Gardens, and immerse yourself in the vibrant local culture.\nEnjoy thrilling excursions to Gulmarg\'s meadows and Pahalgam\'s valleys, along with a cultural cooking class.\nFrom serene landscapes to rich traditions, this package offers an unforgettable adventure.\nBook now to create lasting memories in paradise!' 
  },
  { 
    name: 'Ladakh', 
    price: 22000, 
    image: ['img/l1.jpeg','img/l2.jpeg','img/l3.jpeg','img/l4.jpeg','img/l5.jpeg'], 
    description: 'Discover the Beauty of Ladakh!\nJoin us for an unforgettable journey through Ladakh’s stunning landscapes, featuring majestic mountains and serene lakes. Experience rich culture at ancient monasteries, explore iconic sites like Pangong Lake and Nubra Valley, and enjoy adventure activities like trekking.\nPackage Includes:\nComfortable accommodation\nDaily breakfast and dinner\nGuided tours\nLocal transportation\nEmbark on an adventure of a lifetime in the heart of the Himalayas!' 
  },
  { 
    name: 'Rajasthan', 
    price: 30000, 
    image: ['img/rj1.jpeg','img/rj2.jpeg','img/rj3.jpeg','img/rj4.jpeg','img/rj5.jpeg'],
    description: 'Discover the Enchantment of Rajasthan Embark on a mesmerizing journey through the vibrant landscapes of Rajasthan, where rich heritage meets breathtaking beauty. Our curated tour package offers you the chance to explore the majestic forts of Jaipur, the serene lakes of Udaipur, and the golden sands of Jaisalmer. Experience the warmth of traditional hospitality, indulge in mouth-watering local cuisine, and immerse yourself in the colorful culture of the desert state. Whether you’re wandering through the bustling bazaars or enjoying a sunset camel ride, every moment in Rajasthan is a memory waiting to be cherished. Join us for an unforgettable adventure and let the magic of Rajasthan captivate your heart!' 
  },
  { 
    name: 'Himachal Pradesh', 
    price: 40000, 
    image: ['img/h1.jpeg','img/h2.jpeg','img/h3.jpeg','img/h4.jpeg','img/h5.jpeg'], 
    description: 'Explore the Enchanting Himachal Pradesh.Embark on an unforgettable journey through the breathtaking landscapes of Himachal Pradesh, where majestic mountains meet serene valleys. Our carefully crafted tour package includes visits to iconic destinations like Shimla, Manali, and Dharamshala, offering a perfect blend of adventure and relaxation. Experience the vibrant local culture, indulge in authentic Himachali cuisine, and engage in thrilling activities like trekking, paragliding, and river rafting. Whether you seek tranquility or adventure, this tour promises an enchanting escape into nature’s lap, making it the perfect getaway for families, couples, and solo travelers alike.' 
  },
  { 
    name: 'Maharashtra', 
    price: 18000, 
    image: ['img/m1.jpeg','img/m2.jpeg','img/m3.jpeg','img/m4.jpeg','img/m5.jpeg'], 
    description: 'Maharashtra Tour Package: Discover the Essence of Maharashtra.Embark on a captivating journey through the vibrant landscapes and rich heritage of Maharashtra. This tour package offers a perfect blend of cultural exploration and natural beauty, taking you from the bustling streets of Mumbai, where you can witness the iconic Gateway of India and the lively Colaba district, to the serene beaches of Alibaug. Explore the majestic Ajanta and Ellora Caves, a UNESCO World Heritage Site, renowned for their stunning rock-cut architecture and intricate carvings. Delight in the lush greenery of the Western Ghats, where you can unwind in hill stations like Lonavala and Mahabaleshwar. Savor authentic Maharashtrian cuisine and immerse yourself in local traditions and festivals. This package promises an unforgettable experience, showcasing the diverse charm of Maharashtra.' 
  },
  { 
    name: 'Uttar Pradesh', 
    price: 35000, 
    image: ['img/up1.jpeg','img/up2.jpeg','img/up3.jpeg','img/up4.jpeg','img/up5.jpeg'], 
    description: 'Explore the Wonders of Uttar Pradesh.Discover the vibrant culture, rich history, and breathtaking landscapes of Uttar Pradesh with our exclusive tour package. This immersive journey takes you through the iconic cities of Agra, Varanasi, and Lucknow. Marvel at the majestic Taj Mahal, witness the spiritual rituals along the Ganges River, and indulge in the exquisite Awadhi cuisine. Visit ancient temples, bustling markets, and heritage sites that showcase the state’s diverse heritage. With guided tours, comfortable accommodations, and personalized experiences, this package promises to create unforgettable memories. Join us for an enchanting adventure through the heart of India!' },
  { 
    name: 'Tamilnadu', 
    price: 25000, 
    image: ['img/t1.jpeg','img/t2.jpeg','img/t3.jpeg','img/t4.jpeg','img/t5.jpeg'], 
    description: 'Explore the Wonders of Tamil Nadu.Embark on a captivating journey through Tamil Nadu, where rich history meets vibrant culture. Our exclusive tour package offers you the chance to explore iconic temples, stunning landscapes, and bustling markets. Visit the majestic Meenakshi Temple in Madurai, bask in the tranquility of Kodaikanal\'s lakes, and immerse yourself in the lively atmosphere of Chennai’s Marina Beach. Indulge in authentic South Indian cuisine and experience traditional art forms. Whether you\'re a history buff or a nature lover, Tamil Nadu has something for everyone. Join us for an unforgettable adventure in this enchanting region!' 
  },
  { 
    name: 'Kerala', 
    price: 15000, 
    image: ['img/kl1.jpeg','img/kl2.jpeg','img/kl3.jpeg','img/kl4.jpeg','img/kl5.jpeg'], 
    description: 'Discover Kerala: God’s Own Country.\nEmbark on an unforgettable journey through Kerala’s stunning landscapes! Experience serene backwaters on a houseboat in Alleppey, relax on the beautiful beaches of Varkala, and explore the spice plantations of Munnar.\nVisit iconic sites like Fort Kochi and Periyar National Park, savor delicious Kerala cuisine, and rejuvenate with an Ayurvedic spa treatment. This package offers the perfect blend of adventure and relaxation. Book your Kerala getaway today!' 
  },
];

// Find the destination data based on the URL parameter (case-insensitive match)
const destination = destinations.find(dest => dest.name.toLowerCase() === destinationName.toLowerCase());

if (destination) {
  // Select all tour containers
  const tourContainers = document.querySelectorAll('.tour-details-container');

  // Update the page for each tour card
  tourContainers.forEach(container => {
      // Update the elements within the current container
      const tourImage = container.querySelector('.tourImage');
      const tourName = container.querySelector('.tourName');
      const tourPrice = container.querySelector('.tourPrice');
      const tourDescription = container.querySelector('.tourDescription');

      tourName.innerText = destination.name;
      tourImage.src = destination.image[0]; // Use the first image as the main one
      tourPrice.innerText = `Price: ₹${destination.price}`;
      tourDescription.innerText = destination.description;

      // Slider variables
      let currentIndex = 0;

      // Function to update the displayed image
      function showImage(index) {
          tourImage.src = destination.image[index];
      }

      // Change slide function
      function changeSlide(n) {
          currentIndex += n;

          if (currentIndex < 0) {
              currentIndex = destination.image.length - 1; // Loop to last image
          } else if (currentIndex >= destination.image.length) {
              currentIndex = 0; // Loop to first image
          }
          showImage(currentIndex);
      }

      // Initial display
      showImage(currentIndex);

      // Add event listeners for the buttons
      container.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
      container.querySelector('.next').addEventListener('click', () => changeSlide(1));

      // Add to cart button handling
      container.querySelector('.addToCart').addEventListener('click', () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add to cart button handling
container.querySelector('.addToCart').addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the destination is already in the cart
    if (!cart.some(item => item.name === destination.name)) {
        cart.push({
            name: destination.name,
            price: destination.price,
            image: destination.image[0] // Use the main preview image
        });

        // Store the updated cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${destination.name} has been added to your cart!`);
    } else {
        alert(`${destination.name} is already in your cart.`);
    }
});


  });
}) ;}
