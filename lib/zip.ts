import JSZip from "jszip";

export const IG_ZIP_PATHS = {
  followers: "connections/followers_and_following/followers_1.json",
  following: "connections/followers_and_following/following.json",
} as const;

export async function readIGFromZip(zipFile: File) {
  const zip = await JSZip.loadAsync(await zipFile.arrayBuffer());

  const followersEntry = zip.file(IG_ZIP_PATHS.followers);
  const followingEntry = zip.file(IG_ZIP_PATHS.following);

  if (!followersEntry) throw new Error(`Tidak menemukan: ${IG_ZIP_PATHS.followers}`);
  if (!followingEntry) throw new Error(`Tidak menemukan: ${IG_ZIP_PATHS.following}`);

  const followersJson = JSON.parse(await followersEntry.async("string"));
  const followingJson = JSON.parse(await followingEntry.async("string"));

  return { followersJson, followingJson };
}

export function usernameFromZipName(filename: string): string | null {
  const name = filename.replace(/\.zip$/i, "");

  const match = name.match(
    /^instagram-(.+?)-\d{4}-\d{2}-\d{2}-.+$/i
  );

  return match?.[1] ?? null;
}
