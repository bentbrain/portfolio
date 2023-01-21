const fetchURL = process.env.FETCH_URL;

export default function Head() {
  return (
    <>
      <title>Liam Cullen | Digital Designer & Web Developer</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Digital design and web development portfolio"
      />
      <link rel="icon" href="/favicon-lime.ico" />
      <meta property="og:image" content={`${fetchURL}api/og/`} />
    </>
  );
}
