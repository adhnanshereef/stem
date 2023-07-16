import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <header>
      
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
  );
}
