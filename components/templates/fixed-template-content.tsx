import type { ScreenshotItem } from "@/config/types";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/urls";

export function OfficialPlayLink() {
  if (!siteConfig.game.officialUrl) return null;
  return <a className="btn primary" href={siteConfig.game.officialUrl} rel="noopener noreferrer">Play on itch.io <span aria-hidden="true">↗</span></a>;
}

export function GameFigures({ screenshots }: { screenshots: ScreenshotItem[] }) {
  return screenshots.length ? <section id="screenshots"><h2>Game Images</h2><div className="figure-grid">{screenshots.map((shot) => <figure key={shot.src}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={assetPath(shot.src)} alt={shot.alt} loading="lazy" />
    {shot.caption ? <figcaption>{shot.caption}</figcaption> : null}
  </figure>)}</div></section> : null;
}

export function OfficialReferences({ controls = false, character = false, saves = false }: { controls?: boolean; character?: boolean; saves?: boolean }) {
  const game = siteConfig.game.officialUrl!;
  return <section id="references" className="official-references"><h2>Official References</h2><ul>
    <li><a href={game}>Developer’s itch.io game page</a> — game details, controls, platforms and five-ending count.</li>
    {character ? <li><a href="https://itch.io/profile/catproblem9735">catproblem9735’s creator comments</a> — Idimya and outcome discussion (contains spoilers).</li> : null}
    {saves ? <li><a href={`${game}/devlog/1665614/v101-quality-of-life-ahh-patch`}>v1.0.1 quality-of-life update</a> — save slots, choice history, and restarting at the main date scene.</li> : null}
    {controls ? <li><a href={`${game}/devlog/1675712/v111-controls-improvement-patch`}>v1.1.1 controls improvement patch</a> — choice confirmation, fast-forward and dialogue review.</li> : null}
    <li><a href={`${game}/devlog/1683089/v112-volume-control-mobile-port-out`}>v1.1.2 volume and mobile update</a> — volume control and the Android port.</li>
  </ul></section>;
}
