export default function TestIframe() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-4 text-2xl font-bold">Iframe 测试页面</h1>

      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">GitHub Stats (gitch.art)</h2>
        <iframe
          src="https://www.gitch.art/api/og/yi-echo?color=2da44e"
          width="1200"
          height="180"
          frameBorder="0"
          scrolling="no"
          className="w-full max-w-full border"
          title="GitHub Stats"
        />
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">测试 iframe (Google)</h2>
        <iframe
          src="https://www.google.com"
          width="800"
          height="400"
          frameBorder="1"
          className="w-full max-w-full border"
          title="Google Test"
        />
      </div>
    </div>
  )
}
