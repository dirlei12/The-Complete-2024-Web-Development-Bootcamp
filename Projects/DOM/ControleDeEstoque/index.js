const addProductForm = document.getElementById('addProductForm');
        const stockTableBody = document.querySelector('#stockTable tbody');

        addProductForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita o reload da página

            const productName = document.getElementById('productName').value;
            const productQuantity = document.getElementById('productQuantity').value;

            // Cria uma nova linha para a tabela
            const newRow = document.createElement('tr');

            newRow.innerHTML = `
                <td>${productName}</td>
                <td>${productQuantity}</td>
                <td><button class="remove-btn" onclick="removeProduct(this)">Remover</button></td>
            `;

            // Adiciona a linha à tabela
            stockTableBody.appendChild(newRow);

            // Limpa os campos do formulário
            addProductForm.reset();
        });

        function removeProduct(button) {
            // Remove a linha correspondente ao botão clicado
            const row = button.parentElement.parentElement;
            stockTableBody.removeChild(row);
        }