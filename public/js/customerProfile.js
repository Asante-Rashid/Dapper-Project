const newOrderHandler = async (event) => {
    event.preventDefault();
  
    const customer_id = document.querySelector('#first-name').value.trim();
    const pickUpDate = document.querySelector('#pickUpDate').value.trim();
    const pickUpTime = document.querySelector('#pickUpTime').value.trim();
    
  
    if (customer_id && pickUpDate && pickUpTime) {
      // need to setup customers api to send post to
      const response = await fetch(`/api/orders`, {
        method: 'POST',
        body: JSON.stringify({ customer_id, pickUpDate, pickUpTime }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page. Will probably need to change based on order creation
        document.location.replace('/reports');
        alert('New customer created');
      } else {
        alert('Failed to create customer');
      }
    }
  };
  
  document
    .querySelector('.order-item-form')
    .addEventListener('submit', newOrderHandler);