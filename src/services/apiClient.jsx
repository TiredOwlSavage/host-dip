// apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://your-backend-api.com/',
  // Другие глобальные настройки, например, заголовки
});

export default apiClient;
