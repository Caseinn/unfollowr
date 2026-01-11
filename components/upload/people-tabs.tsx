"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { PersonRow } from "./person-row";

type Tone = "not-back" | "fans" | "mutuals";

function List({
  items,
  badge,
  tone,
}: {
  items: string[];
  badge: string;
  tone: Tone;
}) {
  return (
    <div className="space-y-3">
      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/70 bg-background/70 p-4 text-sm text-muted-foreground">
          No results
        </div>
      ) : (
        items.map((u) => <PersonRow key={u} name={u} badge={badge} tone={tone} />)
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

  const filteredNotBack = useMemo(() => filterList(notBack, deferredQ), [notBack, deferredQ]);
  const filteredFans = useMemo(() => filterList(fans, deferredQ), [fans, deferredQ]);
  const filteredMutuals = useMemo(() => filterList(mutuals, deferredQ), [mutuals, deferredQ]);

  return (
    <div className="lucid-panel p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">People lists</p>
          <p className="text-sm text-muted-foreground">
            Browse each list and tap through to Instagram.
          </p>
        </div>
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search username"
          className="md:max-w-sm"
        />
      </div>

      <Tabs defaultValue="notback" className="mt-5">
        <TabsList className="flex-wrap gap-2">
          <TabsTrigger value="notback">
            Not following back ({notBack.length})
          </TabsTrigger>
          <TabsTrigger value="fans">Fans ({fans.length})</TabsTrigger>
          <TabsTrigger value="mutuals">Mutuals ({mutuals.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="notback" className="mt-5">
          <List items={filteredNotBack} badge="Not following back" tone="not-back" />
        </TabsContent>
        <TabsContent value="fans" className="mt-5">
          <List items={filteredFans} badge="Fan" tone="fans" />
        </TabsContent>
        <TabsContent value="mutuals" className="mt-5">
          <List items={filteredMutuals} badge="Mutual" tone="mutuals" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

