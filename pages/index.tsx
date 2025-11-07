import type { ReactNode } from "react"

import { AlertDemo } from "@/components/alert.client.tsx"
import { AlertDialogClient } from "@/components/alert-dialog.client"
import { ThemeToggle } from "@/components/theme-toggle.client"

type ComponentStory = {
  name: string
  description: string
  component: ReactNode
}

type StoryGroup = {
  title: string
  description: string
  stories: ComponentStory[]
}

const storyGroups: StoryGroup[] = [
  {
    title: "Feedback",
    description:
      "Patterns that communicate status, confirmation, or critical follow-up actions.",
    stories: [
      {
        name: "Alert",
        description:
          "Inline messaging with tone-aware styling used for success, error, warning, and info moments.",
        component: <AlertDemo />,
      },
      {
        name: "Alert Dialog",
        description:
          "Modal confirmation dialog that pauses the flow to ensure the user is confident about a destructive action.",
        component: <AlertDialogClient />,
      },
    ],
  },
]

function StorySection({ group }: { group: StoryGroup }) {
  return (
    <section className="flex flex-col gap-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {group.title}
        </h2>
        <p className="max-w-3xl text-sm text-muted-foreground">
          {group.description}
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {group.stories.map((story) => (
          <StoryCard key={story.name} story={story} />
        ))}
      </div>
    </section>
  )
}

function StoryCard({ story }: { story: ComponentStory }) {
  return (
    <article className="flex flex-col gap-5 rounded-xl border border-border/60 bg-card/40 p-6 shadow-sm transition hover:border-border hover:bg-card hover:shadow-lg">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-foreground">{story.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {story.description}
        </p>
      </div>
      <div className="overflow-hidden rounded-lg border border-dashed border-border/70 bg-background p-4">
        {story.component}
      </div>
    </article>
  )
}

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12">
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3 text-balance">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Component Previews
            </h1>
            <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
              A lightweight preview shelf for the interactive primitives in this
              workspace. Each card bundles a component, its purpose, and how we
              expect it to feel in context.
            </p>
          </div>
          <ThemeToggle className="shrink-0" />
        </div>
      </header>
      {storyGroups.map((group) => (
        <StorySection key={group.title} group={group} />
      ))}
    </main>
  )
}
