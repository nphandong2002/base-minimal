import axios from 'axios';
import { HTTP_HEADERS } from 'src/shared/constants';
//

const externalApiIns = axios.create({
  baseURL: 'http://external_service',
  headers: {
    [HTTP_HEADERS.ContentType]: 'application/json',
  },
});

externalApiIns.interceptors.request.use((config) => {
  // if (ENV_MODE === 'development') {
  //   config.headers!.Authorization = ''; //? Let's dummy token into here in Dev
  //   return config;
  // }
  const a = 'zyx';
  return config;
});

export { externalApiIns };
