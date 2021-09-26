import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

function SignInScreen() {
  const provider = new GithubAuthProvider();

  const auth = getAuth();

  const handleSignIn = signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });

  return (
    <div
      stle={{
        maxWidth: "320px",
        display: "flex",
        flexDirecction: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Todos Login</h1>
      <p>Please sign-in:</p>
      <button onClick={handleSignIn}>handleSignIn</button>
    </div>
  );
}

export default SignInScreen;
