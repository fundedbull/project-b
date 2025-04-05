import { ImageIcon, PlusIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Input } from "@ui/input";

export default function BrixPage() {
  return (
    <div className="min-w-screen min-h-screen  flex flex-row">
      <div className="flex min-w-1/6">
        <aside className="flex flex-col bg-zinc-900 *:p-4 w-full border m-2 border-zinc-700 rounded-xl">
          <div className="flex gap-2 items-center bg-zinc-800 border-b border-zinc-700 w-full">
            <h1 className="bg-blue-800/60 border border-blue-800 size-10 flex items-center justify-center rounded-lg">
              F
            </h1>
            <p>Fabs</p>
            <button className="ml-auto bg-zinc-900 size-10 rounded-lg flex items-center justify-center">
              <PlusIcon />
            </button>
          </div>
        </aside>
      </div>

      <main className="w-full h-full flex flex-col items-center p-10 gap-10 max-h-screen max-w-screen overflow-y-scroll">
        <section className=" flex flex-row items-center justify-center aspect-video bg-zinc-900 w-3xl rounded-lg">
          <button className="bg-blue-600 px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <ImageIcon />
            Upload Media
          </button>
        </section>
        <section className="flex flex-col  items-center p-4  bg-zinc-900 w-3xl rounded-lg">
          {/* <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full self-end">
          Edit details
        </button> */}
          <Sheet>
            <SheetTrigger className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full self-end">
              Edit details
            </SheetTrigger>
            <SheetContent className="w-[400px]">
              <SheetHeader>
                <SheetTitle>The name&apos;s Deez</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
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
          {/* <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full self-end">
          Edit services
        </button> */}
          <Sheet>
            <SheetTrigger className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full self-end">
              Edit Services
            </SheetTrigger>
            <SheetContent className="w-[400px]">
              <SheetHeader>
                <SheetTitle>The name&apos;s Deez</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
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
            {/* <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
            Edit Creator Details
          </button> */}
            <Sheet>
              <SheetTrigger className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
                Edit Creator Details
              </SheetTrigger>
              <SheetContent className="w-[400px]">
                <SheetHeader>
                  <SheetTitle>The name&apos;s Deez</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="size-16 bg-zinc-400 rounded-full" />
          <h1 className="text-4xl font-medium">
            Viewer name{" "}
            {/** When adding database stuff put the viewer's name here */}
          </h1>
          <p>
            @owner_name • Joined Apr 2025{" "}
            {/** TODO: Add brix page owner name and date joined */}
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            {/** TODO: Add Socials that are added through the edit creator details*/}
            <div className="border border-zinc-600/80 size-8 rounded-full" />
            <div className="border border-zinc-600/80 size-8 rounded-full" />
            <div className="border border-zinc-600/80 size-8 rounded-full" />
            <div className="border border-zinc-600/80 size-8 rounded-full" />
          </div>

          <button className="bg-zinc-800/80  px-4 p-2 rounded-lg">
            View Profile
          </button>

          <div className="bg-zinc-800 rounded-lg flex flex-col items-center px-8 py-4 space-y-4">
            <p>You have messaged this creator before!</p>
            <button className="bg-zinc-700/80  px-4 p-2 rounded-lg">
              View messages
            </button>
          </div>
        </section>

        <section className="flex flex-col items-center p-4 bg-zinc-900 w-3xl rounded-lg gap-4">
          <div className="flex flex-row items-center w-full relative">
            <h1 className="font-bold text-3xl w-full text-center">
              Who this is for
            </h1>
            {/* <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
            Edit Creator Details
          </button> */}
            <Sheet>
              <SheetTrigger className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
                Open
              </SheetTrigger>
              <SheetContent className="w-[400px]">
                <SheetHeader>
                  <SheetTitle>The name&apos;s Deez</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        <section className="flex flex-col items-center p-4 bg-zinc-900 w-3xl rounded-lg gap-4">
          <div className="flex flex-row items-center w-full relative">
            <h1 className="font-bold text-3xl w-full text-center">FAQS</h1>
            {/* <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
            Edit FAQS
          </button> */}
            <Sheet>
              <SheetTrigger className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
                Edit FAQs
              </SheetTrigger>
              <SheetContent className="w-[400px]">
                <SheetHeader>
                  <SheetTitle>The name&apos;s Deez</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        <section className="flex flex-col items-center p-4 bg-zinc-900 w-3xl rounded-lg gap-4">
          <div className="flex flex-row items-center w-full relative">
            <h1 className="font-bold text-3xl w-full text-center">
              Become an Affiliate
            </h1>
            {/* <button className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
            Edit FAQS
          </button> */}
            <Sheet>
              <SheetTrigger className="bg-blue-800/80 text-blue-300 text-sm font-medium px-4 py-1 rounded-full absolute right-0">
                Open
              </SheetTrigger>
              <SheetContent className="w-[400px]">
                <SheetHeader>
                  <SheetTitle>The name&apos;s Deez</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent className="w-[400px]">
            <SheetHeader>
              <SheetTitle>Edit details</SheetTitle>
              <SheetDescription className="flex flex-col gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Name" />
                  {/* use state to keep track of chars */}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="headline">Headline</Label>
                  <Input type="text" id="headline" placeholder="Headline" />
                  {/* use state to keep track of chars */}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    placeholder="Type your description here."
                    id="description"
                  />
                  {/* use state to keep track of chars */}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="storeurl">Store page URL</Label>
                  <Input
                    type="text"
                    id="storeurl"
                    placeholder="Store page URL"
                  />
                  {/* use state to keep track of chars */}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]" id="category">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="action">Call to action</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]" id="action">
                      <SelectValue placeholder="Call to Action" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="custom">Custom call to action</Label>
                  <Input
                    type="text"
                    id="custom"
                    placeholder="Custom call to action"
                  />
                  {/* use state to keep track of chars */}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="checkout">Checkout link</Label>
                  <Input
                    type="text"
                    id="checkout"
                    placeholder="Checkout link"
                  />
                  {/* use state to keep track of chars */}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}
