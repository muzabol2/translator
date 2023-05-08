export enum HttpMethod {
   GET = 'get',
   POST = 'post',
   PUT = 'put',
   PATCH = 'patch',
   DELETE = 'delete',
}

export type OnSuccess<Response> = (response: Response) => void
export type OnError = () => void
