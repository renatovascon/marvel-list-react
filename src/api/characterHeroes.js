import { axiosBaseURL, params } from "./apiRequestHeroes"

const getHeroes = async (offset = 0, limit = 10) => {
  try {
    const response = await axiosBaseURL.get("characters", {
      params: { ...params, offset, limit },
    })
    return response.data.data
  } catch (error) {
    console.error("Erro ao obter heróis:", error)
    throw error
  }
}

const getHeroesByName = async (name = "") => {
  try {
    const response = await axiosBaseURL.get("characters", {
      params: { ...params, name },
    })
    return response.data.data
  } catch (error) {
    console.error("Erro ao obter heróis:", error)
    throw error
  }
}

export { getHeroes, getHeroesByName }
