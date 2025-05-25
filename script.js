document.getElementById('anonymous-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const recipient = document.getElementById('recipient').value;
            const messageContent = document.getElementById('message').value;
            
            const now = new Date();
            const timestamp = now.toLocaleString();
            
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.innerHTML = `
                <div class="message-header">
                    <span class="recipient">To: ${escapeHtml(recipient)}</span>
                    <span class="timestamp">${timestamp}</span>
                </div>
                <p class="message-content">${escapeHtml(messageContent)}</p>
            `;
            
            const messagesList = document.getElementById('messages-list');
            
            const noMessages = messagesList.querySelector('.no-messages');
            if (noMessages) {
                messagesList.removeChild(noMessages);
            }
            
            messagesList.insertBefore(messageElement, messagesList.firstChild);
            
            document.getElementById('anonymous-form').reset();
            
            showSuccessMessage('Your anonymous message has been sent!');
        });

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        function showSuccessMessage(message) {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.textContent = message;
            document.body.appendChild(successDiv);
            
            setTimeout(() => {
                successDiv.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                successDiv.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(successDiv);
                }, 400);
            }, 3000);
        }
        
        document.getElementById('anonymous-form').addEventListener('submit', function() {
            setTimeout(() => {
                document.querySelector('.messages-container').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        });