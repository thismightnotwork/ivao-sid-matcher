// EGHH SID database – sourced from IVAO XU EG-Sector-File (EGHH.sid)
// Format: { sid, runways: [array], waypoint (exit fix) }

const EGHH_SIDS = [
  // RWY 08 SIDs
  { sid: "08SAMEST",   runways: ["08"],       waypoint: "SAM" },
  { sid: "08SAMNTH",   runways: ["08"],       waypoint: "SAM" },
  { sid: "08ORTAC",    runways: ["08"],       waypoint: "ORTAC" },
  // RWY 26 SIDs
  { sid: "26SAMEST",   runways: ["26"],       waypoint: "SAM" },
  { sid: "26SAMNTH",   runways: ["26"],       waypoint: "SAM" },
  { sid: "26LELNA",    runways: ["26"],       waypoint: "LELNA" },
  // RWY 08/26 combined SIDs
  { sid: "0826GWCEST", runways: ["08", "26"], waypoint: "GWC" },
  { sid: "0826KENET",  runways: ["08", "26"], waypoint: "KENET" },
  { sid: "0826NORRY",  runways: ["08", "26"], waypoint: "NORRY" },
];
