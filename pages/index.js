import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
      <Head>
        <title>Solsnif – Sniff rugs before they sniff you</title>
        <meta name="description" content="Solsnif scans Solana meme coins for honeypots, rugpulls, and liquidity risks in real time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-700 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

      <header className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/10 z-10 relative">
        <div className="flex items-center text-xl font-bold">
          <Image src="/logo.png" alt="Solsnif Logo" width={40} height={40} className="mr-2" />
          Solsnif
        </div>
        <a
          href="https://twitter.com/solsnif"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-1 rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          Follow Us
        </a>
      </header>

      <main className="flex flex-col justify-center items-center text-center px-4 md:px-8 mt-20 z-10 relative">
        <p className="text-purple-300 text-sm mb-2">Sniff the rugs. Track the devs. →</p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Welcome to <span className="text-purple-500">Solsnif</span>
        </h1>
        <p className="text-white/70 max-w-2xl">
          Solsnif scans Solana meme coin launches to detect honeypots, fake devs, and potential rug pulls in real time.
        </p>

        <div className="mt-8 w-full max-w-xl bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-lg">
          <input
            type="text"
            placeholder="Enter token address, wallet ID or name..."
            className="w-full p-3 rounded-md bg-transparent border border-gray-700 text-white text-sm placeholder-gray-400 mb-4"
          />
          <div className="flex justify-between items-center">
            <button className="text-sm text-purple-300">Live rug alerts</button>
            <button className="text-sm text-purple-300">Top meme coins</button>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:brightness-110 shadow-md">
              Analyze
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
