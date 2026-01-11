import JSZip from "jszip";

export const MAX_ZIP_BYTES = 25 * 1024 * 1024;
export const MAX_JSON_CHARS = 20 * 1024 * 1024;

export const IG_ZIP_PATHS = {
  followers: "connections/followers_and_following/followers_1.json",
  following: "connections/followers_and_following/following.json",
} as const;

export async function readIGFromZip(zipFile: File) {
  if (zipFile.size === 0) throw new Error("ZIP file is empty.");
  if (zipFile.size > MAX_ZIP_BYTES) {
    throw new Error("ZIP file is too large. Please use a smaller export.");
  }

  const zip = await JSZip.loadAsync(await zipFile.arrayBuffer());

  const followersEntry = zip.file(IG_ZIP_PATHS.followers);
  const followingEntry = zip.file(IG_ZIP_PATHS.following);

  if (!followersEntry) throw new Error(`Tidak menemukan: ${IG_ZIP_PATHS.followers}`);
  if (!followingEntry) throw new Error(`Tidak menemukan: ${IG_ZIP_PATHS.following}`);

  const followersText = await followersEntry.async("string");
  if (followersText.length > MAX_JSON_CHARS) {
    throw new Error("Followers file is too large.");
  }

  const followingText = await followingEntry.async("string");
  if (followingText.length > MAX_JSON_CHARS) {
    throw new Error("Following file is too large.");
  }

  const followersJson = JSON.parse(followersText);
  const followingJson = JSON.parse(followingText);

  return { followersJson, followingJson };
}

export function usernameFromZipName(filename: string): string | null {
  const name = filename.replace(/\.zip$/i, "");

  const match = name.match(
    /^instagram-(.+?)-\d{4}-\d{2}-\d{2}-.+$/i
  );

  return match?.[1] ?? null;
}
