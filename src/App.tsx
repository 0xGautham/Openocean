import WalletConnect from "./component/walletconnect";

function App() {
  return (
    <div className="App">
      <h1>Your Wallet App</h1>
      <WalletConnect />
    </div>
  );
}

export default App;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Web3 from 'web3'; // Make sure to install the 'web3' package

// function App() {
//   const [data, setData] = useState<any>(null);
//   const [showTokenList, setShowTokenList] = useState<boolean>(false);
//   const [walletConnected, setWalletConnected] = useState<boolean>(false);

//   useEffect(() => {
//     // Define the Axios request configuration
//     const config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: 'https://open-api.openocean.finance/v3/avax/tokenList',
//       headers: {
//         Cookie: '__cflb=0H28v9KzzEdj11imvL2rdb9wNdY43F5Yrv6wJiU9ajP',
//       },
//     };

//     // Make the Axios request and update the state with the response data
//     axios
//       .request(config)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const toggleTokenList = () => {
//     setShowTokenList(!showTokenList);
//   };

//   const connectWallet = async () => {
//     if (typeof window.ethereum !== 'undefined') {
//       try {
//         // Request access to the user's MetaMask wallet
//         await window.ethereum.request({ method: 'eth_requestAccounts' });

//         // Create a Web3 instance using the MetaMask provider
//         const web3 = new Web3(window.ethereum);

//         // Check if the user is connected and get their address
//         const accounts = await web3.eth.getAccounts();

