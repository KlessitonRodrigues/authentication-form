export namespace AWS {
  export type LambdasProps = Record<string, string>;

  export type APIGatewayResponse = Record<string, string>;

  export type APIGatewayHandler = (event: any) => Promise<any>;
}
