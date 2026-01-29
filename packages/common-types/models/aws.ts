export namespace AWS {
  export type LambdasProps = Record<string, string>;

  export type APIGatewayResponse = {
    statusCode: number;
    body: string;
    headers: Record<string, string | number | boolean>;
  };

  export type APIGatewayHandler = (event: any) => Promise<any>;
}
