const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines?country=br";

export const fetchNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
    const data = await response.json();
    if (response.ok) {
      return data.articles;
    } else {
      throw new Error(data.message || "Erro ao buscar notícias");
    }
  } catch (error) {
    throw new Error(error.message || "Erro ao buscar notícias");
  }
};

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await fetch(
      `${BASE_URL}&category=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    if (response.ok) {
      return data.articles;
    } else {
      throw new Error(data.message || "Erro ao buscar notícias");
    }
  } catch (error) {
    throw new Error(error.message || "Erro ao buscar notícias");
  }
};

export const fetchNewsByQuery = async (query) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    if (response.ok) {
      return data.articles;
    } else {
      throw new Error(data.message || "Erro ao buscar notícias");
    }
  } catch (error) {
    throw new Error(error.message || "Erro ao buscar notícias");
  }
};

export const fetchFashionNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=fashion OR sneakers&apiKey=${API_KEY}`
    );
    const data = await response.json();
    if (response.ok) {
      return data.articles;
    } else {
      throw new Error(data.message || "Erro ao buscar notícias");
    }
  } catch (error) {
    throw new Error(error.message || "Erro ao buscar notícias");
  }
};
