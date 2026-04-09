function applyChinesePage() {
  var statLinks = document.querySelectorAll(".hero-stats .stat-link");
  var stats = [
    { href: "/cv/#cv-publications-content", num: "39", label: "论著" },
    { href: "/cv/#hosted-research-projects", num: "12", label: "主持项目" },
    { href: "/cv/#research-awards", num: "33", label: "荣誉奖励" },
    { href: "/works/#works-showcase", num: "5", label: "作品" },
    { href: "/poems/#poems-content", num: "47", label: "诗歌" },
    { href: "/activities/#k12-courses", num: "18", label: "K-12课程实践" }
  ];

  statLinks.forEach(function(link, index) {
    var stat = stats[index];
    if (!stat) return;
    link.href = stat.href;
    var num = link.querySelector(".stat-num");
    var label = link.querySelector(".stat-label");
    if (num) num.textContent = stat.num;
    if (label) label.textContent = stat.label;
  });
}

window.projectDateSeparator = "，";

if (window.SiteCore) {
  window.SiteCore.initPage({ beforeRender: applyChinesePage });
}
