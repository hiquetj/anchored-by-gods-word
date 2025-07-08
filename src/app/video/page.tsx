export default function Video() {
  const videos = [
    { id: '1', title: 'Video 1: The Power of Prayer', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: '2', title: 'Video 2: Living with Faith', url: 'https://www.youtube.com/embed/another-video-id' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Video</h1>
      <p className="text-lg text-gray-700 mb-6">
        Watch our video content to deepen your faith and understanding.
      </p>
      <div className="space-y-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}