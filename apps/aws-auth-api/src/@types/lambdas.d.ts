export namespace Lambdas {
  type APIHandler = (event: any) => Promise<any>;

  type LambdasProps = Record<string, string>;

  type APIGatewayResponse = any;
}
