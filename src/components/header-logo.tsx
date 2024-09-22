import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex ">
        {/* <Image src="/finaco-removebg.png" alt="logo" height={200} width={200} /> */}
        <p className="font-semibold text-violet-900 text-2xl mt-2.5 ">Finaco</p>
      </div>
    </Link>
  );
};
