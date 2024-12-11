import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: 'sdfasdfswer',
  authDomain: "weraerawera",
  projectId: "efawawefa",
  storageBucket: "afwewerawef",
  messagingSenderId: "werwerfwerf",
  appId: "werrfwerfwerdf",
  measurementId: "sdfasferwfawerfawe",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
