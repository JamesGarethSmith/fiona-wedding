import Link from "next/link";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/accommodation">Accommodation</Link>
      </li>
      <li>
        <Link href="/directions">Directions</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/gift-registries">Gift Registries</Link>
      </li>
      <li>
        <Link href="">RSVP</Link>
      </li>
    </ul>
  );
}
