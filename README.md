# IVAO SID Matcher – EGKK

Live departure SID matching tool for London Gatwick (EGKK) using IVAO live traffic.

## What it does

- Fetches live IVAO departures from Gatwick via the [IVAO Whazzup v2 API](https://api.ivao.aero/v2/tracker/whazzup)
- Extracts the **first waypoint** from each aircraft's filed route
- Matches it against the **full EGKK SID database** (`egkk_sids.js`) filtered by your active runway selection
- Displays callsign, first fix, matched SID, and match status in a live-updating table
- Auto-refreshes every **15 seconds**

## Files

| File | Purpose |
|---|---|
| `index.html` | Main SID matcher page |
| `egkk_sids.js` | EGKK SID database (64 SIDs, 08R + 26L) |

## Setup

1. Clone or download this repo
2. Host the files on any static web server (GitHub Pages works perfectly)
3. Open `index.html` in a browser
4. Select your active runway(s), enter airport (EGKK), press **Update from IVAO**

## Token server

Uses [ivao-token-server.onrender.com/token](https://ivao-token-server.onrender.com/token) to authenticate with the IVAO API.

## SID database

Sourced from the UK AIP / CAA NATS official charts for EGKK.  
Covers all standard RNAV1 SIDs for runways **08R** and **26L**.

| Waypoint | 26L SIDs | 08R SIDs |
|---|---|---|
| BIG | BIG4X, BIG4Z | BIG4U, BIG4Y |
| BOGNA | BOGNA1X, BOGNA1Z | BOGNA1U, BOGNA1Y |
| CLN | CLN2X, CLN2Z | CLN2U, CLN2Y |
| CPT | CPT2X, CPT2Z | CPT2U, CPT2Y |
| DVR | DVR6X, DVR6Z | DVR6U, DVR6Y |
| FRANE | FRANE1X, FRANE1Z | FRANE1U, FRANE1Y |
| IMVUR | IMVUR1X, IMVUR1Z | IMVUR1U, IMVUR1Y |
| KENET | KENET4X, KENET4Z | KENET4U, KENET4Y |
| KIDLI | KIDLI1X, KIDLI1Z | KIDLI1U, KIDLI1Y |
| LAM | LAM6X, LAM6Z | LAM6U, LAM6Y |
| NOVMA | NOVMA1X, NOVMA1Z | NOVMA1U, NOVMA1Y |
| MIMKU | MIMKU1X, MIMKU1Z | MIMKU1U, MIMKU1Y |
| RINIS | RINIS1X, RINIS1Z | RINIS1U, RINIS1Y |
| SAM | SAM2X, SAM2Z | SAM2U, SAM2Y |
| SFD | SFD4X, SFD4Z | SFD4U, SFD4Y |
| TIMBA | TIMBA2X, TIMBA2Z | TIMBA2U, TIMBA2Y |
