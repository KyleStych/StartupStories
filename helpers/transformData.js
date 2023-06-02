export default async function transformData(data) {
  let transformedData = [];

  data.forEach(d => {
    //This is complete pseudo code and not representative
    // of the actual YouTube API data response
    transformedData.push([
      d.videoUrl,
      d.thumbnailUrl,
      d.videoTitle,
      d.videoDescription
      // etc
    ]);
  });

  return transformedData;
}
