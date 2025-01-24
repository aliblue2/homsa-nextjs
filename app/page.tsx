import Landing from "@/components/home/Landing";
import { GetAllPlaces } from "@/requests/place/getAllPlaces";
import { Place } from "@/types/Place";
import { NextPage } from "next";

const Page: NextPage = async () => {
  const places: Place[] = await GetAllPlaces();

  return (
    <>
      <Landing places={places} />
    </>
  );
};

export default Page;
