import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import CustomButton from "./Compoenent/customButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-black  rounded flex justify-center items-center">
    
    <Card className="w-full max-w-3xl shadow-lg rounded-lg border border-gray-700 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
          <CardHeader className="text-center px-6">
            <CardTitle className="text-3xl font-bold text-white">
              Welcome to Data Fetching Exploration!
            </CardTitle>
            <CardDescription className="text-md text-gray-300 mt-2">
              Discover the power of fetching data on both the client and server
              side in a Next.js application. Start exploring now!
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col px-6 py-4">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <Link href="/client">
                  <CustomButton button="Client-Side Data Fetching" />
                </Link>
                <Link href="/server-data-fetch">
                  <CustomButton button="Server-Side Data Fetching" />
                </Link>
              </div>
              <p className="text-gray-400 text-center mt-4">
                Learn how to efficiently fetch data using modern techniques.
                Whether you prefer client-side or server-side fetching, we’ve
                got you covered!
              </p>
            </div>
          </CardContent>
        </Card>
  </div>
  );
}
