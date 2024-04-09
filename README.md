# NFT Marketplace - Part A

---

Collaboraters:
Atharva Kamble ([AtharvaKamble](https://github.com/AtharvaKamble))
NUID: 002831703

Nagendra Babu Shakamuri ([NagendraBabuShakamuri](https://github.com/NagendraBabuShakamuri))
NUID: 002771584

Rohit Panicker ([rohitpanicker06](https://github.com/rohitpanicker06))
NUID: 002791446

---

### Description

This project consists the web3 implementation of a NFT marketplace. The user the ability to connect/disconnect wallet, create NFTs, create collections and add NFTs to them.

**NFT:**
NFT or a non-fungible token is a unique digital asset that represents ownership or proof of authenticity of a specific item, such as artwork, music, videos, or virtual real estate, on a blockchain. Unlike cryptocurrencies like Bitcoin or Ethereum, which are fungible and interchangeable, each NFT token is distinct and cannot be replicated, making it valuable for digital ownership and collectibles

**Tech:**
We use React for frontend, `tailwindCSS` for styling, `shadcn.ui` for UI components, and Solidity for smart contracts. We leverage the OpenZeppelin `ERC721` set of interfaces to integrate NFTs. The smart contract is built and compiled with `forge`.

**Deployment:**
The React project is built using `npm run build` and then put on a IPFS node. This generates a IPFS hash that can be visited by browsers at the url in the form of `ipfs://{hash}`. Some browsers (most browsers excluding Brave) are not equipped to load IPFS content - but in that case one can use extensions OR use a IPFS to HTTPS gateway. Many services provide such gateways, they are in the form of `https://ipfs.io/ipfs/{hash}`

**Storage of NFTs:**
To store NFTs, we use IPFS or InterPlanetary File System, which is a decentralized file system that allows peer-to-peer storage and sharing of content. This ensures data integrity, and availability without relying solely on centralized servers. It uses content-addressed storage and distributed hash tables (DHTs) to create a resilient and censorship-resistant network for hosting files and applications.

`Pinata` is one such cloud provider that provides the pinning of files present in IPFS.
