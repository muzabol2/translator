export enum HttpMethod {
   GET = 'get',
   POST = 'post',
   PUT = 'put',
   PATCH = 'patch',
   DELETE = 'delete',
}

export type onSuccess<Response> = (response: Response) => void
export type onError = () => void
