# Chat Web - Projeto de Estudo com Django

![Django](https://img.shields.io/badge/Django-4.0%2B-green) ![Python](https://img.shields.io/badge/Python-3.9%2B-blue) ![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange)

Este é um projeto de estudo de um **site de chat** desenvolvido com a biblioteca **Django**. O objetivo principal é aprender e explorar os conceitos da linguagem Python e o framework Django para construção de aplicações web.

---

## 🚀 Funcionalidades

- 🗨️ Sistema básico de chat em tempo real.
- 📄 Interface simples e intuitiva para envio e exibição de mensagens.
- 📚 Código estruturado para aprendizado dos padrões Django.
  
---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** Python
- **Framework:** Django
- **Banco de Dados:** SQLite (padrão do Django, para simplificar o aprendizado)
- **Frontend:** HTML, CSS e JavaScript básico (para interação com a interface de chat)

---

## 🏗️ Estrutura do Projeto

```plaintext
chatbotDjango/
│
├── apps /chat/                  # Aplicativo principal do chat
          │   ├── migrations/        # Arquivos de migração do banco de dados
          │   ├── templates/         # Arquivos HTML do chat
          │   ├── views.py           # Lógica das páginas e APIs
          │   ├── models.py          # Modelos do banco de dados
          │   ├── urls.py            # Rotas do aplicativo
          │   └── ...                
│
├── chatbot/              # Configurações gerais do projeto Django
│   ├── settings.py        # Configurações do projeto
│   ├── urls.py            # Rotas principais do projeto
│   └── ...
│
├── static/                # Arquivos estáticos (CSS, JavaScript, imagens)
├── templates/               # Arquivos de paginas (HTML5)
├── db.sqlite3             # Banco de dados SQLite
├── manage.py              # Comando principal do Django
└── README.md              # Documentação do projeto
