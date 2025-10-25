import { Html, Head, Main, NextScript } from "next/document"

const themeScript = `
(function () {
  try {
    var root = document.documentElement
    if (!root) return
    var media = window.matchMedia("(prefers-color-scheme: dark)")
    var apply = function (isDark) {
      root.classList.toggle("dark", isDark)
      root.dataset.theme = isDark ? "dark" : "light"
      root.style.setProperty("color-scheme", isDark ? "dark" : "light")
    }
    apply(media.matches)
    var listener = function (event) {
      apply(event.matches)
    }
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener)
    } else if (typeof media.addListener === "function") {
      media.addListener(listener)
    }
  } catch (error) {
  }
})()
`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          // Ensure the theme is set before the app hydrates to avoid flashes.
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
