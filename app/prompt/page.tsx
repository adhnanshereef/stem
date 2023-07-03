import styles from "./prompt.module.css";

export default function Prompt() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Prompt</h1>
      <textarea
        name="prompts"
        id="prompts"
        placeholder="What do you have to find?"
      ></textarea>
      <button>Proceed</button>
    </header>
  );
}
