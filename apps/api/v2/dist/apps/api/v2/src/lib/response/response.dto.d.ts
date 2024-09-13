export declare class BaseApiResponseDto<T> {
  status: string;
  data: T;
  constructor(status: string, data: T);
}
export declare class OAuthClientDto {
  clientId: string;
  clientSecret: string;
}
