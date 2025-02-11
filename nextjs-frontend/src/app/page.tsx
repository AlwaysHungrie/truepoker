import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-row items-baseline justify-center">
        <Image
          src="/locked_spade.svg"
          alt="True Poker"
          width={53}
          height={64}
          className='-mr-2'
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/logo.svg" alt="True Poker" width={355} height={88} />
          <div className="p-4 rounded-lg flex flex-col items-center justify-center gap-4 font-mono ml-6">
            <ol className="">
              {[
                "1. No limit Texas Hold'em",
                '2. Truly on chain',
                '3. Instant payouts and provably fair',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
