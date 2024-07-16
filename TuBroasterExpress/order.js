document.addEventListener('DOMContentLoaded', () => {
    const foodDetails = JSON.parse(localStorage.getItem('selectedFood'));

    if (foodDetails) {
        document.getElementById('food-name').textContent = foodDetails.name;
        document.getElementById('food-image').src = foodDetails.image;
        document.getElementById('food-description').textContent = foodDetails.description;
        document.getElementById('food-price').textContent = `$${foodDetails.price}`;
    }

    document.getElementById('submit-order').addEventListener('click', () => {
        const comments = document.getElementById('order-comments').value;
        const packaging = document.querySelector('input[name="packaging"]:checked').value;

        // Aquí puedes manejar el envío del pedido junto con los comentarios y el tipo de empaque
        alert('Pedido enviado con los siguientes comentarios: ' + comments + '\nTipo de empaque seleccionado: ' + packaging);

        // Limpiar el localStorage si es necesario
        localStorage.removeItem('selectedFood');
    });
});

