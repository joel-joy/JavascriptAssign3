document.addEventListener('DOMContentLoaded', function () {
    //student details
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200535886 | Name: Joel Parappuram Joy';
});

function submitOrder() {
    // Storing values
    const pizzaSize = document.getElementById('pizzaSize').value;
    const toppings = document.getElementById('toppings').value;

    const pizzaOrder = new Pizza(pizzaSize, toppings);

    // Showing the order
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = `<h2>Order Summary:</h2>
                              <p>Size: ${pizzaOrder.size}</p>
                              <p>Toppings: ${pizzaOrder.toppings}</p>`;
}

class Pizza {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = toppings;
    }
}
