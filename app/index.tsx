import Game from "@/components/Game";
import Login from "@/components/Login";
import { useActiveAccount } from "thirdweb/react";

export default function Index() {
  const activeAccount = useActiveAccount();
  return <>{activeAccount ? <Game /> : <Login />}</>;
}
