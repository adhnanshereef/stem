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
      <div className={styles.options}>
        <div className={styles.option}>
          <Link className="button-a" href="/manual">
            Manual
          </Link>
          <h4>What is Manual?</h4>
          <p>
            Take control with dedicated input boxes. Customize calculations and
            experiments by entering values, manipulating variables, and
            exploring different scenarios to obtain precise results.
          </p>
        </div>
        <div className={styles.option}>
          <Link className="button-a" href="/prompt">
            Prompt
          </Link>
          <h4>What is Prompt?</h4>
          <p>
            Engage with a chatbot-like interface to explore math, science, tech,
            and engineering. Ask questions naturally and receive instant,
            informative responses tailored to your queries.
          </p>
        </div>
      </div>
    </header>
  );
}
