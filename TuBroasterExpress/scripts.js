document.addEventListener('DOMContentLoaded', () => {
    const foodList = [
        {
            name: "Salchipollo",
            description: "Arroz + Papas + Tallarin + Pollo",
            price: 5.00,
            image: "images/salchipollo.png"
        },
        {
            name: "Salchipollo(bien servido)",
            description: "Arroz + Papas + Tallarin + Pollo",
            price: 6.00,
            image: "images/salchipollo.png"
        },
        {
            name: "Broaster",
            description: "Broaster + Chaufa + Papas Fritas",
            price: 5.50,
            image: "images/broaster.png"
        },
        {
            name: "Salchi Broaster",
            description: "Arroz + Papas + Pollo + Salchicha",
            price: 7.00,
            image: "images/salchibroaster.png"
            
        },
        {
            name: "Salchi Broaster(bien servido)",
            description: "Arroz + Papas + Pollo + Salchicha",
            price: 8.00,
            image: "images/salchibroaster.png"
            
        },
        {
            name: "Polli Papa",
            description: "Pollo + Papas",
            price: 7.00,
            image: "images/polli papa.jpg"
            
        },
        {
            name: "Salchipapa(bien servido)",
            description: "Papas + Salchichas",
            price: 5.00,
            image: "images/salchipapa.png"
            
        },
        {
            name: "Salchipapa",
            description: "Papas + Salchichas",
            price: 4.00,
            image: "images/salchipapa.png"
            
        },
        {
            name: "Mixto Especial",
            description: "Arroz + Papas + Tallarin + Huevo + Pollo + Salchicha",
            price: 9.00,
            image: "images/mixto-especial.png"
            
        },
        {
            name: "Mixto Normal",
            description: "Arroz + Papas + Tallarin + Pollo + Salchicha",
            price: 6.00,
            image: "images/mixto-normal2.png"
            
        },
        {
            name: "Arroz con Huevo",
            description: "Arroz + Papas + Huevo",
            price: 4.50,
            image: "images/arroz-huevo.png"
            
        }
    ];

    const foodListContainer = document.getElementById('food-list');

    foodList.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';

        const foodImage = document.createElement('img');
        foodImage.src = food.image;
        foodImage.alt = food.name;

        const foodName = document.createElement('h2');
        foodName.textContent = food.name;

        const foodDescription = document.createElement('p');
        foodDescription.textContent = food.description;

        const foodPrice = document.createElement('span');
        foodPrice.textContent = `$${food.price.toFixed(2)}`;

        foodItem.appendChild(foodImage);
        foodItem.appendChild(foodName);
        foodItem.appendChild(foodDescription);
        foodItem.appendChild(foodPrice);

        foodItem.addEventListener('click', () => {
            const foodDetails = {
                name: food.name,
                description: food.description,
                price: food.price.toFixed(2),
                image: food.image
            };
            localStorage.setItem('selectedFood', JSON.stringify(foodDetails));
            window.location.href = 'order.html';
        });

        foodListContainer.appendChild(foodItem);
    });
});


