import React from "react"
import axios from "axios"
import { API_TOKEN } from "@env"

export const fetchApi = async (url, query, dispatch, didCancel) => {
  dispatch({ type: "FETCH_INIT" })
  try {
    const result = await axios(url + query + API_TOKEN)

    if (!didCancel) {
      dispatch({ type: "FETCH_SUCCESS", payload: result.data })
    }
  } catch (error) {
    if (!didCancel) {
      dispatch({ type: "FETCH_FAILURE" })
    }
  }
}
