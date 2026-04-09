(function() {
  var pathname = window.location.pathname;
  var isEnglish = pathname.indexOf("/en/") === 0;
  var locale = isEnglish ? "en" : "zh";
  var localePrefix = isEnglish ? "/en" : "";
  var navMap = [
    { id: "home", zh: "首页", en: "Home" },
    { id: "cv", zh: "简历", en: "CV" },
    { id: "works", zh: "作品", en: "Works" },
    { id: "poems", zh: "诗歌", en: "Poetry" },
    { id: "activities", zh: "科普活动", en: "K-12 Education" },
    { id: "publications", zh: "论文发表", en: "Publications" }
  ];

  function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu) menu.classList.toggle("open");
  }

  function getSlug() {
    var parts = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
    return parts[parts.length - 1] || "stonehouse";
  }

  function getProject(slug) {
    return (window.siteProjectPages || []).find(function(item) {
      return item.slug === slug;
    });
  }

  function routeFor(id) {
    if (id === "home") return localePrefix ? localePrefix + "/" : "/";
    return localePrefix + "/" + id + "/";
  }

  function switchRoute(slug, targetLocale) {
    return targetLocale === "en" ? "/en/" + slug + "/" : "/" + slug + "/";
  }

  function setText(selector, text) {
    var node = document.querySelector(selector);
    if (node) node.textContent = text;
  }

  function setHtml(selector, html) {
    var node = document.querySelector(selector);
    if (node) node.innerHTML = html;
  }

  function renderProjectNav() {
    navMap.forEach(function(item) {
      var label = locale === "en" ? item.en : item.zh;
      var navLink = document.getElementById("nav-" + item.id);
      if (navLink) {
        navLink.textContent = label;
        navLink.href = routeFor(item.id);
        navLink.classList.toggle("active", item.id === "works");
      }

      document.querySelectorAll('[data-route="' + item.id + '"]').forEach(function(link) {
        link.href = routeFor(item.id);
      });
    });

    var mobileLinks = document.querySelectorAll("#mobile-menu .mobile-route");
    mobileLinks.forEach(function(link) {
      var id = link.getAttribute("data-route");
      var label = navMap.find(function(item) { return item.id === id; });
      if (label) link.textContent = locale === "en" ? label.en : label.zh;
    });

    var navLogo = document.querySelector(".nav-logo");
    if (navLogo) navLogo.textContent = locale === "en" ? "Jing LUO" : "罗晶 · Jing LUO";
  }

  function renderLanguageLinks(slug) {
    document.querySelectorAll('[data-lang="zh"]').forEach(function(link) {
      link.href = switchRoute(slug, "zh");
      link.classList.toggle("active", locale === "zh");
      link.textContent = link.closest(".mobile-lang-switch") ? "中文" : "中";
    });
    document.querySelectorAll('[data-lang="en"]').forEach(function(link) {
      link.href = switchRoute(slug, "en");
      link.classList.toggle("active", locale === "en");
      link.textContent = link.closest(".mobile-lang-switch") ? "English" : "EN";
    });
  }

  function renderPager(project, index) {
    var container = document.getElementById("project-pager");
    if (!container) return;

    var previous = window.siteProjectPages[index - 1] || null;
    var next = window.siteProjectPages[index + 1] || null;
    var backLabel = locale === "en" ? "Back to Works" : "返回作品集";
    var prevLabel = locale === "en" ? "Previous Project" : "上一个作品";
    var nextLabel = locale === "en" ? "Next Project" : "下一个作品";

    var html = "";

    if (previous) {
      html += '<a class="project-pager-card" href="' + switchRoute(previous.slug, locale) + '">';
      html += '<span class="project-pager-label">' + prevLabel + "</span>";
      html += "<strong>" + previous[locale].title + "</strong>";
      html += "</a>";
    } else {
      html += '<div class="project-pager-card muted">';
      html += '<span class="project-pager-label">' + prevLabel + "</span>";
      html += "<strong>" + backLabel + "</strong>";
      html += "</div>";
    }

    html += '<a class="project-pager-card center" href="' + routeFor("works") + '">';
    html += '<span class="project-pager-label">' + (locale === "en" ? "Portfolio" : "作品集") + "</span>";
    html += "<strong>" + backLabel + "</strong>";
    html += "</a>";

    if (next) {
      html += '<a class="project-pager-card" href="' + switchRoute(next.slug, locale) + '">';
      html += '<span class="project-pager-label">' + nextLabel + "</span>";
      html += "<strong>" + next[locale].title + "</strong>";
      html += "</a>";
    } else {
      html += '<div class="project-pager-card muted">';
      html += '<span class="project-pager-label">' + nextLabel + "</span>";
      html += "<strong>" + backLabel + "</strong>";
      html += "</div>";
    }

    container.innerHTML = html;
  }

  function renderProject(project, index) {
    var copy = project[locale];
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
    document.title = copy.title + (locale === "en" ? " | Jing LUO" : " | 罗晶 · Jing LUO");
    var metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = copy.summary;

    setText("#project-kicker", copy.order);
    setText("#project-title", copy.title);
    setText("#project-subtitle", copy.subtitle);
    setText("#project-summary", copy.summary);
    setText(".project-summary-card h2", locale === "en" ? "Project Overview" : "作品信息");
    setText("#project-category-label", locale === "en" ? "Category" : "类别");
    setText("#project-category-value", copy.category);
    setText("#project-medium-label", locale === "en" ? "Format" : "形式");
    setText("#project-medium-value", copy.medium);
    setText("#project-series-label", locale === "en" ? "Collection" : "归档");
    setText("#project-series-value", locale === "en" ? "Selected Design Works" : "设计作品精选");
    setText("#project-image-heading", locale === "en" ? "Project Plate" : "项目图版");
    setText("#project-image-note", locale === "en" ? "The page presents the principal visual plate preserved from the original project archive." : "本页展示从原始项目档案中保留的主视觉图版。");
    setText("#project-back-link", locale === "en" ? "Back to Works" : "返回作品集");
    setText("#project-lang-link", locale === "en" ? "中文页面" : "English Version");

    setHtml("#project-breadcrumb", (locale === "en" ? '<a href="/en/">Home</a><span>/</span><a href="/en/works/">Works</a><span>/</span><strong>' : '<a href="/">首页</a><span>/</span><a href="/works/">作品</a><span>/</span><strong>') + copy.title + "</strong>");

    var image = document.getElementById("project-image");
    if (image) {
      image.src = project.image;
      image.alt = copy.title;
    }

    var preview = document.getElementById("project-preview");
    if (preview) {
      preview.src = project.thumb || project.image;
      preview.alt = copy.title;
    }

    var backLink = document.getElementById("project-back-link");
    if (backLink) backLink.href = routeFor("works");

    var langLink = document.getElementById("project-lang-link");
    if (langLink) langLink.href = switchRoute(project.slug, locale === "en" ? "zh" : "en");

    renderPager(project, index);
  }

  function init() {
    var slug = getSlug();
    var project = getProject(slug);
    if (!project) return;

    renderProjectNav();
    renderLanguageLinks(slug);
    renderProject(project, window.siteProjectPages.indexOf(project));
  }

  window.toggleMenu = toggleMenu;
  init();
})();
