export const convertStringToSlug = (string) => {
  return string.toLowerCase().split(" ").join("_")
}
