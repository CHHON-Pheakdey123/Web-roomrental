
        // Set default dates for check-in and check-out
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        // Format dates to YYYY-MM-DD
        function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        
        document.getElementById('checkIn').value = formatDate(today);
        document.getElementById('checkOut').value = formatDate(tomorrow);
        
        // Payment method selection
        const paymentMethods = document.querySelectorAll('.payment-method');
        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                paymentMethods.forEach(m => m.classList.remove('active'));
                method.classList.add('active');
            });
        });
        
        // Get room details from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const roomType = urlParams.get('room') || 'បន្ទប់ជម្រើសពិសេស';
        const roomPrice = urlParams.get('price') || '120';
        const roomImg = urlParams.get('image') || 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
        const roomDesc = urlParams.get('desc') || 'បន្ទប់ជម្រើសពិសេសរបស់យើងផ្តល់នូវបទពិសោធន៍ស្នាក់នៅដ៏រុងរឿង មានទិដ្ឋភាពល្អឥតខ្ចោះនៃទីក្រុង។ បន្ទប់នេះមានគ្រឿងសង្ហារឹមទំនើប និងសេវាកម្មដ៏ពិសេស។';
        
        // Update room details on page
        document.getElementById('room-title').textContent = roomType;
        document.getElementById('room-price').textContent = `$${roomPrice}`;
        document.getElementById('room-image').src = roomImg;
        document.getElementById('room-description').textContent = roomDesc;
        
        // Calculate total price
        const nights = 3;
        const tax = 0.18 * roomPrice * nights;
        const discount = 30;
        const total = (roomPrice * nights + tax) - discount;
        document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
        
        // Form submission
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            
            // Show confirmation
            document.getElementById('user-email').textContent = email;
            document.getElementById('confirmation').style.display = 'flex';
        });
        
        // Close confirmation
        document.getElementById('closeConfirmation').addEventListener('click', function() {
            document.getElementById('confirmation').style.display = 'none';
            window.location.href = 'index.html';
        });
    