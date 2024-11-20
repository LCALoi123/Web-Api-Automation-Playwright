import { APIResponse } from '@playwright/test';

export interface ApiConnect {
    response: APIResponse;
    responseBody: object;
    statusCode: number;
}