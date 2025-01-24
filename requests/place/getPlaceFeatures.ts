export async function GetPlaceFeaturesById(PlaceId: string) {
  const response = await fetch(`${process.env.BASE_URL}/features/${PlaceId}`);

  if (!response.ok) {
    throw new Error("cant get place with this id");
  }

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant get this place with this id.! server error");
  }

  const { feature } = await response.json();

  return feature;
}
