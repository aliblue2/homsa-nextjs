export async function GetPlaceFeaturesById(PlaceId: string) {
  const response = await fetch(`https://airbnb-clone.liara.run/features/${PlaceId}`);

  if (!response.ok) {
    throw new Error("cant get place with this id");
  }

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant get this place with this id.! server error");
  }

  const { feature } = await response.json();

  return feature;
}
