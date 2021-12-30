import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo"  style={{borderRadius: '5px', overflow: 'hidden'}}>
       <a target='_blank' href='https://kodsozluk.com/'><Image src="/favicon.ico"  width={128} height={77} /> </a> 
      </div>
      <Link href='/'>
        <a> Home</a>
      </Link>
      <Link href='about'>
        <a> About</a>
      </Link>
      <Link href='blog'>
        <a> Blog List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
