'use client'

import { ConnectedWallet, usePrivy, useWallets } from '@privy-io/react-auth'
import { useDialogStore } from '@/providers/dialog'
import WalletDetails from '@/components/dialogs/walletDetails'
import { useState, useEffect, useCallback } from 'react'
import { ethers } from 'ethers'
import { HiArrowRight } from 'react-icons/hi2'
import { formatWeiBalance, formatAddress } from '@/utils/formatting'
import Avatar from '@/components/avatar'

export default function ConnectWallet() {
  const { login, ready, authenticated, user } = usePrivy()
  const { wallets } = useWallets()
  const { openDialog } = useDialogStore()
  const [balanceInWei, setBalanceInWei] = useState<bigint>()

  const activeWallet = wallets[0]

  const getBalance = useCallback(async (wallet: ConnectedWallet) => {
    const provider = await wallet.getEthereumProvider()
    const ethersProvider = new ethers.BrowserProvider(provider)
    const balanceInWei = await ethersProvider.getBalance(wallet?.address)
    setBalanceInWei(balanceInWei)
  }, [])

  useEffect(() => {
    if (!activeWallet) {
      return
    }

    getBalance(activeWallet)
  }, [activeWallet, authenticated, ready, getBalance])

  const showWalletDetails = useCallback(() => {
    console.log('showWalletDetails', authenticated, activeWallet?.address)
    if (!authenticated || !activeWallet?.address) {
      return
    }
    console.log('openDialog')

    openDialog(<WalletDetails />)
  }, [activeWallet, authenticated, openDialog])

  const onClick = () => {
    if (authenticated && activeWallet?.address) {
      showWalletDetails()
    } else {
      console.log('login')
      login()
    }
  }

  const renderButton = () => {
    if (authenticated && activeWallet?.address) {
      return (
        <button
          onClick={onClick}
          className="group px-2 py-2 h-[42px] rounded-full bg-black text-white max-w-[224px] w-full flex items-center hover:bg-black/80 transition-colors duration-300"
        >
          <Avatar height={26} width={26} address={user?.wallet?.address} />
          <div className="text-white text-xs flex gap-2 mx-auto px-2">
            <span className="text-center">
              {formatAddress(activeWallet?.address)}
            </span>
            {/* <span className="text-center">(</span> */}
            <span className="text-center">
              ({formatWeiBalance(balanceInWei)} ETH)
            </span>
          </div>
        </button>
      )
    }

    return (
      <button
        onClick={onClick}
        disabled={!ready}
        className="group px-2 py-2 h-[42px] rounded-full bg-black text-white max-w-[224px] w-full flex items-center hover:bg-black/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Avatar height={26} width={26} />
        <div className="ml-2" />
        <span className="text-white text-sm font-bold mx-auto">
          Connect Wallet
        </span>
        <div className="ml-2" />
        <div className="rounded-full w-[26px] h-[26px] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
          <HiArrowRight className="text-white group-hover:text-black" />
        </div>
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      {renderButton()}
      {authenticated && activeWallet?.address && (
        <div className="flex text-gray-500 text-xs justify-center">
          <span className="hover:text-black cursor-pointer" onClick={onClick}>
            {/* @Always_Hungrie_ */}
            No Username
          </span>
          <span className="mx-2">|</span>
          <span className="hover:text-black cursor-pointer" onClick={onClick}>
            Change
          </span>
        </div>
      )}
    </div>
  )
}
