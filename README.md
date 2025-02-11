# Truepoker

True Poker is a zero knowledge poker table with instant payout and publicly verifiable fairness.

## Verifiable Fairness

Before dealing cards, a random seed is generated.

1. Each player contributes to a random seed by adding some entropy.
2. Each players contribution to the random seed remains hidden from other players.
3. A zero knowledge proof is generated to prove that each player's contribution was used in generating the final random seed.

Thus there is no way for any player to predict the random seed.

A deck of cards is shuffled multiple times using this random seed. 
A second zero knowledge proof is generated to prove that:

1. The random seed was used to shuffle the cards in a completely unpredictable way.
2. With each shuffle a card is swapped with another card from the deck.
3. The cards before and after each shuffle are indeed a complete and valid deck of cards.
4. The final shuffle is statistically random and each possible combination of cards is equally likely to occur.

Thus there is no way for any player to predict any card that will be dealt.

Once shuffled, the cards are hidden (turned face down) and their order is locked in place by making a public commitment on chain. 

Once the cards are locked in place, the dealer reveals (deals) the cards on the table to each player in a way such that:

1. The cards are visible only to the player who is dealt them.
2. Other players can publicly verify that the cards dealt are part of the locked in shuffled deck.
3. Other players can only see the number of cards dealt as well the position in the locked shuffled deck.
4. The dealer will deal cards to each player in the exact order they are locked in place to ensure no card is dealt favourably to any player in case any collusion has taken place as an added safety measure.

Once each player has been dealt cards,
the dealer can choose to publicly reveal the next cards from the deck in order to deal the public cards on the table as well as cards held by a player to determine the winner as the game progresses.

Knowledge of some of the cards will not be enough to determine the rest of the cards in the shuffled deck.

Public commitment of the shuffled deck, private reveal of cards to the players and public reveal of cards to all players combined with zero knowledge proofs of a fair random seed and shuffle ensure that the entire game is provably fair and no player has an advantage over other players.

## Instant Payout

There are no chips or tokens involved, instead the players make bets by directly transferring stable coin (USDC) to the dealers (verifiably autonomous) wallet, on a chain of their choice. After the game is over, the dealer will transfer the entire pot to the winner's wallet.

Since each transaction is on chain, all the transactions combined can be sufficient to prove each player action occured in correct order and as per the rules of the game and the winner was given the correct payout once the game ended.

## Verifiably Autonomous Dealer

The dealer uses a verifiably autonomous wallet that can be publicly verified to be only under the agents control and developers or any third party cannot have access to the private keys. This ensures the pot is safe and cannot be stolen while a game is in progress.

## Rake

The dealer will charge either 3% of the pot or $5, whichever is the lower amount before disbursing the pot to the winner.
This is to cover the cost of hosting the game and verifiable infrastructure as well as work on feature requests and further improvements in security and fairness. These costs can be expected to be changed in the future.

## Disclaimer

The contracts and zero knowledge circuits are not audited and can be subject to sophistacted attacks. 
Transactions made on chain are subject to security of the network and can be lost due to reasons beyond our control.
Truepoker is not responsible for any losses that might arise from playing on this platform.