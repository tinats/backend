let _settings = require("../../settings.json")

export default function Settings() {

    return process.env.NODE_ENV === "production" ? _settings.PROD : _settings.DEV

}