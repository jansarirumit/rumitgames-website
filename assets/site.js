const featuredGames = [
  {
    name: "Javelin Champion",
    desc: "Arcade athletics challenge.",
    image: "/assets/images/games/javelin-champion.png",
    url: "https://play.google.com/store/apps/details?id=com.javelinchampion.javelin_champion&pcampaignid=web_share",
    tag: "Featured"
  },
  {
    name: "Trap Shooting Champion",
    desc: "Fast reflex clay shooting.",
    image: "/assets/images/games/trap-shooting-champion.png",
    url: "https://play.google.com/store/apps/details?id=com.rumitgames.trap_shooting_champion&pcampaignid=web_share",
    tag: "Featured"
  },
  {
    name: "Bloom Burst",
    desc: "A relaxing strategy puzzle.",
    image: "/assets/images/games/bloom-burst.png",
    url: "https://play.google.com/store/apps/details?id=com.rumit.games.bloomburst&pcampaignid=web_share",
    tag: "Featured"
  },
  {
    name: "Judgement Kachoful Scorekeeper",
    desc: "Score Judgement and Kachoful games.",
    image: "/assets/images/games/judgement-scorekeeper.png",
    url: "https://play.google.com/store/apps/details?id=com.playgrid.judgementscorekeeper&pcampaignid=web_share",
    tag: "Featured"
  }
];

const ownGames = [
  {
    name: "Javelin Champion",
    desc: "Compete for your personal best.",
    image: "/assets/images/games/javelin-champion.png",
    url: "https://play.google.com/store/apps/details?id=com.javelinchampion.javelin_champion&pcampaignid=web_share"
  },
  {
    name: "Trap Shooting Champion",
    desc: "Hit clays before they escape.",
    image: "/assets/images/games/trap-shooting-champion.png",
    url: "https://play.google.com/store/apps/details?id=com.rumitgames.trap_shooting_champion&pcampaignid=web_share"
  },
  {
    name: "Bloom Burst",
    desc: "Plan, match and create chain reactions.",
    image: "/assets/images/games/bloom-burst.png",
    url: "https://play.google.com/store/apps/details?id=com.rumit.games.bloomburst&pcampaignid=web_share"
  },
  {
    name: "Judgement Kachoful Scorekeeper",
    desc: "Score Judgement and Kachoful games.",
    image: "/assets/images/games/judgement-scorekeeper.png",
    url: "https://play.google.com/store/apps/details?id=com.playgrid.judgementscorekeeper&pcampaignid=web_share"
  }
];
const articles=[
{title:"How Mobile Games Keep Players Engaged",desc:"A practical look at feedback loops, progression and replay value.",url:"/articles/how-mobile-games-keep-players-engaged.html"},
{title:"A Guide to Major Gaming Platforms",desc:"Understand mobile, PC, console, browser and cloud gaming.",url:"/articles/major-gaming-platforms.html"},
{title:"How to Evaluate a Top-Downloaded Games List",desc:"A research framework for creating accurate rankings.",url:"/articles/top-downloaded-games-methodology.html"}
];
const card = (g) => `
  <article class="game-card">
    <div class="game-thumb">
      <img src="${g.image}" alt="${g.name} app icon">
    </div>

    <div class="game-card-body">
      ${g.tag ? `<span class="tag">${g.tag}</span>` : ""}

      <h3>${g.name}</h3>
      <p>${g.desc}</p>

      <a
        class="text-link"
        href="${g.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google Play →
      </a>
    </div>
  </article>
`;
const article=(a)=>`<article class="article-card"><div class="article-cover">${a.title}</div><div class="content"><h3>${a.title}</h3><p>${a.desc}</p><a class="text-link" href="${a.url}">Read article →</a></div></article>`;
const fg=document.querySelector("#featured-grid"); if(fg) fg.innerHTML=featuredGames.map(card).join("");
const gg=document.querySelector("#games-grid"); if(gg) gg.innerHTML=ownGames.map(card).join("");
const ag=document.querySelector("#article-grid"); if(ag) ag.innerHTML=articles.map(article).join("");
document.querySelector("#year")?.append(new Date().getFullYear());
document.querySelector(".nav-toggle")?.addEventListener("click",()=>document.querySelector(".nav")?.classList.toggle("open"));
