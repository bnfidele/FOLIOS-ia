function app() {
    return {
        // Auth State
        isAuthenticated: localStorage.getItem('folios_token') ? true : false,
        loginData: {
            email: '',
            password: ''
        },

        // Chat State
        conversations: [],
        selectedConvId: null,
        messages: {},
        messageInput: '',
        isLoading: false,

        // Init
        init() {
            if (this.isAuthenticated) {
                this.loadConversations();
            }
        },

        // Authentication Methods
        async login() {
            try {
                if (!this.loginData.email || !this.loginData.password) {
                    alert('Veuillez remplir tous les champs');
                    return;
                }

                // Simulated API call
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.loginData)
                }).catch(() => ({
                    ok: true,
                    json: async () => ({ token: 'demo_token_' + Date.now() })
                }));

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('folios_token', data.token);
                    localStorage.setItem('folios_user', this.loginData.email);
                    this.isAuthenticated = true;
                    this.loginData = { email: '', password: '' };
                    this.loadConversations();
                }
            } catch (error) {
                console.error('Login error:', error);
                alert('Erreur de connexion');
            }
        },

        logout() {
            localStorage.removeItem('folios_token');
            this.isAuthenticated = false;
            this.conversations = [];
            this.messages = {};
            this.selectedConvId = null;
        },

        // Conversation Methods
        loadConversations() {
            // Simulated data
            this.conversations = [
                { id: 1, title: 'Développement Web' },
                { id: 2, title: 'Questions IA' },
                { id: 3, title: 'Projets Python' }
            ];
            if (this.conversations.length > 0) {
                this.selectConversation(this.conversations[0].id);
            }
        },

        newConversation() {
            const newId = Math.max(...this.conversations.map(c => c.id), 0) + 1;
            const conv = { id: newId, title: 'Nouvelle conversation' };
            this.conversations.unshift(conv);
            this.messages[newId] = [];
            this.selectConversation(newId);
        },

        selectConversation(id) {
            this.selectedConvId = id;
            if (!this.messages[id]) {
                this.messages[id] = [];
            }
            this.$nextTick(() => this.scrollToBottom());
        },

        getCurrentMessages() {
            return this.messages[this.selectedConvId] || [];
        },

        // Message Methods
        async sendMessage() {
            if (!this.messageInput.trim() || this.isLoading) return;

            const userMessage = {
                id: Date.now(),
                sender: 'user',
                content: this.messageInput
            };

            this.messages[this.selectedConvId].push(userMessage);
            this.messageInput = '';
            this.isLoading = true;

            this.$nextTick(() => this.scrollToBottom());

            try {
                // Simulated API call with streaming effect
                await new Promise(resolve => setTimeout(resolve, 1500));

                const aiResponse = this.generateAIResponse(userMessage.content);
                const aiMessage = {
                    id: Date.now() + 1,
                    sender: 'ai',
                    content: aiResponse
                };

                this.messages[this.selectedConvId].push(aiMessage);

                // Update conversation title if first message
                const conv = this.conversations.find(c => c.id === this.selectedConvId);
                if (conv && conv.title === 'Nouvelle conversation') {
                    conv.title = userMessage.content.substring(0, 30) + '...';
                }
            } catch (error) {
                console.error('Send message error:', error);
                alert('Erreur lors de l\'envoi du message');
            } finally {
                this.isLoading = false;
                this.$nextTick(() => this.scrollToBottom());
            }
        },

        generateAIResponse(userMessage) {
            const responses = [
                'C\'est une excellente question ! ' + userMessage.substring(0, 20) + '...',
                'Je comprends. Comment puis-je vous aider davantage sur ce sujet ?',
                'Très intéressant ! Pouvez-vous donner plus de détails ?',
                'Folios IA ici. Voilà ma réponse : C\'est exact !',
                'Merci pour votre message. Comment puis-je vous assister ?'
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        },

        scrollToBottom() {
            const container = document.getElementById('messagesContainer');
            if (container) {
                setTimeout(() => {
                    container.scrollTop = container.scrollHeight;
                }, 0);
            }
        }
    };
}
