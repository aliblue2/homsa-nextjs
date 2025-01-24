import Landing from "@/components/places/Landing";
import { GetPlaceById } from "@/requests/place/getPlaceById";
import { GetPlaceComments } from "@/requests/place/getPlaceComments";
import { GetPlaceFeaturesById } from "@/requests/place/getPlaceFeatures";
import { Place, PlaceComment, PlaceFeatures } from "@/types/Place";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const place: Place = await GetPlaceById(slug);
  const placeFeatures: PlaceFeatures = await GetPlaceFeaturesById(slug);
  const placeComments: PlaceComment[] = await GetPlaceComments(slug);

  return (
    <>
      <Landing
        place={place}
        features={placeFeatures}
        comments={placeComments}
      />
    </>
  );
}
