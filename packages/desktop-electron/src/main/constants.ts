import { app } from "electron"
import { PAWWORK_APP, PAWWORK_RELEASE_OWNER, PAWWORK_UPDATE_CHANNEL, parsePawWorkChannel } from "./app-identity"

export const CHANNEL = parsePawWorkChannel(import.meta.env.OPENCODE_CHANNEL)

export const UPDATER_ACTIVE = app.isPackaged && CHANNEL === "prod"

// The fork uses a distinct metadata channel and its own GitHub Releases.
// No upstream R2 endpoint is configured: the fork must never consume official assets.
export const UPDATE_CHANNEL = PAWWORK_UPDATE_CHANNEL
export const UPDATE_GITHUB_OWNER = PAWWORK_RELEASE_OWNER
export const UPDATE_GITHUB_REPO = PAWWORK_APP.prod.releaseRepo
export const DOWNLOAD_PUBLIC_BASE: string | undefined = undefined
