import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Team Portfolio</h1>

      <h2>Member A</h2>
      <p><b>Name:</b> Achiraya Toneyam</p>
      <p><b>Student ID:</b> 6720210051</p>
      <p><b>Skills:</b> HTML, CSS, Git</p>

      <hr />

      <h2>Member B</h2>
      <p><b>Name:</b> Pathomphon Buanieo</p>
      <p><b>Student ID:</b> 6720210042</p>
      <p><b>Skills:</b> React, Git, Next.js</p>

      <br />
      <Link href="/">Back to Home</Link>
    </main>
  );
}