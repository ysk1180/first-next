import Link from "next/link";

const NavBar = () => {
  const styles = {
    display: "flex",
    background: "gray",
    justifyContent: "space-between",
    padding: "1rem",
  };
  return (
    <div style={styles}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about page</a>
      </Link>
      <Link href="/contact">
        <a>contact page</a>
      </Link>
    </div>
  );
};

export default NavBar;
