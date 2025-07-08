export default function Podcast() {
  const episodes = [
    { id: '1', title: 'Episode 1: Finding Peace', date: '2023-10-01' },
    { id: '2', title: 'Episode 2: Trusting God\'s Plan', date: '2023-10-08' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Podcast</h1>
      <p className="text-lg text-gray-700 mb-6">
        Listen to our weekly podcast episodes for spiritual growth and inspiration.
      </p>
      <div className="space-y-4">
        {episodes.map((episode) => (
          <div key={episode.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">{episode.title}</h2>
            <p className="text-gray-500 text-sm">Released on {episode.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}