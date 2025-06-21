// Function to handle room booking
    document.getElementById('bookNowBtn').addEventListener('click', function() {
      const roomTitle = document.querySelector('.room-info h1').textContent;
      const roomPrice = document.querySelector('.price').textContent.match(/\d+/)[0];
      const roomImage = document.querySelector('.main-image').src;
      
      // Encode parameters for URL
      const params = new URLSearchParams({
        room: roomTitle,
        price: roomPrice,
        image: roomImage
      });
      
      // Redirect to booking page with parameters
      window.location.href = `booking.html?${params.toString()}`;
    });
    
    // Set up event listeners for similar room buttons
    document.querySelectorAll('.room-card .btn-book').forEach(button => {
      button.addEventListener('click', function() {
        const roomTitle = this.closest('.room-card-info').querySelector('h3').textContent;
        const roomPrice = this.closest('.room-card-info').querySelector('.price').textContent.match(/\d+/)[0];
        const roomImage = this.closest('.room-card').querySelector('img').src;
        
        // Encode parameters for URL
        const params = new URLSearchParams({
          room: roomTitle,
          price: roomPrice,
          image: roomImage
        });
        
        // Redirect to booking page with parameters
        window.location.href = `booking.html?${params.toString()}`;
      });
    });