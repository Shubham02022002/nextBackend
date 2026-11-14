import axios from "axios";

interface User {
  name: string;
  email: string;
}

export default async function Home() {
  "use cache";
  const userDetails = await getUsersDetails();
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="flex flex-col border h-20 border-slate-100 text-center  rounded-md p-2 bg-slate-50 shadow-md ">
        <h1>{userDetails.name}</h1>
        <h2>{userDetails.email}</h2>
      </div>
    </div>
  );
}

async function getUsersDetails(): Promise<User> {
  await new Promise((r) => setTimeout(r, 3000));
  const response = await axios.get<User>("http://localhost:3000/api/user/signup");
  return response.data;
}
