import Image from "next/image";

import Link from "next/link";
export default function MemberA() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Member A Profile</h1>
      <p><b>Name:</b> Achiraya Toneyam</p>
      <p><b>Student ID:</b> 6720210051</p>
      <p><b>Skills:</b> HTML, CSS, Git</p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}