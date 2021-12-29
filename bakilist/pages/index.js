import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <Link href='/blog'>
        <a>See blog Listing</a>
      </Link>
    </div>
  );
}
