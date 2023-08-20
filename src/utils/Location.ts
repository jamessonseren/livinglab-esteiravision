export function getUserCoordinates() {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        // Get user's coordinates using the Geolocation API
        navigator.geolocation.getCurrentPosition(
          function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // Call your validation function or perform other actions with the coordinates
            // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            resolve({ latitude, longitude });
          },
          function(error) {
            console.error('Error getting user coordinates:', error.message);
            reject(error.message);
          }
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

  export function validateCheckIn(latitude:number, longitude:number, allowedLatitude:number, allowedLongitude:number, radius:number) {
    const distance = calculateDistance(latitude, longitude, allowedLatitude, allowedLongitude);
    return distance <= radius;
  }
  
  // Function to calculate the distance between two coordinates using the Haversine formula
  export function calculateDistance(lat1:number, lon1:number, lat2:number, lon2:number) {
    const earthRadius = 6371; // Earth's radius in kilometers
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
  
    return distance;
  }
  
  // Convert degrees to radians
  export function degToRad(degrees:number) {
    return degrees * (Math.PI / 180);
  }
  
  // Example usage
//   const userLatitude = 37.7749;
//   const userLongitude = -122.4194;
//   const allowedLatitude = 37.7749; // Allowed check-in location latitude
//   const allowedLongitude = -122.4194; // Allowed check-in location longitude
//   const allowedRadius = 0.1; // Allowed radius in kilometers
  
//   const isValidCheckIn = validateCheckIn(userLatitude, userLongitude, allowedLatitude, allowedLongitude, allowedRadius);
//   console.log(`Is check-in valid? ${isValidCheckIn}`);
  
//   In this example:
  
//       The validateCheckIn function takes the user's latitude, longitude, allowed latitude, allowed longitude, and a radius as arguments. It calculates the distance between the user's location and the allowed location using the Haversine formula and checks if the distance is within the specified radius.
  
//       The calculateDistance function implements the Haversine formula to calculate the distance between two sets of latitude and longitude coordinates.
  
//       The degToRad function converts degrees to radians.
  
//   Keep in mind that this example is a basic illustration of how you can create a check-in validator with location in JavaScript. In a real-world scenario, you might want to handle various edge cases, provide better user feedback, and integrate this functionality into your application's user interface. Additionally, remember that the accuracy of geolocation can vary, so consider adding some tolerance to your distance comparisons.
//   User
//   How to get this coordenates in my web app
//   ChatGPT
  
//   To get the user's coordinates in a web app, you can use the Geolocation API provided by modern web browsers. Here's how you can use the Geolocation API to retrieve the user's current coordinates in a web app:
  
//   javascript
  
//   // Function to get user's coordinates
//   function getUserCoordinates() {
//     if ('geolocation' in navigator) {
//       // Get user's coordinates using the Geolocation API
//       navigator.geolocation.getCurrentPosition(
//         function(position) {
//           const latitude = position.coords.latitude;
//           const longitude = position.coords.longitude;
//           // Call your validation function or perform other actions with the coordinates
//           console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//         },
//         function(error) {
//           console.error('Error getting user coordinates:', error.message);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   }
  
//   // Call the function to get user's coordinates
//   getUserCoordinates();
  
//   In this example:
  
//       The getUserCoordinates function checks if the Geolocation API is available in the user's browser using the 'geolocation' in navigator check.
  
//       If the Geolocation API is available, the navigator.geolocation.getCurrentPosition function is called to retrieve the user's current position. This function takes two callback functions: one for success and one for error handling.
  
//       If the user's location is successfully retrieved, the latitude and longitude are extracted from the position.coords object, and you can proceed to use these coordinates for your check-in validation or any other purposes.
  
//       If there's an error in retrieving the user's location, the error callback is executed, and an error message is logged to the console.
  
//   Remember that users need to grant permission for your web app to access their location. Browsers will usually prompt the user to allow or deny location access when the getCurrentPosition function is called. Also, keep in mind that the accuracy of geolocation can vary, and you might want to handle cases where the location cannot be determined precisely.
//   User
//   Como aplicar fontes no next js
//   ChatGPT
  
//   Para aplicar fontes em um aplicativo Next.js, você pode seguir estes passos:
  
//       Escolha a Fonte:
//       Primeiro, escolha a fonte que você deseja usar no seu aplicativo. Você pode selecionar uma fonte do Google Fonts, Adobe Fonts, Font Squirrel ou outras fontes disponíveis.
  
//       Importe a Fonte:
//       No Next.js, você pode importar a fonte no arquivo pages/_app.js (ou _app.tsx se você estiver usando TypeScript). Você também pode fazer isso em um arquivo de estilo global, caso esteja utilizando um.
  
//       jsx
  
//   // pages/_app.js
//   import '../styles/globals.css'; // Importe seu arquivo de estilos globais
//   import '@fontsource/open-sans'; // Importe a fonte (exemplo usando fontsource)
  
//   function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
//   }
  
//   export default MyApp;
  
//   Certifique-se de instalar a biblioteca da fonte que você deseja usar. No exemplo acima, a biblioteca @fontsource/open-sans é importada, mas você precisa instalar essa dependência usando o npm ou o yarn.
  
//   Utilize a Fonte:
//   Após importar a fonte, você pode usá-la em seus estilos globais ou em componentes específicos. No exemplo abaixo, você pode aplicar a fonte em um componente específico.
  
//   jsx
  
//   import React from 'react';
//   import styles from './MyComponent.module.css';
  
//   function MyComponent() {
//     return (
//       <div className={styles.container}>
//         <h1 className={styles.title}>Aplicando Fontes com Next.js</h1>
//         <p className={styles.paragraph}>Esta é uma fonte customizada.</p>
//       </div>
//     );
//   }
  
//   export default MyComponent;
  
//   Estilos Globais:
//   Se você quiser aplicar a fonte em todo o aplicativo, você pode criar um arquivo de estilos globais (por exemplo, styles/globals.css) e aplicar a fonte lá.
  
//   css
  
//       /* styles/globals.css */
//       @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'); /* Importe a URL da fonte que você escolheu */
  
//       body {
//         font-family: 'Open Sans', sans-serif; /* Aplique a fonte aos elementos de texto do corpo do documento */
//       }
  
//   Lembre-se de substituir 'Open Sans' pela família de fontes que você escolheu. Além disso, ajuste os caminhos e nomes de arquivos de acordo com a estrutura do seu projeto.
  
//   Depois de realizar essas etapas, a fonte selecionada deve estar sendo aplicada no seu aplicativo Next.js. Certifique-se de que todas as importações e configurações estejam corretas, e lembre-se de que a aplicação de fontes pode afetar a aparência e a legibilidade do seu aplicativo, então escolha a fonte cuidadosamente.
//   User
//   where to publish my nodejs api fre
//   ChatGPT
  
//   There are several platforms where you can publish your Node.js API for free. Here are a few options:
  
//       Heroku: Heroku offers a free tier that allows you to deploy and host your Node.js applications. It's user-friendly and provides easy deployment with Git. Keep in mind that the free tier has limitations on resources and may sleep after a period of inactivity.
  
//       Vercel (formerly Zeit Now): Vercel provides serverless deployment for Node.js applications. It's particularly well-suited for static sites and serverless functions. The free tier offers a generous amount of resources, but it's best suited for smaller projects.
  
//       Netlify: Netlify is another platform that specializes in static site deployment and serverless functions. It's easy to use and has a free tier that includes continuous deployment and custom domains.
  
//       Glitch: Glitch is a platform designed for quickly building and deploying web applications, including Node.js APIs. It offers free hosting, and you can remix projects created by others to get started quickly.
  
//       GitHub Pages: If your API is more front-end focused or can be packaged with a static site, GitHub Pages is a great option. You can use GitHub Actions to deploy your Node.js API to GitHub Pages for free.
  
//       Firebase Cloud Functions: While Firebase itself is not entirely free, Firebase Cloud Functions offer a free usage tier that allows you to deploy serverless functions, including Node.js APIs, without incurring significant costs.
  
//   When selecting a platform, consider factors such as your application's resource requirements, ease of deployment, scalability needs, and any limitations imposed by the free tiers. Also, make sure to review the pricing details carefully, as some platforms may offer free tiers with limitations that might not fit your project's requirements in the long term.
//   User
//   i m getting this erro when trying to get the coordinates client.js:1  Error getting user coordinates: Network location provider at 'https://inference.location.live.net/' : Did not provide a good position fix.
//   console.error @ client.js:1
//   window.console.error @ setup-hydration-warning.js:18
//   eval @ Location.ts:13
//   ChatGPT
  
//   The error message you're encountering, "Network location provider at 'https://inference.location.live.net/' : Did not provide a good position fix," indicates that there was an issue with obtaining the user's location using the network-based location provider. This could be due to various reasons, such as the device's location services being disabled, poor network connectivity, or issues with the network-based location provider itself.
  
//   Here are a few steps you can take to troubleshoot and potentially resolve this issue:
  
//       Check Location Services: Ensure that the device you are testing on has location services enabled. Depending on the device and operating system, you might need to enable location services in the device's settings.
  
//       Test in Different Environments: Try testing the geolocation feature in different environments, such as on different devices or in different locations. Sometimes, location accuracy can be affected by factors like the device's hardware or the quality of network connectivity.
  
//       Try a Different Browser: Different browsers might handle geolocation differently. Try testing your application in a different browser to see if the issue persists.
  
//       Check Network Connection: Make sure that the device has a stable network connection. Location services might be less accurate or unavailable when the network connection is weak.
  
//       Check Browser Permissions: Some browsers might ask for permission to access location information. Make sure that you've granted permission for your application to access the device's location.
  
//       Test in a Different Location: Sometimes, certain locations might have issues with geolocation accuracy due to interference or limitations of the network-based location provider. Try testing in a different location to see if the issue persists.
  
//   If the issue still persists after trying these steps, it's possible that there might be a temporary issue with the network-based location provider or other factors beyond your control. Keep in mind that the accuracy of geolocation can vary based on multiple factors, and there might be instances where the geolocation service is not able to provide accurate results.
//   User
//   transforme essa função em uma promise export default function getUserCoordinates() {
//       let latitude = 0;
//       let longitude = 0;
  
//       if ('geolocation' in navigator) {
//         // Get user's coordinates using the Geolocation API
//         navigator.geolocation.getCurrentPosition(
//           function(position) {
//               latitude = position.coords.latitude;
//               longitude = position.coords.longitude;
//             // Call your validation function or perform other actions with the coordinates
//             console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//           },
//           function(error) {
//             console.error('Error getting user coordinates:', error.message);
//           }
//         );
//         return {latitude:latitude, longitude:longitude}
//       } else {
//           return {erro:"error"};
        
//       }
//     }
//   ChatGPT
  
//   Sure, here's how you can transform the getUserCoordinates function into a Promise-based version:
  
//   javascript
  
//   export default function getUserCoordinates() {
//     return new Promise((resolve, reject) => {
//       if ('geolocation' in navigator) {
//         // Get user's coordinates using the Geolocation API
//         navigator.geolocation.getCurrentPosition(
//           function(position) {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             // Call your validation function or perform other actions with the coordinates
//             console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//             resolve({ latitude, longitude });
//           },
//           function(error) {
//             console.error('Error getting user coordinates:', error.message);
//             reject(error.message);
//           }
//         );
//       } else {
//         reject('Geolocation is not supported by this browser.');
//       }
//     });
//   }
  
//   In this version:
  
//       The getUserCoordinates function returns a new Promise that wraps the geolocation logic.
  
//       Inside the Promise, the getCurrentPosition function's success callback resolves the Promise with the retrieved coordinates.
  
//       The error callback rejects the Promise with the error message.
  
//       If geolocation is not supported by the browser, the Promise is rejected with a message indicating that geolocation is not supported.
  
//   You can use this Promise-based version of the function like this:
  
//   javascript
  
//   import getUserCoordinates from './path-to-your-module';
  
//   getUserCoordinates()
//     .then(coordinates => {
//       console.log('Coordinates:', coordinates);
//       // Call your validation function or perform actions with the coordinates
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       // Handle the error
//     });
  
//   Remember that geolocation is subject to user permission, and the behavior might differ between browsers. Users will usually be prompted to allow or deny location access when the function is called.
//   User
//   why my coordinates is changing in the same local
//   ChatGPT
  
//   If you're noticing that the coordinates you're obtaining using the Geolocation API are changing even when you're in the same location, there could be a few reasons for this behavior:
  
//       GPS Drift: GPS signals can have variations in accuracy due to factors like atmospheric conditions and signal interference. This can cause minor fluctuations in reported coordinates, even when you're in the same physical location.
  
//       Device Movement: Even if you feel like you're stationary, the device might be moving slightly due to factors like vibrations, positioning changes, or the way the device's location sensors are interpreting data.
  
//       Location Services: Some devices use multiple sources of location data, such as GPS, Wi-Fi networks, and cell towers, to determine the user's position. The device might switch between these sources, leading to slight changes in reported coordinates.
  
//       Accuracy Settings: The accuracy of geolocation can be influenced by settings on the device and in the browser. High accuracy settings might use more resources to provide a more accurate reading, while lower accuracy settings might result in less accurate readings.
  
//       Device Hardware: Different devices have different GPS chips and sensors, and their accuracy can vary. Some devices might be more prone to providing slightly different coordinates.
  
//   To mitigate these issues and improve the accuracy of geolocation, you can consider the following:
  
//       Allow Time for Stabilization: If you're testing in the same location, allow some time for the device to stabilize its readings. The reported coordinates might become more consistent after a short period.
  
//       Use Higher Accuracy Settings: If your app allows it, you can use higher accuracy settings when requesting geolocation. This might provide more accurate and stable coordinates.
  
//       Combine Multiple Readings: If precision is critical, consider taking multiple readings and averaging the results to reduce small variations.
  
//       Verify with Other Methods: If possible, use other methods or apps to verify the accuracy of the coordinates you're obtaining from your application.
  
//       Test in Different Locations: Sometimes, certain locations might have better or worse GPS signal reception, leading to varying accuracy. Test in different environments to see if the issue persists.
  
//   Keep in mind that while geolocation can provide reasonably accurate results, it's not always perfectly stable, especially in environments with challenging signal conditions.
//   User
//   How to make a check in validation in next js step by step
//   ChatGPT
  
//   Sure, I can guide you through the process of creating a simple check-in validation feature in a Next.js application step by step.
  
//   In this example, we'll use the Geolocation API to get the user's current location and validate whether they're checking in from a specific location.
  
//   Step 1: Set Up a Next.js Project
  
//   Make sure you have Node.js and npm installed. If not, you can download and install them from the official website.
  
//   Open your terminal and run the following commands:
  
//   bash
  
//   npx create-next-app check-in-validation
//   cd check-in-validation
  
//   Step 2: Create the Check-In Page
  
//   Create a new file named checkin.js inside the pages directory.
  
//   jsx
  
//   // pages/checkin.js
//   import { useState } from 'react';
  
//   export default function CheckIn() {
//     const [status, setStatus] = useState('');
  
//     const handleCheckIn = async () => {
//       try {
//         const response = await fetch('/api/checkin');
//         const data = await response.json();
  
//         if (data.success) {
//           setStatus('Check-in successful');
//         } else {
//           setStatus('Check-in failed');
//         }
//       } catch (error) {
//         setStatus('Error occurred');
//       }
//     };
  
//     return (
//       <div>
//         <h1>Check-In Validation</h1>
//         <button onClick={handleCheckIn}>Check In</button>
//         <p>Status: {status}</p>
//       </div>
//     );
//   }
  
//   Step 3: Create the API Route
  
//   Create a new file named checkin.js inside the pages/api directory.
  
//   jsx
  
//   // pages/api/checkin.js
//   export default function handler(req, res) {
//     const allowedLatitude = 37.7749; // Allowed check-in location latitude
//     const allowedLongitude = -122.4194; // Allowed check-in location longitude
//     const allowedRadius = 0.1; // Allowed radius in kilometers
  
//     if ('geolocation' in req.headers) {
//       const { latitude, longitude } = JSON.parse(req.headers.geolocation);
//       const distance = calculateDistance(latitude, longitude, allowedLatitude, allowedLongitude);
  
//       if (distance <= allowedRadius) {
//         res.status(200).json({ success: true });
//       } else {
//         res.status(200).json({ success: false });
//       }
//     } else {
//       res.status(400).json({ success: false });
//     }
//   }
  
//   function calculateDistance(lat1, lon1, lat2, lon2) {
//     // Implementation of the Haversine formula (similar to previous responses)
//   }
  
//   export const config = {
//     api: {
//       bodyParser: false,
//     },
//   };
  
//   Step 4: Start the Development Server
  
//   Run the development server with the following command:
  
//   bash
  
//   npm run dev
  
//   Visit http://localhost:3000/checkin in your browser. When you click the "Check In" button, the app will request the user's geolocation and validate it against the allowed location.
  
//   Please note that this example is a simplified version. In a real-world scenario, you'd likely handle user permissions, loading indicators, and error handling more thoroughly. Additionally, the accuracy of geolocation can vary, so you might want to incorporate some tolerance when comparing distances.
//   User
//   Api de checkin por localização
//   ChatGPT
  
//   Claro! Aqui está um exemplo de como criar uma API de check-in com base na localização usando Next.js e a Geolocation API. Neste exemplo, usaremos uma rota API para lidar com o processo de check-in com base na localização do usuário.
  
//   Passo 1: Configurar um Projeto Next.js
  
//   Se você ainda não tem um projeto Next.js configurado, siga os passos abaixo:
  
//       Instale o Next.js globalmente (se ainda não estiver instalado):
  
//   bash
  
//   npm install -g create-next-app
  
//       Crie um novo aplicativo Next.js:
  
//   bash
  
//   create-next-app checkin-api
//   cd checkin-api
  
//   Passo 2: Criar a Rota de API de Check-In
  
//   Crie um arquivo chamado checkin.js na pasta pages/api.
  
//   jsx
  
//   // pages/api/checkin.js
//   export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//       return res.status(405).end(); // Método não permitido
//     }
  
//     const { latitude, longitude } = req.body;
  
//     // Verifique a localização aqui (use suas próprias coordenadas permitidas)
//     const allowedLatitude = 37.7749; // Latitude permitida
//     const allowedLongitude = -122.4194; // Longitude permitida
//     const allowedRadius = 0.1; // Raio permitido em quilômetros
  
//     const distance = calculateDistance(latitude, longitude, allowedLatitude, allowedLongitude);
  
//     if (distance <= allowedRadius) {
//       res.status(200).json({ success: true });
//     } else {
//       res.status(200).json({ success: false });
//     }
//   }
  
//   function calculateDistance(lat1, lon1, lat2, lon2) {
//     // Implemente a fórmula de Haversine para calcular a distância (como mencionado em respostas anteriores)
//   }
  
//   Passo 3: Criar uma Página de Teste de Check-In
  
//   Crie uma página para testar a rota de API de check-in.
  
//   jsx
  
//   // pages/index.js
//   import { useState } from 'react';
  
//   export default function Home() {
//     const [status, setStatus] = useState('');
//     const [latitude, setLatitude] = useState('');
//     const [longitude, setLongitude] = useState('');
  
//     const handleCheckIn = async () => {
//       try {
//         const response = await fetch('/api/checkin', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ latitude, longitude }),
//         });
  
//         const data = await response.json();
  
//         if (data.success) {
//           setStatus('Check-in bem-sucedido');
//         } else {
//           setStatus('Check-in falhou');
//         }
//       } catch (error) {
//         setStatus('Ocorreu um erro');
//       }
//     };
  
//     return (
//       <div>
//         <h1>Teste de Check-In</h1>
//         <div>
//           Latitude: <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
//         </div>
//         <div>
//           Longitude: <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
//         </div>
//         <button onClick={handleCheckIn}>Fazer Check-In</button>
//         <p>Status: {status}</p>
//       </div>
//     );
//   }
  
//   Passo 4: Inicie o Servidor de Desenvolvimento
  
//   Inicie o servidor de desenvolvimento com o seguinte comando:
  
//   bash
  
//   npm run dev
  
//   Acesse http://localhost:3000 em seu navegador. Insira as coordenadas de latitude e longitude e clique no botão "Fazer Check-In" para testar a rota de API de check-in com base na localização.
  
//   Este é apenas um exemplo básico para demonstrar o conceito. Em uma aplicação real, você precisaria lidar com permissões de localização, fornecer um feedback mais detalhado ao usuário e implementar um mecanismo mais robusto de verificação de localização.
//   User
//   Formas de fazer checkin por localização sem manusear coordenadas
//   ChatGPT
  
//   Se você deseja fazer check-in por localização sem precisar que os usuários insiram manualmente as coordenadas, pode explorar as APIs de localização disponíveis em muitos navegadores modernos. A abordagem mais comum é usar a API de Geolocalização do HTML5 para obter a localização atual do dispositivo do usuário.
  
//   Aqui está um exemplo de como você pode fazer isso:
  
//   Passo 1: Criar a Página de Check-In
  
//   Crie uma página de check-in onde você mostrará ao usuário a localização atual e permitirá que eles façam o check-in.
  
//   jsx
  
//   // pages/checkin.js
//   import { useState, useEffect } from 'react';
  
//   export default function CheckIn() {
//     const [status, setStatus] = useState('');
//     const [userLocation, setUserLocation] = useState(null);
  
//     useEffect(() => {
//       // Obtenha a localização do usuário ao carregar a página
//       getUserLocation();
//     }, []);
  
//     const getUserLocation = () => {
//       if ('geolocation' in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           function(position) {
//             const { latitude, longitude } = position.coords;
//             setUserLocation({ latitude, longitude });
//           },
//           function(error) {
//             console.error('Erro ao obter a localização:', error.message);
//           }
//         );
//       } else {
//         console.error('Geolocalização não é suportada neste navegador.');
//       }
//     };
  
//     const handleCheckIn = () => {
//       // Verifique a localização do usuário e faça o check-in se estiver dentro de uma área permitida
//       if (userLocation) {
//         // Lógica de validação e check-in aqui
//         setStatus('Check-in bem-sucedido');
//       } else {
//         setStatus('Aguardando localização...');
//       }
//     };
  
//     return (
//       <div>
//         <h1>Fazer Check-In por Localização</h1>
//         {userLocation ? (
//           <p>Localização atual: Latitude {userLocation.latitude}, Longitude {userLocation.longitude}</p>
//         ) : (
//           <p>Aguardando localização...</p>
//         )}
//         <button onClick={handleCheckIn}>Fazer Check-In</button>
//         <p>Status: {status}</p>
//       </div>
//     );
//   }
  
// //   Neste exemplo, usamos a useEffect hook para obter a localização do usuário assim que a página for carregada. Quando o usuário clica no botão "Fazer Check-In", você pode executar sua lógica de validação com base na localização atual do usuário.
  
// //   Lembre-se de que a precisão da localização pode variar e a geolocalização depende da permissão do usuário para acessar sua localização. Certifique-se de testar a funcionalidade em diferentes dispositivos e ambientes para garantir um comportamento consistente.
  