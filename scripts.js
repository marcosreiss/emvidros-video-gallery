// Variáveis globais para debounce
let debounceTimeout;

// Função para buscar e exibir os vídeos
async function fetchVideos() {
    try {
        const response = await fetch("videos.json");
        const videos = await response.json();
        renderVideos(videos);
        populateCategories(videos);
    } catch (error) {
        console.error("Erro ao carregar os vídeos:", error);
    }
}

// Renderiza a lista de vídeos
function renderVideos(videos) {
    const videoList = document.getElementById("video-list");
    videoList.innerHTML = "";

    videos.forEach((video, index) => {
        const truncatedTitle = video.name.length > 70 ? video.name.substring(0, 70) + "..." : video.name;

        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.setAttribute("data-title", truncatedTitle); // Define o título para o hover

        videoItem.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.iframe.split("/embed/")[1].split("?")[0]}/0.jpg" alt="${video.name}">
        `;

        videoItem.onclick = () => playVideo(video.iframe);
        videoList.appendChild(videoItem);
    });

    // Definir primeiro vídeo como ativo ao carregar
    if (videos.length > 0) {
        playVideo(videos[0].iframe);
    }
}

// Atualiza o vídeo principal
function playVideo(iframeSrc) {
    document.getElementById("main-video").src = iframeSrc;
}

// Função para busca com debounce
function debouncedSearch() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(filterVideos, 300);
}

// Filtra os vídeos com base na busca e categoria
async function filterVideos() {
    const searchString = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("category-filter").value;

    try {
        const response = await fetch("videos.json");
        const videos = await response.json();

        const filteredVideos = videos.filter(video =>
            (category === "" || video.category === category) &&
            video.name.toLowerCase().includes(searchString)
        );

        renderVideos(filteredVideos);
    } catch (error) {
        console.error("Erro ao filtrar os vídeos:", error);
    }
}

// Popula a lista de categorias
function populateCategories(videos) {
    const categorySelect = document.getElementById("category-filter");
    const categories = [...new Set(videos.map(video => video.category))];

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Inicializa a galeria ao carregar
document.addEventListener("DOMContentLoaded", fetchVideos);
