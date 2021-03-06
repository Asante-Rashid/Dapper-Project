$(document).ready(function () {

const newOrderHandler = async (event) => {
    event.preventDefault();

    const order_id = document.querySelector('#orderNum').value.trim();
    const flavor_id = document.querySelector('#flavor').value.trim();
    const size_id = document.querySelector('#size').value.trim();
    // const cakeFormat = document.querySelector('#cake-format').value.trim();
    const dough = document.querySelector('#dough').value.trim();
    const base_price = document.querySelector('#price').value.trim();
    const notes = document.querySelector('#description').value.trim();
    const photo_link = document.querySelector('#image-link').value.trim();
    // const state = document.querySelector('#project-funding').value.trim();
    
    const customer_id = document.querySelector('#customerId').value.trim()
    const customerFirstName = document.querySelector('#customerFName').value.trim()
    const customerLastName = document.querySelector('#customerLName').value.trim()
    const customerPhoneNumber = document.querySelector('#customerPNumber').value.trim()
    
    console.log("order_id: " + order_id);

    if (flavor_id && size_id && dough && base_price) {
        // const order_id = 1;
        // const customer_id = 1;
        const product_type_id = 1;
        const quantity = 1;
       
        // need to setup customers api to send post to
        const response = await fetch(`/api/OrderItem`, {
            method: 'POST',
            body: JSON.stringify({ order_id, product_type_id, size_id, flavor_id, quantity, 
                dough, base_price, notes, photo_link, customer_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        }); 
        if (response.ok) {
            // If successful, redirect the browser to the profile page. Will probably need to change based on order creation
            document.location.replace('/products/' + order_id);
            alert('New Order created');
        } else {
            alert('Failed to create order');
        }
    }
};

document.querySelector('.order-item-form').addEventListener('submit', newOrderHandler);

//   document
//   .querySelector('.customer-search-form')
//   .addEventListener('submit', searchCustomerHandler);

}
)