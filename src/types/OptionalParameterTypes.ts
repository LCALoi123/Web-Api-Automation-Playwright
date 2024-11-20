import { APIRequestContext } from '@playwright/test';

export type GETRequestOptions = Parameters<APIRequestContext['get']>[1];
export type POSTRequestOptions = Parameters<APIRequestContext['post']>[1];
export type DELETERequestOptions = Parameters<APIRequestContext['delete']>[1];
export type PUTRequestOptions = Parameters<APIRequestContext['put']>[1];
export type PATCHRequestOptions = Parameters<APIRequestContext['patch']>[1];