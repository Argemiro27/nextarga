import { useEffect, useState } from "react";
import {Header, Loading} from "../components"

export default function Home() {
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);

  })
  return <>{IsLoading ? <Loading /> : <Header />}</>;
}
