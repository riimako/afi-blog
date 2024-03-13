import Image from 'next/image'
import Header from "../../_components/header";

export default function Page() {
  return (
    <main>
    <Header />
    
    <Image
      src={'/assets/img/organigrama.png'}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </main>
    )
  }