import { ExternalLink } from "lucide-react"

const topInspirations = [
  {
    name: "Base UI",
    url: "https://base-ui.com",
    description:
      "Design system foundation from Base UI that guides the overall tone, motion, and rhythm of our interface.",
  },
  {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    description:
      "Headless component patterns that influence how we compose primitives with accessibility front of mind.",
  },
  {
    name: "Ark UI",
    url: "https://ark-ui.com",
    description:
      "Composable, accessible component primitives that influence our interactive and accessible UI design.",
  },
  {
    name: "Spectrum",
    url: "https://spectrum.adobe.com",
    description:
      "Adobe’s Spectrum design system, setting high standards for design consistency, accessibility, and UI guidelines across products.",
  },
  {
    name: "Catalyst",
    url: "https://catalyst.tailwindui.com",
    description:
      "Tailwind UI’s Catalyst provides robust, accessible, and production-ready React component patterns to streamline interface development.",
  },
  {
    name: "Tailwind UI Kit",
    url: "https://tailwindcss.com/plus/ui-kit",
    description:
      "Tailwind's official UI Kit, offering a comprehensive collection of professionally designed, fully responsive components to accelerate development.",
  },
]

const otherInspirations = [
  {
    name: "Radix Primitives",
    url: "https://www.radix-ui.com/primitives",
    description:
      "Battle-tested primitives that inspire structural decisions and how we manage complex interactive states.",
  },
  {
    name: "Magic UI",
    url: "https://magicui.design",
    description:
      "Fresh takes on micro-interactions and motion that help keep the experience feeling modern and alive.",
  },
  {
    name: "Awwwesome",
    url: "https://awwwesome.io",
    description:
      "A curated gallery of polished product sites that shape our sense of storytelling and visual pacing.",
  },
]

function InspirationSection({
  title,
  items,
}: {
  title: string
  items: typeof topInspirations
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.name}
            className="group flex h-full flex-col justify-between rounded-xl border border-border/60 bg-card/40 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-card hover:shadow-lg"
          >
            <div className="space-y-3">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-primary/80"
              >
                {item.name}
                <ExternalLink className="h-4 w-4 opacity-80 transition-opacity group-hover:opacity-100" />
              </a>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              {new URL(item.url).hostname}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function Inspiration() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <header className="flex flex-col gap-3 text-balance">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Inspiration
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
          A living collection of projects, libraries, and galleries that shape
          how we approach interaction, craft, and accessibility across the UI.
        </p>
      </header>

      <InspirationSection title="Top" items={topInspirations} />
      <InspirationSection title="Other" items={otherInspirations} />
    </div>
  )
}
