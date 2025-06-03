const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const successMessage = document.getElementById('successMessage');

        // Regular Expression for Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation Functions
        const validateName = () => {
            const value = nameInput.value.trim();
            if (!value) {
                showError(nameInput, 'nameError', 'Name is required');
                return false;
            }
            clearError(nameInput, 'nameError');
            return true;
        };

        const validateEmail = () => {
            const value = emailInput.value.trim();
            if (!value) {
                showError(emailInput, 'emailError', 'Email is required');
                return false;
            } else if (!emailRegex.test(value)) {
                showError(emailInput, 'emailError', 'Please enter a valid email address');
                return false;
            }
            clearError(emailInput, 'emailError');
            return true;
        };

        const validateMessage = () => {
            const value = messageInput.value.trim();
            if (!value) {
                showError(messageInput, 'messageError', 'Message cannot be empty');
                return false;
            }
            clearError(messageInput, 'messageError');
            return true;
        };

        // UI Feedback Functions
        function showError(inputElement, errorElementId, message) {
            const errorElement = document.getElementById(errorElementId);
            inputElement.parentElement.classList.add('error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        function clearError(inputElement, errorElementId) {
            const errorElement = document.getElementById(errorElementId);
            inputElement.parentElement.classList.remove('error');
            errorElement.style.display = 'none';
        }

        // Form Submission Handler
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Run validations
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();
            
            if (isNameValid && isEmailValid && isMessageValid) {
                // Hide any visible errors
                document.querySelectorAll('.error-message').forEach(el => {
                    el.style.display = 'none';
                });
                
                // Show success message
                successMessage.style.display = 'block';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });

        // Real-time Validation on Input
        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        messageInput.addEventListener('blur', validateMessage);