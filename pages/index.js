import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {{ user }}
    </div>
  );
}
