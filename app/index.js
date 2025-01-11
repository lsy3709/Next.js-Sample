import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Next.js with Yarn!</h1>
      <p>Explore basic routing and styling in this project.</p>
      <ul>
        <li>
          <a href="/about">Go to About Page</a>
        </li>
        <li>
          <a href="/contact">Go to Contact Page</a>
        </li>
        <li>
          <a href="/post/1">Go to Dynamic Post (ID: 1)</a>
        </li>
      </ul>
    </div>
  );
}
