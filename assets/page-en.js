function applyEnglishPage() {
  document.documentElement.lang = "en";
  document.title = "Jing LUO";

  var navLabels = {
    "nav-home": "Home",
    "nav-cv": "CV",
    "nav-works": "Works",
    "nav-poems": "Poetry",
    "nav-activities": "K-12 Education",
    "nav-publications": "Publications"
  };

  Object.keys(navLabels).forEach(function(id) {
    var node = document.getElementById(id);
    if (node) node.textContent = navLabels[id];
  });

  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    var links = mobileMenu.querySelectorAll("a");
    var labels = ["Home", "CV", "Works", "Poetry", "K-12 Education", "Publications"];
    links.forEach(function(link, index) {
      if (index >= 2 && labels[index - 2]) link.textContent = labels[index - 2];
    });
  }

  var navLogo = document.querySelector(".nav-logo");
  if (navLogo) navLogo.textContent = "Jing LUO";

  var heroName = document.querySelector(".hero-text h1");
  if (heroName) heroName.textContent = "Jing LUO";

  var heroSubtitle = document.querySelector(".hero-text .subtitle");
  if (heroSubtitle) heroSubtitle.textContent = "Associate Professor · Ph.D. in Civil Engineering";

  var heroBio = document.querySelector(".hero-text .bio");
  if (heroBio) {
    heroBio.textContent = "Jing Luo is Associate Professor at Shanghai Normal University and holds a Ph.D. in Civil Engineering from Tongji University. Her work focuses on timber and bamboo-composite structures, structural fire performance, engineering education, project-based learning, historic architecture, and public-facing science education. She has been recognized as a Shanghai Sailing Talent and a Shicheng Outstanding Young Faculty member, and serves as principal investigator on projects funded by the National Natural Science Foundation of China and the Shanghai Rising-Star Program.";
  }

  var heroTags = document.querySelectorAll(".hero-tag");
  var tagLabels = ["Timber Structures", "Structural Fire Design", "Historic Architecture", "Project-Based Learning", "Science Education"];
  heroTags.forEach(function(tag, index) {
    if (tagLabels[index]) tag.textContent = tagLabels[index];
  });

  var heroContact = document.querySelectorAll(".hero-contact-item span:last-child");
  if (heroContact[1]) heroContact[1].textContent = "100 Haisi Road, Shanghai Normal University, Shanghai";

  var statLabels = document.querySelectorAll(".stat-label");
  var statTexts = ["Research and Teaching Outputs", "Projects Led as Principal Investigator", "Software Copyrights", "K-12 Educational Initiatives"];
  statLabels.forEach(function(item, index) {
    if (statTexts[index]) item.textContent = statTexts[index];
  });

  var cvHeader = document.querySelector("#sec-cv .page-header h2");
  if (cvHeader) cvHeader.textContent = "Curriculum Vitae";
  var cvSub = document.querySelector("#sec-cv .page-header .sub");
  if (cvSub) cvSub.textContent = "Academic Profile and Professional Record";

  var worksHeader = document.querySelector("#sec-works .page-header h2");
  if (worksHeader) worksHeader.textContent = "Selected Works";
  var worksSub = document.querySelector("#sec-works .page-header .sub");
  if (worksSub) worksSub.textContent = "Design Portfolio";

  var workTitles = [
    "Stone House Design",
    "Tiny House Design",
    "Zhongan Bridge Design",
    "Dayang Mountain Slow-Mobility System",
    "Rural Planning for Xinqiao Village, Situan Town, Fengxian"
  ];
  var workBodies = [
    "A rural architectural proposal using stone as the principal tectonic language, integrating terrain and traditional craft.",
    "A study of compression and release in domestic space under extreme area constraints, rethinking compact urban living.",
    "A contemporary timber pedestrian bridge balancing structural logic, spatial rhythm, and waterfront character.",
    "An ecological walking system for Dayang Mountain Forest Park that reframes the relationship between body, path, and landscape.",
    "A village-scale strategy rooted in local culture and industry, balancing conservation with rural revitalization."
  ];

  document.querySelectorAll(".work-card").forEach(function(card, index) {
    var title = card.querySelector("h3");
    var body = card.querySelector("p");
    var link = card.querySelector(".work-link");
    if (title && workTitles[index]) title.textContent = workTitles[index];
    if (body && workBodies[index]) body.textContent = workBodies[index];
    if (link) link.textContent = "View project →";
  });

  var poemsHeader = document.querySelector("#sec-poems .page-header h2");
  if (poemsHeader) poemsHeader.textContent = "Poetry";
  var poemsSub = document.querySelector("#sec-poems .page-header .sub");
  if (poemsSub) poemsSub.textContent = "Classical Chinese Poetry";

  var activitiesHeader = document.querySelector("#sec-activities .page-header h2");
  if (activitiesHeader) activitiesHeader.textContent = "K-12 Education";
  var activitiesSub = document.querySelector("#sec-activities .page-header .sub");
  if (activitiesSub) activitiesSub.textContent = "Engineering Education, Outreach, and Public Engagement";

  var pubsHeader = document.querySelector("#sec-publications .page-header h2");
  if (pubsHeader) pubsHeader.textContent = "Publications";
  var pubsSub = document.querySelector("#sec-publications .page-header .sub");
  if (pubsSub) pubsSub.textContent = "Journal Articles, Conference Papers, and Education Research";

  var footer = document.querySelector(".site-footer p");
  if (footer) {
    footer.innerHTML = '© 2026 Jing LUO · Shanghai Normal University &nbsp;|&nbsp; <a href="mailto:luojing94@shnu.edu.cn">luojing94@shnu.edu.cn</a>';
  }
}

window.projectDateSeparator = ", ";

if (window.SiteCore) {
  window.SiteCore.initPage({ beforeRender: applyEnglishPage });
}
