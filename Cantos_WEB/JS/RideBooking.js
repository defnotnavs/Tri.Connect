
const form = document.getElementById('bookingForm');

form.addEventListener('submit', function(event) {

  event.preventDefault();


  const formData = new FormData(form);
  const pickupLocation = formData.get('pickupLocation');
  const destination = formData.get('destination');
  const passengers = formData.get('passengers');
  const date = formData.get('date');
  const time = formData.get('time');

  alert(`Your ride has been booked! Here are the details:
    - Pickup Location: ${pickupLocation}
    - Destination: ${destination}
    - Number of Passengers: ${passengers}
    - Date: ${date}
    - Time: ${time}`);

  form.reset();
});