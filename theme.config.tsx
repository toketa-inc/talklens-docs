import type { DocsThemeConfig } from "nextra-theme-docs"

const Logo = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="25"
      height="25"
      style={{ transform: "rotate(180deg) scaleX(-1)" }}
    >
      <title>TalkLens</title>
      <g transform="rotate(45 50 50)">
        <ellipse
          cx="50"
          cy="50"
          rx="40"
          ry="20"
          fill="white"
          stroke="black"
          strokeWidth="6"
        />
      </g>
    </svg>
    <span style={{ paddingLeft: "3px", fontSize: "20px" }}>TalkLens Docs</span>
  </div>
)

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/toketa-inc/talklens-docs",
  },
  chat: {
    link: "https://discord.gg/WabwqPFNrW",
  },
  docsRepositoryBase: "https://github.com/toketa-inc/talklens-docs",
  footer: {
    text: "Nextra Docs Template",
  },
}

export default config
