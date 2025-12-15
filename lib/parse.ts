export type ParsedIG = {
  username: string;
  followers: string[];
  following: string[];
};

const uniq = (arr: string[]) =>
  Array.from(new Set(arr.map((s) => s.trim()).filter(Boolean)));

type FollowersNode = {
  string_list_data?: { value?: unknown }[];
  [key: string]: unknown;
};

export function extractFollowersUsernames(json: unknown): string[] {
  const out: string[] = [];

  const walk = (node: unknown) => {
    if (!node) return;
    if (Array.isArray(node)) return node.forEach(walk);

    if (typeof node === "object") {
      const obj = node as FollowersNode;
      if (Array.isArray(obj.string_list_data)) {
        for (const item of obj.string_list_data) {
          if (typeof item?.value === "string" && item.value.trim()) {
            out.push(item.value.trim());
          }
        }
      }
      for (const k of Object.keys(obj)) {
        walk(obj[k]);
      }
    }
  };

  walk(json);
  return uniq(out);
}

type FollowingJson = {
  relationships_following?: { title?: unknown }[];
};

export function extractFollowingUsernames(json: unknown): string[] {
  const rel = (json as FollowingJson | null | undefined)?.relationships_following;
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
