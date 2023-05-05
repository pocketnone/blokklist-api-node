import { Configuration } from './configuration';
import fetch from 'node-fetch';

/**
 * Fetches user data from the API.
 *
 * @param config - The configuration object for the API.
 * @param urlToRequestUser - The VRChat URL to request the user.
 * @returns A Promise that resolves with the user data.
 */
async function GetUserData(
    config: Configuration,
    urlToRequestUser: string
): Promise<any> {
    const apiUrl = 'https://api.none.mba/user/request';
    const requestBody = {
        UserID: urlToRequestUser,
        Options: { LimitReasons: 20 },
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: config.getHeaders(),
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}


