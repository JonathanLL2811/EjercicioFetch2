document.addEventListener('DOMContentLoaded', function () {
    const categoriesContainer = document.getElementById('categories');

    // Función 
    async function fetchCategories() {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories');
            const categories = await response.json();

            categories.forEach(category => {
              
                const categoryCard = document.createElement('div');
                categoryCard.classList.add('col-md-4', 'mb-4');

                categoryCard.innerHTML = `
                    <div class="card h-100">
                        <img src="${category.image}" class="card-img-top" alt="${category.name}">
                        <div class="card-body">
                            <h5 class="card-title">${category.name}</h5>
                        </div>
                    </div>
                `;

                categoriesContainer.appendChild(categoryCard);
            });
        } catch (error) {
            console.error('Error al obtener las categorías:', error);
        }
    }

    fetchCategories();
});
