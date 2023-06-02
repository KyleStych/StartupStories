export default async function getYouTubeData(url) {
  let error;

  const response = await fetch(url, {
    method: 'GET',
    headers: {}
  });

  const youTubeResponse = await response.json().catch(
    // set error variable to response error
    e => (error = e)
  );

  // Return error if invalid URL or other error
  if (error) return error;

  return youTubeResponse;
}
