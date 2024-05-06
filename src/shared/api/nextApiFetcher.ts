import { ofetch } from 'ofetch';

/**
 * For
 *  * type cast
 *  * apply NEXT_PUBLIC_API_HOST
 *  * hide ofetch
 */
export default async function nextApiFetcher<T>(path: string): Promise<T> {
  return await ofetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/${path}`);
}
