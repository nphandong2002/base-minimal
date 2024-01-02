import { externalApiIns } from './api-instance';
import { createApiService } from '../utils';

const firstResourceService = createApiService(externalApiIns, '/resource-service');

type FetchStoresParams = {
  zipCode: string;
};

const fetchStoresByZipCode = (params: FetchStoresParams) =>
  firstResourceService.get('/facility/search', {
    params,
  });

const firstResourceApi = { fetchStoresByZipCode };

Object.freeze(firstResourceApi);

export { firstResourceApi };
