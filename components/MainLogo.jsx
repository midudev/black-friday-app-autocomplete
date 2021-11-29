import Image from 'next/image'
import Logo from "public/cyber-monday.png";

export default function MainLogo() {
  return (
    <div className="flex items-center justify-center p-10 mt-32">
      <Image src={Logo} alt="Black Friday" width="500" height="150" />
    </div>
  )
}