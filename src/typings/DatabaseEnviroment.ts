export interface DatabaseEnviroment {
    [key: string]: {
        client: string;
        connection: {
            filename?: string;
            host?: string;
            database?: string;
            user?: string;
            password?: string;
        };
    };
}
