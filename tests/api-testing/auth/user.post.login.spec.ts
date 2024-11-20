import { expect, test } from '@playwright/test';

import * as Data from '../../../data/authentication/LoginData';
import * as Constants from '../../../global/Constants';
import { API } from '../../../src/api/API';
import { ApiConnect } from '../../../src/types/commonTypes';


test.describe('/login', () => {
    let apiConnection: ApiConnect;

    test('Login with username and password valid', async () => {
        const accountValid = Data.AccountDefault;
        apiConnection = await API.makePOSTRequest(`${Constants.BASE_URL}/login`, {
            headers: Constants.DEFAULT_HEADER,
            data: {
                'username': accountValid.username,
                'password': accountValid.password
            }
        });

        expect(apiConnection.statusCode).toBe(200);
        const token: string = apiConnection.responseBody['token'];
        expect(token).not.toBeFalsy();

    });

    test('Login with username invalid', async () => {
        const accountValid = Data.AccountInvalidUserName;
        apiConnection = await API.makePOSTRequest(`${Constants.BASE_URL}/login`, {
            headers: Constants.DEFAULT_HEADER,
            data: {
                'username': accountValid.username,
                'password': accountValid.password
            }
        });

        const responseBody = apiConnection.responseBody;
        expect(apiConnection.statusCode).toBe(400);
        expect(responseBody['message']).toBe('Login failed');
        expect(responseBody['errors']).toBe('User name not found');
    });

    test('Login with password invalid', async () => {
        const accountValid = Data.AccountInvalidPassword;
        apiConnection = await API.makePOSTRequest(`${Constants.BASE_URL}/login`, {
            headers: Constants.DEFAULT_HEADER,
            data: {
                'username': accountValid.username,
                'password': accountValid.password
            }
        });

        const responseBody = apiConnection.responseBody;
        expect(apiConnection.statusCode).toBe(400);
        expect(responseBody['message']).toBe('Login failed');
        expect(responseBody['errors']).toBe('Password is incorrect');
    });

    test('Login by GET request', async () => {
        const accountValid = Data.AccountDefault;
        apiConnection = await API.makeGETRequest(`${Constants.BASE_URL}/login`, {
            headers: Constants.DEFAULT_HEADER,
            data: {
                'username': accountValid.username,
                'password': accountValid.password
            }
        });

        const responseBody = apiConnection.responseBody;
        expect(apiConnection.statusCode).toBe(405);
    });
})