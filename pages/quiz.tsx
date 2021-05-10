import Head from "next/head";

const Quiz = () => {
  return (
    <>
      <Head>
        <title>Example Quiz Question</title>
      </Head>

      <body>
        <div className="h-screen w-screen overflow-hidden bg-white flex justify-center items-center">
          <div className="h-auto w-1/2 p-4 border-8 border-indigo-600">
            <p>testing testing one, two, three</p>
          </div>
        </div>
      </body>
    </>
  );
};

export default Quiz;
