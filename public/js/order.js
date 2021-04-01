const newOrderHandler = async (event) => {
    event.preventDefault();

    const pickUpDate = document.querySelector('#pick-up-date').value.trim();
    const pickUpTime = document.querySelector('#pick-up-time').value.trim();
    const flavor = document.querySelector('#flavor').value.trim();
    const size = document.querySelector('#size').value.trim();
    const cakeFormat = document.querySelector('#cake-format').value.trim();
    const dough = document.querySelector('#dough').value.trim();
    const price = document.querySelector('#price').value.trim();
    const description = document.querySelector('#description').value.trim();
    const imageLink = document.querySelector('#image-link').value.trim();
    // const state = document.querySelector('#project-funding').value.trim();

    if (pickUpDate && pickUpTime && flavor && size && cakeFormat && dough && price) {
        // need to setup customers api to send post to
        const response = await fetch(`/api/Orders`, {
            method: 'POST',
            body: JSON.stringify({ pickUpDate, pickUpTime, flavor, size, cakeFormat, dough, price }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(document);

        if (response.ok) {
            // If successful, redirect the browser to the profile page. Will probably need to change based on order creation
            document.location.replace('/products');
            alert('New Order created');
        } else {
            alert('Failed to create order');
        }
    }
};

document
    .querySelector('.order-item-form')
    .addEventListener('submit', newOrderHandler);

//   document
//   .querySelector('.customer-search-form')
//   .addEventListener('submit', searchCustomerHandler);