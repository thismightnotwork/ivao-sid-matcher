// EGGW SID database – sourced from IVAO XU EG-Sector-File (EGGW.sid)
// Format: { sid, runways: [array], waypoint (exit fix) }

const EGGW_SIDS = [
  // RWY 25 SIDs
  { sid: "DET3Y",    runways: ["25"], waypoint: "DET" },
  { sid: "DET8B",    runways: ["25"], waypoint: "DET" },
  { sid: "MATCH3B",  runways: ["25"], waypoint: "MATCH" },
  { sid: "MATCH3Y",  runways: ["25"], waypoint: "MATCH" },
  { sid: "OLNEY2B",  runways: ["25"], waypoint: "OLNEY" },
  { sid: "RODNI1B",  runways: ["25"], waypoint: "RODNI" },
  { sid: "JULIET",   runways: ["25"], waypoint: "BKY" },
  // RWY 07 SIDs
  { sid: "DET7C",    runways: ["07"], waypoint: "DET" },
  { sid: "MATCH2C",  runways: ["07"], waypoint: "MATCH" },
  { sid: "OLNEY2C",  runways: ["07"], waypoint: "OLNEY" },
  { sid: "RODNI1C",  runways: ["07"], waypoint: "RODNI" },
  { sid: "WHISKY",   runways: ["07"], waypoint: "BKY" },
];
