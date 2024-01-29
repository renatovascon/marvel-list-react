import axios from "axios"

const publicKey = "bf576d5688bd1f2fe461af1e358beee7"
const ts = 6
const hash = "26f912eed9c060dff9db32c1d23f6676"

export const params = {
  ts: `${ts}`,
  apikey: `${publicKey}`,
  hash: `${hash}`, //md5(ts + privateKey + publicKey) nesta ordem, inverter a ordem a hash não é a mesma.
}

export const axiosBaseURL = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/`,
})
