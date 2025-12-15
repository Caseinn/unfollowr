"use client";

import { useState, useDeferredValue, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { PersonRow } from "./person-row";

function List({ items, badge }: { items: string[]; badge: string }) {
  return (
    <div className="space-y-3">
      {items.length === 0 ? (
        <div className="rounded-2xl border p-4 text-sm text-muted-foreground">No results</div>
      ) : (
        items.map((u) => <PersonRow key={u} name={u} badge={badge} />)
      )}
    </div>
  );
}

export function PeopleTabs({
  notBack,
  fans,
  mutuals,
}: {
  notBack: string[];
  fans: string[];
  mutuals: string[];
}) {
  const [q, setQ] = useState("");
  const deferredQ = useDeferredValue(q);

  const filterList = (arr: string[], term: string) => {
    const s = term.trim().toLowerCase();
    if (!s) return arr;
    return arr.filter((u) => u.toLowerCase().includes(s));
  };

  const a = useMemo(() => filterList(notBack, deferredQ), [notBack, deferredQ]);
  const b = useMemo(() => filterList(fans, deferredQ), [fans, deferredQ]);
  const c = useMemo(() => filterList(mutuals, deferredQ), [mutuals, deferredQ]);

  return (
    <div className="rounded-3xl border bg-background/70 backdrop-blur p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="font-semibold">People</p>
          <p className="text-sm text-muted-foreground">Browse each list and tap through to Instagram.</p>
        </div>
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search username"
          className="md:max-w-sm rounded-full"
        />
      </div>

      <Tabs defaultValue="notback" className="mt-5">
        <TabsList className="rounded-full bg-muted/60 flex-wrap gap-2 w-full sm:w-auto">
          <TabsTrigger value="notback" className="rounded-full">
            Unfollowers ({notBack.length})
          </TabsTrigger>
          <TabsTrigger value="fans" className="rounded-full">
            Fans ({fans.length})
          </TabsTrigger>
          <TabsTrigger value="mutuals" className="rounded-full">
            Mutuals ({mutuals.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notback" className="mt-5">
          <List items={a} badge="Unfollower" />
        </TabsContent>
        <TabsContent value="fans" className="mt-5">
          <List items={b} badge="Fan" />
        </TabsContent>
        <TabsContent value="mutuals" className="mt-5">
          <List items={c} badge="Mutual" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
