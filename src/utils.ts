export async function fetchArrayToJson<T>(urls: string[])
{
  const promises = urls.map(url => fetch(url));
  const responses = await Promise.all(promises);
  const jsonPromises = responses.map(response => response.json());
  const results: T[] = await Promise.all(jsonPromises);

  return results;
};
