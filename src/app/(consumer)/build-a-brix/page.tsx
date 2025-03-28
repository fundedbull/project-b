"use client";

import { createBrix } from "@/server/action";
import { Button } from "@ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import Footer from "@ui/Footer";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import Navbar from "@ui/Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";

import { useActionState } from "react";

export default function BuildABrix() {
  const [state, formAction] = useActionState(createBrix, null);

  return (
    <main>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-screen w-1/2 mx-auto">
        <Card className="w-full h-max">
          <CardHeader>
            <CardTitle>Build a Brix</CardTitle>
            <CardDescription>Build your own Brix in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="userName">Your Name</Label>
                  <Input
                    name="userName"
                    id="userName"
                    placeholder="Enter your full name"
                  />
                  {state?.errors?.userName && (
                    <p className="text-sm text-red-500">
                      {state.errors.userName[0]}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="brixName">Brix Page Name</Label>
                  <Input
                    name="brixName"
                    id="brixName"
                    placeholder="Name of your Brix Page"
                  />
                  {state?.errors?.brixName && (
                    <p className="text-sm text-red-500">
                      {state.errors.brixName[0]}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full space-y-1.5">
                  <Label htmlFor="industry">Industry</Label>
                  <Select name="industry">
                    <SelectTrigger id="industry" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="health">Fitness</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="entertainment">
                        Entertainment
                      </SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {state?.errors?.industry && (
                    <p className="text-sm text-red-500">
                      {state.errors.industry[0]}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="niche">Your Specific Niche</Label>
                  <Input
                    name="niche"
                    id="niche"
                    placeholder="e.g. Personal Finance, Web Development, Yoga"
                  />
                  {state?.errors?.niche && (
                    <p className="text-sm text-red-500">
                      {state.errors.niche[0]}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full space-y-1.5">
                  <Label htmlFor="hasTeam">Do you have team members?</Label>
                  <Select name="hasTeam">
                    <SelectTrigger id="hasTeam" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                  {state?.errors?.hasTeam && (
                    <p className="text-sm text-red-500">
                      {state.errors.hasTeam[0]}
                    </p>
                  )}
                </div>
              </div>
              <CardFooter className="flex justify-end mt-4">
                <Button type="submit">Build a Brix</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </section>
      <Footer />
    </main>
  );
}
