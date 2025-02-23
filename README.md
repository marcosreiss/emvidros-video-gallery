# 🎥 Galeria de Vídeos com Filtro e Busca

Este projeto é uma galeria de vídeos interativa, desenvolvida utilizando **HTML, CSS e JavaScript puro**, sem frameworks. Os vídeos são carregados dinamicamente a partir de um arquivo `videos.json`, permitindo fácil manutenção e adição de novos conteúdos.

---

## 🚀 **Tecnologias Utilizadas**
- **HTML5** → Estrutura semântica do projeto.
- **CSS3** → Estilização customizada, incluindo efeitos de hover, transições suaves e layout responsivo.
- **JavaScript (Vanilla JS)** → Manipulação do DOM, carregamento de vídeos dinâmico e implementação de busca com debounce.
- **JSON** → Armazena a lista de vídeos de forma organizada e acessível.

---

## 📌 **Funcionalidades Implementadas**
### 🎬 **1. Reprodução Dinâmica de Vídeos**
- O vídeo principal é atualizado automaticamente ao clicar em um item da lista.
- As miniaturas são geradas automaticamente a partir da API do YouTube.

### 🔍 **2. Barra de Busca (com Debounce)**
- O usuário pode pesquisar vídeos pelo nome.
- A busca utiliza **debounce (atraso controlado de 300ms)** para evitar múltiplas requisições desnecessárias.

### 📂 **3. Filtro por Categoria**
- O usuário pode filtrar os vídeos por categoria através de um `<select>`.
- As categorias são carregadas dinamicamente a partir do `videos.json`.

### 🎨 **4. Estilização Avançada**
- **Lista de vídeos com hover:** Apenas a imagem do vídeo é visível, e ao passar o mouse, o título aparece com efeito suave.
- **Scroll na lista:** Apenas **3 vídeos visíveis** ao mesmo tempo, os demais ficam acessíveis por rolagem vertical.
- **Inputs customizados:** Campo de busca estilizado com ícone de lupa (`search_icon.png`).

---

## 📁 **Estrutura do Projeto**
📂 **Projeto**  
 ├── 📄 `index.html` → Estrutura da página  
 ├── 🎨 `styles.css` → Estilos e animações  
 ├── ⚡ `scripts.js` → Lógica de busca, filtro e manipulação dos vídeos  
 ├── 📜 `videos.json` → Base de dados dos vídeos  
 ├── 📂 `assets/` → Ícones e imagens auxiliares  
 │   └── 🔍 `search_icon.png` → Ícone de lupa no campo de busca  

---

Esse projeto foi desenvolvido com foco na **simplicidade, desempenho e experiência do usuário**. 🚀
