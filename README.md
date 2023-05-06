# blokklist-api-node

A TypeScript NPM package for interacting with the Blokklist API.

## Installation

Install the package using npm:

```bash
npm install blokklist-api-node
```

## Usage

First, import the `Configuration` class and create a new instance with your API authentication token:

```typescript
import { Configuration } from 'blokklist-api-node';

const config = new Configuration('<Your-Auth-Token>');
```

Then, import the `GetUserData` class and create a new instance with your configuration:

```typescript
import { GetUserData } from 'blokklist-api-node';



GetUserData(config, 'link_to_vrchatUser')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## API

### Configuration

A class to manage the API configuration, including the authentication token and headers.

#### constructor(authToken: string)

Creates a new Configuration instance.

- authToken: The authentication token for the API.

#### getHeaders(): { [key: string]: string }

Retrieves the headers required for interacting with the API.

Returns an object containing the headers.

### GetUserData(config: Configuration, urlToRequestUser: string): Promise<any>

Fetches user data from the API.

- config: The configuration object for the API.
- urlToRequestUser: The URL to request the user.

Returns a Promise that resolves with the user data.

## License

MIT
