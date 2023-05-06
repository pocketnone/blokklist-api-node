# README

## User Data Fetcher

This module is designed to fetch user data from a given API using a custom configuration object. It provides an easy-to-use interface to interact with the API and retrieve user information.

### Dependencies

- node-fetch: A dependency required for making HTTP requests to the API.

### Functions

#### GetUserData(config: Configuration, urlToRequestUser: string, limitReasons: number): Promise<any>

Fetches user data from the API.

- `config` (Configuration): The configuration object for the API.
- `urlToRequestUser` (string): The VRChat URL to request the user.
- `limitReasons` (number): Limit for the Reason field.

Returns a Promise that resolves with the user data.

### Classes

#### Configuration

Represents the configuration for interacting with the API. Manages authentication token and headers.

##### Constructor(authToken: string, userAgent: string)

Creates a new Configuration instance.

- `authToken` (string): The authentication token for the API.
- `userAgent` (string): The user agent to use for the API.

##### getHeaders(): { [key: string]: string }

Retrieves the headers required for interacting with the API.

Returns an object containing the headers.

## Usage

Here's an example of how to use the `GetUserData` function and the `Configuration` class:

```javascript
import { Configuration } from './configuration';
import { GetUserData } from './userDataFetcher';

const authToken = 'your_auth_token';
const userAgent = 'your_user_agent';
const config = new Configuration(authToken, userAgent);

const urlToRequestUser = 'https://vrchat.com/home/user/usr_xxxxxx';
const limitReasons = 5;

GetUserData(config, urlToRequestUser, limitReasons)
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

Make sure to replace `'your_auth_token'` and `'your_user_agent'` with your actual API authentication token and desired user agent.