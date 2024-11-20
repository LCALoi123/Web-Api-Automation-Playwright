import { expect, test } from '@playwright/test';

import * as Data from '../../../data/authentication/RegisterData';
import * as Constants from '../../../global/Constants';
import { API } from '../../../src/api/API';
import { ApiConnect } from '../../../src/types/commonTypes';

test.describe('/register', () => {
    let apiConnection: ApiConnect;

    test('Register a new user with valid data', async () => {
        const User = Data.RegisterDefault
        apiConnection = await API.makePOSTRequest(`${Constants.BASE_URL}/register`, {
            headers: Constants.DEFAULT_HEADER,
            data: User
        });

        const body = apiConnection.responseBody;
        console.log(`$responseBody: ${JSON.stringify(body)}`);

        expect(apiConnection.statusCode).toBe(200);
        expect(body['message']).toBe('Success');
        expect(body['response']['username']).toBe(User.username);
        expect(body['response']['firstName']).toBe(User.firstName);
        expect(body['response']['lastName']).toBe(User.lastName);
        expect(body['response']['email']).toBe(User.email);
        expect(body['response']['phone']).toBe(User.phone);

        const id: number = body['response']['id'];
        expect(id).toBeTruthy();
    });

    test('Register a new user with invalid phone number', async () => {
        const User = Data.RegisterInvalidPhone
        apiConnection = await API.makePOSTRequest(`${Constants.BASE_URL}/register`, {
            headers: Constants.DEFAULT_HEADER,
            data: User
        });
        const body = apiConnection.responseBody;

        expect(apiConnection.statusCode).toBe(422);
        expect(body['message']).toBe('The phone field format is invalid.');
    });

    test('Register a new user with existing username', async () => {
        const User = Data.RegisterExistingUserName
        apiConnection = await API.makePOSTRequest(`${Constants.BASE_URL}/register`, {
            headers: Constants.DEFAULT_HEADER,
            data: User
        });
        const body = apiConnection.responseBody;

        expect(apiConnection.statusCode).toBe(422);
        expect(body['message']).toBe('The username has already been taken.');
    });

    test('Register a new user by GET Request', async () => {
        const User = Data.RegisterDefault
        apiConnection = await API.makeGETRequest(`${Constants.BASE_URL}/register`, {
            headers: Constants.DEFAULT_HEADER,
            data: User
        });
        const body = apiConnection.responseBody;

        expect(apiConnection.statusCode).toBe(405);
        expect(body['message']).toBe('The GET method is not supported for route api/register. Supported methods: POST.');
    });

    test('Register a new user no data input', async () => {
        apiConnection = await API.makePOSTRequest(`${Constants.BASE_URL}/register`, {
            headers: Constants.DEFAULT_HEADER,
        });
        const body = apiConnection.responseBody;

        expect(apiConnection.statusCode).toBe(422);
    });

})