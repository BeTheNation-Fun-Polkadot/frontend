"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Image from "next/image";

export function ConnectWalletButton() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const [wasConnected, setWasConnected] = useState(false);

  // Track connection state changes to detect when a user has just connected or disconnected
  useEffect(() => {
    if (isConnected && !wasConnected) {
      // User just connected their wallet
      router.push("/dashboard");
    } else if (!isConnected && wasConnected) {
      // User just disconnected their wallet
      router.push("/");
    }
    setWasConnected(isConnected);
  }, [isConnected, wasConnected, router]);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    type="button"
                    className="
                      bg-[#3b82f6] 
                      hover:bg-[#2563eb] 
                      text-white 
                      px-8 
                      py-4 
                      rounded-full 
                      text-2xl
                      font-medium
                      transition-all 
                      duration-300
                      transform 
                      hover:scale-105
                      shadow-[0_0_15px_rgba(59,130,246,0.5)]
                      hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
                      relative
                      overflow-hidden
                      group
                    "
                    onClick={openConnectModal}
                  >
                    <span className="relative z-10">Connect Wallet</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    type="button"
                    className="btn-danger rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-600"
                    onClick={openChainModal}
                  >
                    Wrong Network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    className="relative inline-flex items-center gap-x-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 16,
                          height: 16,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            width={16}
                            height={16}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
