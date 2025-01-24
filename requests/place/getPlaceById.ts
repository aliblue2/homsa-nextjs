export async function GetPlaceById(PlaceId: string) {
  const response = await fetch(`${process.env.BASE_URL}/places/${PlaceId}`);

  if (!response.ok) {
    throw new Error("cant get place with this id");
  }

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant get this place with this id.! server error");
  }

  const {place} = await response.json();

  return place;
}
