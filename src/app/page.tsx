import { doc, getDoc } from "firebase/firestore"; 
import { db } from './firebase.js'
import { use } from "react";
import NavBar from "@/components/NavBar"

const Home: React.FC = () => {

  // FETCH USER DATA
  const getData = async () => {
    try {
      const docRef = doc(db, "users", "139K5hKZNgVCHnpUZCoISvwB4CD2");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const snapshot = docSnap.data()
        return snapshot
      } else {
        console.log("No such document!");
      }
    } catch(e) {
      console.log(e)
    }
  }

  const items = use(getData())
  return (
    <div className="bg-gray-bg h-screen">
      <h1>This is the HOME</h1>
      <p>{ items?.user_location }</p>
      <NavBar onItemClick={() => {}}/>
    </div>
  )
}

export default Home