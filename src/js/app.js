function app() {
    return {
        // Auth State
        isAuthenticated: localStorage.getItem('folios_token') ? true : false,
        isRegisterMode: false,
        sidebarOpen: false,
        loginData: {
            email: '',
            password: ''
        },
        registerData: {
            email: '',
            age: null,
            password: '',
            confirmPassword: ''
        },

        // Chat State
        conversations: [],
        selectedConvId: null,
        messageInput: '',
        isLoading: false,

        // Init
        init() {
            if (this.isAuthenticated) {
                this.loadConversations();
            }
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    this.sidebarOpen = false;
                }
            });
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

        async register() {
            try {
                if (!this.registerData.email || !this.registerData.age || !this.registerData.password || !this.registerData.confirmPassword) {
                    alert('Veuillez remplir tous les champs');
                    return;
                }

                if (this.registerData.password !== this.registerData.confirmPassword) {
                    alert('Les mots de passe ne correspondent pas');
                    return;
                }

                // Simulated API call
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.registerData)
                }).catch(() => ({
                    ok: true,
                    json: async () => ({ token: 'demo_token_' + Date.now() })
                }));

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('folios_token', data.token);
                    localStorage.setItem('folios_user', this.registerData.email);
                    this.isAuthenticated = true;
                    this.isRegisterMode = false;
                    this.registerData = { email: '', age: null, password: '', confirmPassword: '' };
                    this.loadConversations();
                }
            } catch (error) {
                console.error('Register error:', error);
                alert('Erreur lors de l\'inscription');
            }
        },

        logout() {
            localStorage.removeItem('folios_token');
            localStorage.removeItem('folios_user');
            this.isAuthenticated = false;
            this.sidebarOpen = false;
            this.conversations = [];
            this.selectedConvId = null;
            this.loginData = { email: '', password: '' };
            this.registerData = { email: '', age: null, password: '', confirmPassword: '' };
        },

        // Conversation Methods
        loadConversations() {
            // Simulated data
            this.conversations = [
                { id: 1, title: 'Développement Web', messages: [] },
                { id: 2, title: 'Questions IA', messages: [] },
                { id: 3, title: 'Projets Python', messages: [] }
            ];
            if (this.conversations.length > 0) {
                this.selectConversation(this.conversations[0].id);
            }
        },

        newConversation() {
            const newId = Math.max(...this.conversations.map(c => c.id), 0) + 1;
            const conv = { id: newId, title: 'Nouvelle conversation', messages: [] };
            this.conversations.unshift(conv);
            this.selectConversation(newId);
        },

        selectConversation(id) {
            this.selectedConvId = id;
            this.$nextTick(() => this.scrollToBottom());
        },

        getCurrentMessages() {
            const conv = this.conversations.find(c => c.id === this.selectedConvId);
            return conv ? conv.messages : [];
        },

        // Message Methods
        async sendMessage() {
            if (!this.messageInput.trim() || this.isLoading) return;

            const conv = this.conversations.find(c => c.id === this.selectedConvId);
            if (!conv) return;

            const userMessage = {
                id: Date.now(),
                sender: 'user',
                content: this.messageInput
            };

            conv.messages.push(userMessage);
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

                conv.messages.push(aiMessage);

                // Update conversation title if first message
                if (conv.title === 'Nouvelle conversation') {
                    conv.title = userMessage.content.substring(0, 30) + (userMessage.content.length > 30 ? '...' : '');
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
