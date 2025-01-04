import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import CustomButton from "./Compoenent/customButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-black  rounded flex justify-center items-center">
    
    <Card className="w-full py-4 max-w-lg shadow-lg rounded-lg border border-gray-200 bg-gradient-to-br from-white via-blue-300 to-gray-50">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">
          Click One..!
        </CardTitle>
        <CardDescription className="text-md text-gray-600">
          Data Fetching on Client and Server Components
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col">
       
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <Link href={"/client-data-fetch"}>
            <CustomButton
              button="Client-Side Data Fetching"
            /></Link>
            <Link href={"/server-data-fetch"}>
            <CustomButton
              button="Server-Side Data Fetching"
              /></Link>
            
          </div>
        
      </CardContent>
    </Card>
  
  </div>
  );
}
