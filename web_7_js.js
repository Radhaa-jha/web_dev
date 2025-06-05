document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');
    const reloadBtn = document.getElementById('reloadBtn');
    const errorMessage = document.getElementById('error-message');

    // Function to fetch and display user data
    const fetchUserData = async () => {
        userContainer.innerHTML = '<div class="loading">Loading user data...</div>';
        errorMessage.style.display = 'none';

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const users = await response.json();
            displayUsers(users);
        } catch (error) {
            errorMessage.textContent = `Failed to fetch user data: ${error.message}`;
            errorMessage.style.display = 'block';
            userContainer.innerHTML = '';
            console.error('Error fetching user data:', error);
        }
    };

    // Function to display users in the container
    const displayUsers = (users) => {
        userContainer.innerHTML = '';
        
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            
            userCard.innerHTML = `
                <div class="user-name">${user.name}</div>
                <div class="user-email">📧 ${user.email}</div>
                <div class="user-address">
                    🏠 ${user.address.street}, ${user.address.suite}<br>
                    ${user.address.city}, ${user.address.zipcode}
                </div>
            `;
            
            userContainer.appendChild(userCard);
        });
    };

    // Initial load
    fetchUserData();

    // Reload button event listener
    reloadBtn.addEventListener('click', fetchUserData);
});