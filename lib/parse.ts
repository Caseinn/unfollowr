export type ParsedIG = {
  username: string;
  followers: string[];
  following: string[];
};

const uniq = (arr: string[]) =>
  Array.from(new Set(arr.map((s) => s.trim()).filter(Boolean)));

export function extractFollowersUsernames(json: any): string[] {
  const out: string[] = [];

  const walk = (node: any) => {
    if (!node) return;
    if (Array.isArray(node)) return node.forEach(walk);

    if (typeof node === "object") {
      if (Array.isArray(node.string_list_data)) {
        for (const item of node.string_list_data) {
          if (typeof item?.value === "string" && item.value.trim()) {
            out.push(item.value.trim());
          }
        }
      }
      for (const k of Object.keys(node)) walk(node[k]);
    }
  };

  walk(json);
  return uniq(out);
}

export function extractFollowingUsernames(json: any): string[] {
  const rel = json?.relationships_following;
  if (!Array.isArray(rel)) return [];

  const out: string[] = [];
  for (const item of rel) {
    if (typeof item?.title === "string" && item.title.trim()) {
      out.push(item.title.trim());
    }
  }
  return uniq(out);
}

export function computeResults(parsed: ParsedIG) {
  const followersSet = new Set(parsed.followers);
  const followingSet = new Set(parsed.following);

  const notFollowingBack = parsed.following.filter((u) => !followersSet.has(u));
  const fans = parsed.followers.filter((u) => !followingSet.has(u));
  const mutuals = parsed.following.filter((u) => followersSet.has(u));

  return { notFollowingBack, fans, mutuals };
}
