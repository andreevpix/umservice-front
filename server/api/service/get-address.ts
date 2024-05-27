export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const body = await readBody(event); // Получаем тело запроса
  const query = body.query;
console.log(config.DADATA_TOKEN, 'config.DADATA_TOKEN')
  const response = await $fetch('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${config.DADATA_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  return response;
});
