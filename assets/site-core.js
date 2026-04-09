(function() {
  var sectionIds = ["home", "cv", "works", "poems", "activities", "publications"];
  var isEnglish = window.location.pathname.indexOf("/en") === 0;
  var localePrefix = isEnglish ? "/en" : "";

  function normalizeRootPath() {
    if (window.location.pathname === "/index.html") {
      window.history.replaceState(null, "", "/");
    }
    if (window.location.pathname === "/en.html" || window.location.pathname === "/en/index.html") {
      window.history.replaceState(null, "", "/en/" + window.location.hash);
    }
    sectionIds.forEach(function(id) {
      var plainPath = (isEnglish ? "/en/" : "/") + (id === "home" ? "" : id);
      var indexPath = plainPath.replace(/\/$/, "") + "/index.html";
      if (window.location.pathname === plainPath && id !== "home") {
        window.history.replaceState(null, "", plainPath + "/" + window.location.hash);
      }
      if (window.location.pathname === indexPath) {
        window.history.replaceState(null, "", plainPath + (plainPath.endsWith("/") ? "" : "/") + window.location.hash);
      }
    });
  }

  function getSectionFromPath() {
    var path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/" || path === "/en") return "home";

    var normalized = isEnglish ? path.replace(/^\/en/, "") || "/" : path;
    normalized = normalized.replace(/^\/+/, "");

    if (sectionIds.indexOf(normalized) !== -1) return normalized;

    var hash = window.location.hash.replace(/^#/, "");
    if (sectionIds.indexOf(hash) !== -1) return hash;
    return "home";
  }

  function buildSectionUrl(id) {
    return id === "home" ? (localePrefix || "/") + (localePrefix ? "/" : "") : localePrefix + "/" + id + "/";
  }

  function buildLanguageUrl(targetEnglish, id) {
    var prefix = targetEnglish ? "/en" : "";
    if (id === "home") return prefix ? prefix + "/" : "/";
    return prefix + "/" + id + "/";
  }

  function setHref(id, href) {
    var links = document.querySelectorAll('[data-route="' + id + '"]');
    links.forEach(function(link) {
      link.setAttribute("href", href);
    });
  }

  function configureRoutes() {
    sectionIds.forEach(function(id) {
      setHref(id, buildSectionUrl(id));
    });

    var currentSection = getSectionFromPath();
    document.querySelectorAll('[data-lang="zh"]').forEach(function(link) {
      link.setAttribute("href", buildLanguageUrl(false, currentSection));
    });
    document.querySelectorAll('[data-lang="en"]').forEach(function(link) {
      link.setAttribute("href", buildLanguageUrl(true, currentSection));
    });
  }

  function renderProjectList(targetId, items) {
    var target = document.getElementById(targetId);
    if (!target || !Array.isArray(items)) return;

    var separator = window.projectDateSeparator || "，";
    var html = "<ol>";

    items.forEach(function(item) {
      var date = item.date ? item.date + separator : "";
      html += "<li>" + date + item.text + "</li>";
    });

    html += "</ol>";
    target.innerHTML = html;
  }

  function renderCvGrid() {
    var target = document.querySelector("#sec-cv .cv-grid");
    if (!target || !window.siteCvData || !Array.isArray(window.siteCvData.cards)) return;

    var html = "";
    window.siteCvData.cards.forEach(function(card) {
      html += '<div class="cv-card' + (card.full ? " cv-card-full" : "") + '">';
      html += "<h3>" + card.title + "</h3>";

      if (card.type === "target") {
        html += '<div id="' + card.targetId + '"></div>';
      } else if (card.type === "ol" || card.type === "ul") {
        html += "<" + card.type + ">";
        (card.items || []).forEach(function(item) {
          html += "<li>" + item + "</li>";
        });
        html += "</" + card.type + ">";
      }

      html += "</div>";
    });

    target.innerHTML = html;
  }

  function renderProjectSections() {
    if (!window.siteProjectData) return;

    renderProjectList("hosted-research-projects", window.siteProjectData.hostedResearch);
    renderProjectList("participated-research-projects", window.siteProjectData.participatedResearch);
    renderProjectList("hosted-teaching-projects", window.siteProjectData.hostedTeaching);
    renderProjectList("participated-teaching-projects", window.siteProjectData.participatedTeaching);
  }

  function renderAwardList(targetId, items) {
    var target = document.getElementById(targetId);
    if (!target || !Array.isArray(items)) return;

    var html = "";
    items.forEach(function(item) {
      html += '<div class="award-item"><span class="award-year">' + (item.date || "") + '</span><span class="award-text">' + item.text + "</span></div>";
    });
    target.innerHTML = html;
  }

  function renderAwardsSections() {
    if (!window.siteAwardsData) return;

    renderAwardList("research-awards", window.siteAwardsData.research);
    renderAwardList("teaching-awards", window.siteAwardsData.teaching);
    renderAwardList("legacy-awards", window.siteAwardsData.legacy);
  }

  function renderCoursesSection() {
    var target = document.getElementById("k12-courses");
    if (!target || !window.siteCoursesData || !Array.isArray(window.siteCoursesData.items)) return;

    var html = '<div class="cv-card cv-card-full" style="margin-bottom: 24px;">';
    html += "<h3>" + window.siteCoursesData.title + "</h3><ol>";
    window.siteCoursesData.items.forEach(function(item) {
      html += "<li>" + item + "</li>";
    });
    html += "</ol></div>";
    target.innerHTML = html;
  }

  function renderPublicationsSection() {
    var target = document.getElementById("publications-content");
    if (!target || !window.sitePublicationsData || !Array.isArray(window.sitePublicationsData.groups)) return;

    var html = "";
    window.sitePublicationsData.groups.forEach(function(group) {
      html += '<div class="pub-year-group"><h3>' + group.title + "</h3>";
      group.items.forEach(function(item, index) {
        html += '<div class="pub-item"><span class="pub-num">' + (index + 1) + '</span><span class="pub-text">' + item + "</span></div>";
      });
      html += "</div>";
    });
    target.innerHTML = html;
  }

  function activateSection(id) {
    document.querySelectorAll(".section").forEach(function(section) {
      section.classList.remove("active");
    });
    document.querySelectorAll(".nav-links a").forEach(function(link) {
      link.classList.remove("active");
    });

    var section = document.getElementById("sec-" + id);
    var nav = document.getElementById("nav-" + id);

    if (section) section.classList.add("active");
    if (nav) nav.classList.add("active");

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function showSection(id, updateUrl) {
    activateSection(id);

    if (updateUrl !== false) {
      window.location.href = buildSectionUrl(id);
    }

    return false;
  }

  function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu) menu.classList.toggle("open");
  }

  function initPage(options) {
    normalizeRootPath();

    if (options && typeof options.beforeRender === "function") {
      options.beforeRender();
    }

    renderCvGrid();
    renderAwardsSections();
    renderProjectSections();
    renderCoursesSection();
    renderPublicationsSection();
    configureRoutes();
    showSection(getSectionFromPath(), false);
  }

  window.SiteCore = {
    initPage: initPage,
    renderCvGrid: renderCvGrid,
    renderProjectSections: renderProjectSections,
    renderAwardsSections: renderAwardsSections,
    renderCoursesSection: renderCoursesSection,
    renderPublicationsSection: renderPublicationsSection,
    showSection: showSection,
    toggleMenu: toggleMenu
  };

  window.showSection = showSection;
  window.toggleMenu = toggleMenu;
})();
