import { initializeApp } from "firebase/app";
import { getFirestore , query, where, getDocs, getDoc, doc, collection } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA5Wyg7r_LEoZ-RN8uJH1esci5y8n0VQ64",
  authDomain: "coderapp-57404.firebaseapp.com",
  projectId: "coderapp-57404",
  storageBucket: "coderapp-57404.appspot.com",
  messagingSenderId: "407983822279",
  appId: "1:407983822279:web:c34fa60f34ea59929775e2"
};

const app = initializeApp(firebaseConfig);

export const bd = getFirestore (app);

export async function getAllGames(){
  const myCollection = collection ( bd, "games");
  const NameGameSnapp = await getDocs(myCollection);

  const res = NameGameSnapp.docs.map( game =>{
    return {...game.data(), id: game.id }
  });

  return res;
}

export async function getAllGamesFunc(category){
  const myCollection = collection ( bd, "games");
  const Query = query(myCollection, where("Categoria", "==", category))

  const NameGameSnapp = await getDocs(Query);

  const res = NameGameSnapp.docs.map( game =>{
    return {...game.data(), id: game.id }
  });

  return res;
}

export async function getAllGamesDet(id){
  const myCollection = collection ( bd, "games");
  const docref = doc(myCollection, id); //ref es como la "referencia" a un documento.
  const resDoc = await getDoc(docref);
  return {...resDoc.data(), id: resDoc.id}
}