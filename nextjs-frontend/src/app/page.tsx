'use client'

import ConnectWallet from '@/components/connectWallet/connectWallet'
import { CONFIG } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex w-full z-10 pt-4 px-4 items-start">
        <ConnectWallet />
        <div className="flex items-center gap-3 ml-auto pr-2">
          <Link href={CONFIG.TELEGRAM_URL} target="_blank">
            <Image
              src="/socials/telegram-blue.svg"
              alt="telegram"
              height={32}
              width={32}
              className="hover:opacity-80"
            />
          </Link>
          <Link href={CONFIG.X_URL} target="_blank">
            <Image
              src="/socials/twitter.svg"
              alt="x"
              height={32}
              width={32}
              className="hover:opacity-80"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-baseline justify-center gap-6 mt-auto">
        <Image
          src="/locked_spade.svg"
          alt="True Poker"
          width={53}
          height={64}
          className="-mr-2"
        />
        <div className="flex flex-col justify-center gap-2">
          <Image src="/logo.svg" alt="True Poker" width={355} height={88} />
          <div className="p-4 rounded-lg flex flex-col items-center justify-center gap-4 font-mono">
            <ol className="">
              {[
                '1. Truly on chain with instant payouts',
                '2. Verifiably autonomous dealers',
                '3. Provably fair with zero knowledge proofs',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-8">
        <button className="px-4 py-2 min-w-48 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300">
          Explore Tables
          <HiArrowNarrowRight className="inline-block ml-2" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-auto mb-4">
        {[
          {
            id: 'learn-more',
            type: 'link',
            label: 'Learn More',
            href: '/learn-more',
          },
          {
            id: 'separator1',
            type: 'separator',
          },
          {
            id: 'disclaimer',
            type: 'link',
            label: 'Disclaimer',
            href: '/disclaimer',
          },
          {
            id: 'separator2',
            type: 'separator',
          },
          {
            id: 'terms-of-service',
            type: 'link',
            label: 'Terms of Service',
            href: '/terms-of-service',
          },
        ].map(({ label, href, type, id }) => {
          if (type === 'link') {
            return (
              <Link
                href={href!}
                key={id}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                {label}
              </Link>
            )
          }
          return (
            <span key={id} className="text-sm text-gray-500">
              |
            </span>
          )
        })}
      </div>
    </div>
  )
}
