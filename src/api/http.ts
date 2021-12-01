/**
 * Generic method that handles all HTTP methods and allows to pass expected return type.
 * The latter is useful since `fetch()` method does not support generic type variables.
 * @param {string} url - endpoint URL
 * @param {[RequestInit]} config - request configuration
 */
export async function http<TResponse>(
  url: string,
  config: RequestInit
): Promise<TResponse> {
  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.text();

  if (!data) {
    return null as unknown as TResponse;
  }

  return JSON.parse(data) as TResponse;
}

/**
 * HTTP Method - GET
 *
 * @param {string} url
 * @param {[RequestInit]} config
 */
export async function get<TResponse>(
  url: string,
  config?: RequestInit
): Promise<TResponse> {
  const { headers, ...rest } = config || {};

  const init = {
    headers,
    method: 'get',
    ...rest,
  };

  return await http<TResponse>(url, init);
}

/**
 * HTTP Method - POST
 *
 * @param {string} url
 * @param {TRequest} body
 * @param {[RequestInit]} config
 */
export async function post<TRequest, TResponse>(
  url: string,
  body: TRequest,
  config?: RequestInit
): Promise<TResponse> {
  const { headers, ...rest } = config || {};

  const init: RequestInit = {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method: 'post',
    ...rest
  };

  return await http<TResponse>(url, init);
}