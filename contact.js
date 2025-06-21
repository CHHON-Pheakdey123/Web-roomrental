// Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      setTimeout(function() {
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Hide success message after 5 seconds
        setTimeout(function() {
          document.getElementById('successMessage').style.display = 'none';
        }, 5000);
      }, 1000);
    });
    
    // Set current year in footer
    document.querySelector('.footer-bottom p').innerHTML = 
      `&copy; ${new Date().getFullYear()} RoomRental. All rights reserved.`;