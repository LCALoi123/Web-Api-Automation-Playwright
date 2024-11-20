import { APIRequestContext, APIResponse, request } from '@playwright/test';
import { ApiConnect } from '../types/commonTypes';
import { DELETERequestOptions, GETRequestOptions, POSTRequestOptions, PUTRequestOptions, PATCHRequestOptions } from '../types/OptionalParameterTypes';

export class API {
    public static async makeGETRequest(url: string, options: GETRequestOptions): Promise<ApiConnect> {
        const requestContext: APIRequestContext = await request.newContext();
        const response: APIResponse = await requestContext.get(url, options);
        const body = await response.json();
        const statusCode: number = response.status();
        return { response, statusCode, responseBody: body } as ApiConnect;
    }


    public static async makePOSTRequest(url: string, options: POSTRequestOptions): Promise<ApiConnect> {
        const requestContext: APIRequestContext = await request.newContext();
        const response: APIResponse = await requestContext.post(url, options);
        const body = await response.json();
        const statusCode: number = response.status();
        return { response, statusCode, responseBody: body } as ApiConnect;
    }

    public static async makeDELETERequest(url: string, options: DELETERequestOptions): Promise<ApiConnect> {
        const requestContext: APIRequestContext = await request.newContext();
        const response: APIResponse = await requestContext.delete(url, options);
        const body = await response.json();
        const statusCode: number = response.status();
        return { response, statusCode, responseBody: body } as ApiConnect;
    }

    public static async makePUTRequest(url: string, options: PUTRequestOptions): Promise<ApiConnect> {
        const requestContext: APIRequestContext = await request.newContext();
        const response: APIResponse = await requestContext.put(url, options);
        const body = await response.json();
        const statusCode: number = response.status();
        return { response, statusCode, responseBody: body } as ApiConnect;
    }

    public static async makePATCHRequest(url: string, options: PATCHRequestOptions): Promise<ApiConnect> {
        const requestContext: APIRequestContext = await request.newContext();
        const response: APIResponse = await requestContext.patch(url, options);
        const body = await response.json();
        const statusCode: number = response.status();
        return { response, statusCode, responseBody: body } as ApiConnect;
    }

}