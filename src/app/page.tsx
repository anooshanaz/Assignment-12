
import { SessionWrapper } from "@/components/login/SessionWrapper";
import { auth } from "./lib/auth";
import SignOutPage from "@/components/login/SignoutComponent";
import SignInPage from "@/components/login/SigninComponent";

export default  async function Home() {
  const session = await auth()
  const isAuthenticated = !!session?.user
  return (
      <div>
        <SessionWrapper>
          {isAuthenticated ? <SignOutPage/> : <SignInPage/>}
        </SessionWrapper>
      </div>
  );
}
