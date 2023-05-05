/**
 * Represents the configuration for interacting with the API.
 * Manages authentication token and headers.
 */
export class Configuration {
    private authToken: string;
    private headers: { [key: string]: string };
    private userAgent: string;

    /**
     * Creates a new Configuration instance.
     *
     * @param authToken - The authentication token for the API.
     * @param userAgent - The user agent to use for the API.
     */
    constructor(authToken: string, userAgent: string) {
        this.authToken = authToken;
        this.userAgent = userAgent;
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authToken}`,
            'User-Agent': `${this.userAgent}`,
        };
    }
    /**
     * Retrieves the headers required for interacting with the API.
     *
     * @returns An object containing the headers.
     */
    public getHeaders(): { [key: string]: string } {
        return this.headers;
    }
}
