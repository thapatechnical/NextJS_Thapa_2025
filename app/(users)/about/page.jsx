import Link from "next/link";

const About = async () => {
  return (
    <>
      <h1 className="common-heading">Hello About</h1>
      <button>
        <Link href="/">Home Page</Link>
      </button>
    </>
  );
};

export default About;
