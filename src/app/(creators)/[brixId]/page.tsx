import { ImageIcon } from "lucide-react";

export default function BrixPage() {
  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center p-10 gap-10">
      <section className=" flex flex-row items-center justify-center aspect-video bg-zinc-900 w-3xl rounded-lg">
        <button className="bg-blue-600 px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <ImageIcon />
          Upload Media
        </button>
      </section>
      <section className="flex flex-col  items-center p-4  bg-zinc-900 w-3xl rounded-lg">
        <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full self-end">
          Edit details
        </button>
        <div className="flex flex-col items-center gap-2 my-10">
          <div className="flex gap-2 items-center">
            <h1 className="bg-blue-800/60 border border-blue-800 size-10 flex items-center justify-center rounded-lg">
              F
            </h1>
            <p>Fabs</p>
          </div>
          <h1 className="text-4xl font-bold">What will your BRIX achieve</h1>
          <p className="text-zinc-300">
            Describe how you will help your customers achieve their goals.
          </p>
        </div>
      </section>

      <section className="flex flex-col  items-center p-4 bg-zinc-900  w-3xl rounded-lg gap-4">
        <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full self-end">
          Edit services
        </button>
        <h1 className="font-bold text-3xl">Services we offer</h1>
        <div className="w-full h-10 bg-zinc-800 rounded-lg flex items-center p-2">
          Service #1
        </div>
        <div className="w-full h-10 bg-zinc-800 rounded-lg flex items-center p-2">
          Service #2
        </div>
        <div className="w-full h-10 bg-zinc-800 rounded-lg flex items-center p-2">
          Service #3
        </div>
      </section>

      <section className="flex flex-col items-center p-4 bg-zinc-900 w-3xl rounded-lg gap-4">
        <div className="flex flex-row items-center w-full relative">
          <h1 className="font-bold text-3xl w-full text-center">About Me</h1>
          <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
            Edit Creator Details
          </button>
        </div>
      </section>
    </main>
  );
}
