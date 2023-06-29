import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import { redirect } from "next/navigation";

export default function Home() {

  // const goTo = () => {
  //   redirect('/manual');
  // }
  return (
    <header>
      <div className="flex flex-row-reverse items-center width-100">
        <div>&nbsp;</div>
        <Link
          href="https://www.adhnan.me"
          target="_blank"
          className="gradient-text-A"
        >
          by <br />
          <i className="fa-brands fa-atlassian"></i>dhnan
        </Link>
      </div>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={150}
        height={10}
        priority
      ></Image>
      <p className="stem-logo">Stem</p>
      <div className="flex justify-evenly flex-row width-100">
        <div className={styles.option}>
          <Link className="button-a" href="/manual" >Manual</Link>
          <h4>What is Manual?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in
            blanditiis quia corrupti dolore mollitia. Eos maxime illo ipsum
          </p>
        </div>
        <div className={styles.option}>
          <Link className="button-a" href="/prompt"  >Prompt</Link>
          <h4>What is Prompt?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in
            blanditiis quia corrupti dolore mollitia. Eos maxime illo ipsum
          </p>
        </div>
      </div>
    </header>
    // <header className="flex min-h-screen flex-col items-center justify-between p-24">

    // </header>
  );
}
