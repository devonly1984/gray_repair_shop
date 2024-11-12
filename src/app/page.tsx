import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-home-img bg-black  bg-cover bg-center">
      <main className="max-w-5xl flex flex-col justify-center text-center mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 text-white w-4/5 sm:max-w-96 mx-auto sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Dan&apos;s Computer
            <br /> Repair Shop
            <address>
              555 Gateway Lane <br />
              Kansas City,KS 55555
            </address>
          </h1>
          <p className="">Open Daily: 9am to 5pm</p>
          <Link href="tel:5555555555" className="hover:underline">
            555-555-5555
          </Link>
        </div>
      </main>
    </div>
  );
};
export default HomePage;
