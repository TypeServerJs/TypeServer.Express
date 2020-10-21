import {IServerInfrastructure, EndpointInfo} from '@type-server/typeserver';

class TypeServerExpressServer implements IServerInfrastructure {

    name(): string {
        return "express";
    }

    listen(endpoint: EndpointInfo): void {
        
    }

    async start(): Promise<void> {
        
    }

    async stop(): Promise<void> {
        
    }
}

export const TypeServerExpress = new TypeServerExpressServer();