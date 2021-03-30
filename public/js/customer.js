const newCustomerHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#project-name').value.trim();
    const lastName = document.querySelector('#project-funding').value.trim();
    const phoneNumber = document.querySelector('#project-desc').value.trim();
    const email = document.querySelector('#project-name').value.trim();
    const addrLine1 = document.querySelector('#project-funding').value.trim();
    const addrLine2 = document.querySelector('#project-desc').value.trim();
    const city = document.querySelector('#project-name').value.trim();
    const state = document.querySelector('#project-funding').value.trim();
    const zipCode = document.querySelector('#project-desc').value.trim();
  
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