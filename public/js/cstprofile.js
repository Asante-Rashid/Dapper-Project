const newOrderHandler = async (event) => {
    event.preventDefault();
  
    const customer_id = document.querySelector('#customerId').value.trim();
    const pickUpDate = document.querySelector('#pickUpDate').value.trim();
    const pickUpTime = document.querySelector('#pickUpTime').value.trim();
    
  
    if (customer_id && pickUpDate && pickUpTime) {
      // ! ../ was neccisary otherwise you get err 404 not found
      // ! err 400 bad request. not sure how to fix -Asante
      const response = await fetch(`/api/orders`, {
        method: 'POST',
        body: JSON.stringify({ customer_id, pickUpDate, pickUpTime }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(function(response) {
        if (response.status === 404 || response.status === 400) {
          return response.json(),
          console.log(response)
        }
      }).then(function(object) {
        if (object.type === 'error') {
          console.log(object.type, object.message)
        } else {
          console.log('success')
        }
      });
  
      if (response.ok) {
        document.location.replace('/reports');
        alert('New order created');
      } else {
        alert('Failed to create order');
        throw Error(`Request rejected with status ${res.status}`);
      }
    }
  };
  
  document
    .querySelector('.order-item-form')
    .addEventListener('submit', newOrderHandler);