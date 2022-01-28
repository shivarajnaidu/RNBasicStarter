// export const API_HOST = 'http://localhost:3000';
export const API_HOST = 'https://prodapi.example.com';
export const API_BASE_URI = `${API_HOST}/api/v1`;
export const SITE_URI = 'https://example.com';

class ConfigService {
  API_HOST = API_HOST;
  API_BASE_URI = API_BASE_URI;
}

export default new ConfigService();
