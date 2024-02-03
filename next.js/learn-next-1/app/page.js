import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid place-content-center min-h-screen text-center">
        <h1 className="text-5xl mb-5">HOMEPAGE</h1>
        <div className="flex justify-center gap-5">
          <button className="bg-slate-800 px-5 py-3 rounded-sm">
            <Link href="/posts">Posts Page</Link>
          </button>
          <button className="bg-slate-800 px-5 py-3 rounded-sm">
            <Link href="/albums">Albums Page</Link>
          </button>
        </div>
      </div>
    </>
  );
}
