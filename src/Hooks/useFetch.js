// import { useCallback, useState } from "react";

// export const useFetch = (url, uploadData = null) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const sendRequest = useCallback(async () => {
//     setIsLoading(true);
//     try {
//       const res = uploadData
//         ? await fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(uploadData),
//           })
//         : fetch(url);

//       if (!res.ok) {
//         throw new Error("Request failed");
//       }

//       const data = await res.json();

//     } catch (err) {
//       setError(err);
//     }
//     setIsLoading(false);
//   }, []);

//   sendRequest();
//   return {
//     isLoading,
//     error,
//     data,
//   };
// };

// export default useFetch;
