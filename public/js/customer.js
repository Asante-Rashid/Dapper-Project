const newCustomerHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const phoneNumber = document.querySelector('#phone-number').value.trim();
    const email = document.querySelector('#email').value.trim();
    const addrLine1 = document.querySelector('#address').value.trim();
    const addrLine2 = document.querySelector('#address-two').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#project-funding').value.trim();
    const zipCode = document.querySelector('#zip-code').value.trim();
  
    if (firstName && lastName && phoneNumber) {
        // need to setup customers api to send post to
      const response = await fetch(`/api/customers`, {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, phoneNumber, email, addrLine1, addrLine2, city, state, zipCode}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
          // If successful, redirect the browser to the profile page. Will probably need to change based on order creation
        document.location.replace('/customers');
        alert('New customer created');
      } else {
        alert('Failed to create customer');
      }
    }
  };

  document
  .querySelector('.new-customer-form')
  .addEventListener('submit', newCustomerHandler);

//   document
//   .querySelector('.customer-search-form')
//   .addEventListener('submit', searchCustomerHandler);