//         if (accounts.length > 0) {
//           setWalletConnected(true);
//         }
//       } catch (error) {
//         console.error(error);
//         setWalletConnected(false);
//       }
//     } else {
//       console.error('MetaMask extension not found');
//       setWalletConnected(false);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Token List from OpenOcean API</h1>
//       {walletConnected ? (
//         <>
//           <button onClick={toggleTokenList}>Toggle Token List</button>
//           {showTokenList && data ? (
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           ) : (
//             <p>Click the button to display the token list.</p>
//           )}
//         </>
//       ) : (
//         <button onClick={connectWallet}>Connect Wallet</button>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { MetaMask } from '@openocean.finance/wallet'; // Import MetaMask from the wallet package

// function App() {
//   const [data, setData] = useState<any>(null);
//   const [showTokenList, setShowTokenList] = useState<boolean>(false);
//   const [walletConnected, setWalletConnected] = useState<boolean>(false);

//   useEffect(() => {
//     // Define the Axios request configuration
//     const config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: 'https://open-api.openocean.finance/v3/avax/tokenList',
//       headers: {
//         Cookie: '__cflb=0H28v9KzzEdj11imvL2rdb9wNdY43F5Yrv6wJiU9ajP',
//       },
//     };

//     // Make the Axios request and update the state with the response data
//     axios
//       .request(config)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const toggleTokenList = () => {
//     setShowTokenList(!showTokenList);
//   };

//   const connectWallet = async () => {
//     const myWallet = new MetaMask();
//     try {
//       const params = { chainId: 5 }; // Set the desired chainId
//       const result = await myWallet.requestConnect(params.chainId);

//       if (result === 'connected') {
//         setWalletConnected(true);
//       }
//     } catch (error) {
//       console.error(error);
//       setWalletConnected(false);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Token List from OpenOcean API</h1>
//       {walletConnected ? (
//         <>
//           <button onClick={toggleTokenList}>Toggle Token List</button>
//           {showTokenList && data ? (
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           ) : (
//             <p>Click the button to display the token list.</p>
//           )}
//         </>
//       ) : (
//         <button onClick={connectWallet}>Connect Wallet</button>
//       )}
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { MetaMask } from '@openocean.finance/wallet';

// function App() {
//   const [data, setData] = useState<any>(null);
//   const [showTokenList, setShowTokenList] = useState<boolean>(false);
//   const [walletConnected, setWalletConnected] = useState<boolean>(false);

//   useEffect(() => {
//     // Define the Axios request configuration
//     const config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: 'https://open-api.openocean.finance/v3/avax/tokenList',
//       headers: {
//         Cookie: '__cflb=0H28v9KzzEdj11imvL2rdb9wNdY43F5Yrv6wJiU9ajP',
//       },
//     };

//     // Make the Axios request and update the state with the response data
//     axios
//       .request(config)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const toggleTokenList = () => {
//     setShowTokenList(!showTokenList);
//   };

//   const connectWallet = async () => {
//     const myWallet = new MetaMask();
//     const result = await myWallet.requestConnect({ chainId: 5 }); // Set the correct chainId

//     if (result.isConnected) {
//       setWalletConnected(true);
//     } else {
//       setWalletConnected(false);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Token List from OpenOcean API</h1>
//       {walletConnected ? (
//         <>
//           <button onClick={toggleTokenList}>Toggle Token List</button>
//           {showTokenList && data ? (
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           ) : (
//             <p>Click the button to display the token list.</p>
//           )}
//         </>
//       ) : (
//         <button onClick={connectWallet}>Connect Wallet</button>
//       )}
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";
// import { EnumChains, EnumWalletName, MetaMask } from "@openocean.finance/wallet";

// // Create a mapping from EnumChains to chain IDs
// const chainIdMap: Record<EnumChains, number> = {
//   [EnumChains.BSC]: 56, // Replace with the correct chain ID for BSC
//   [EnumChains.ETH]: 1, // Replace with the correct chain ID for ETH
//   [EnumChains.POLYGON]: 137, // Replace with the correct chain ID for Polygon
//   // Add more mappings as needed
// } as const;

// function App() {
//   const [myWallet, setMyWallet] = useState<any | null>(null);
//   const [chain, setChain] = useState<{ chainName: string } | null>(null);

//   const connectWallet = async (chainName: EnumChains, walletName: EnumWalletName) => {
//     try {
//       // Initialize MetaMask wallet
//       const myWallet = new MetaMask();

//       // Convert EnumChains value to chain ID
//       const chainId = chainIdMap[chainName];

//       // Call requestConnect with chainId
//       const result = await myWallet.requestConnect(chainId);

//       if (result === "success") {
//         // Wallet is connected, you can perform additional actions here
//         setMyWallet(myWallet);
//         setChain({ chainName });
//         console.log("Wallet connected:", myWallet);
//       } else {
//         console.error("Wallet connection failed.");
//         setMyWallet(null);
//         setChain(null);
//       }
//     } catch (error) {
//       console.error("Error connecting wallet:", error);
//       setMyWallet(null);
//       setChain(null);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>OpenOcean Wallet Connection</h1>
//       {myWallet ? (
//         <div>
//           <p>Connected Wallet: {myWallet.name}</p>
//           <p>Wallet Address: {myWallet.address}</p>
//           <p>Chain: {chain?.chainName}</p>
//         </div>
//       ) : (
//         <div>
//           <p>No wallet connected</p>
//           <button onClick={() => connectWallet(EnumChains.BSC, EnumWalletName.MetaMask)}>
//             Connect Wallet
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import { MetaMask } from "@openocean.finance/wallet";

// function App() {
//   const [myWallet, setMyWallet] = useState<any | null>(null);
//   const [, setChain] = useState<{ chainName: string } | null>(null);

//   const connectWallet = async () => {
//     try {
//       const myWallet = new MetaMask();
//       const result = await myWallet.requestConnect();

//       if (result === "success") {
//         setMyWallet(myWallet);
//         // Wallet is connected, you can perform additional actions here
//         console.log("Wallet connected:", myWallet);
//       }
//     } catch (error) {
//       console.error("Error connecting wallet:", error);
//       setMyWallet(null);
//       setChain(null);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>OpenOcean Wallet Connection</h1>
//       {myWallet ? (
//         <div>
//           <p>Connected Wallet: {myWallet.name}</p>
//           <p>Wallet Address: {myWallet.address}</p>
//         </div>
//       ) : (
//         <div>
//           <p>No wallet connected</p>
//           <button onClick={connectWallet}>Connect Wallet</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

