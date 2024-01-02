import { AxiosInstance } from 'axios';
//
import { BaseApi } from 'src/shared/utils/axios';

export const createApiService = (axiosIns: AxiosInstance, servicePath: string) =>
  new BaseApi(axiosIns, servicePath);
