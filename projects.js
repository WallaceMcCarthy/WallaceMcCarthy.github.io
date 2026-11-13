// Your projects, newest first. To add one, copy a block, change the values, save, commit.
// Fields:
//   name    shown as the title (required)
//   blurb   one sentence about it (required)
//   year    when you made it
//   icon    a square image in icons/ (optional; a lettered tile is drawn if left out)
//   site    the project's website or demo (optional)
//   source  its GitHub repo (optional)
//   tags    a few short words (optional)
window.PROJECTS = [
  {
    name: "Utah Avalanches",
    blurb: "An experimental 3D map of Little Cottonwood Canyon built from USGS 1 m lidar, with modeled snowpack, shear lines, avalanche runout and reported avalanches. Not a forecast: always read the Utah Avalanche Center first.",
    year: 2026,
    icon: "icons/avalanche.png",
    site: "https://utahavalanches.com",
    tags: ["3D map", "Lidar", "Python"]
  },
  {
    name: "NotchMic",
    blurb: "Tap your MacBook twice and start talking. Toggles macOS Dictation from a double tap on the laptop body or a click beside the notch.",
    year: 2026,
    icon: "icons/notchmic.png",
    site: "https://wallacemccarthy.github.io/NotchMic/",
    source: "https://github.com/WallaceMcCarthy/NotchMic",
    tags: ["macOS", "Swift"]
  },
  {
    name: "Utah Fit",
    blurb: "Find a home in Utah that fits how you live. Homes and apartments across 42 towns, ranked by your priorities, with every score traced to a public source. Won the Technical category at the REDO hackathon.",
    year: 2026,
    icon: "icons/utahfit.svg",
    site: "https://cmascope.com",
    source: "https://github.com/WallaceMcCarthy/REDO-Hackathon",
    tags: ["React", "MapLibre", "Hackathon"]
  },
];
