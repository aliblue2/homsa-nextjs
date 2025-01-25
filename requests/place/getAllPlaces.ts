export async function GetAllPlaces() {
  const response = await fetch(`https://airbnb-clone.liara.run/places`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("cant get all places");
  }

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant get all places");
  }

  const { places } = await response.json();

  return places;
}
