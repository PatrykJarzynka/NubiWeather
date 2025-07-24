import { ref } from 'vue';
import axios, { AxiosRequestConfig } from 'axios'



export function useFetch<T = unknown>() {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)

  const execute = async (url: string, config?: AxiosRequestConfig): Promise<void> => {
    isLoading.value = true
    error.value = null
    data.value = null

    try {
      const response = await axios(url, config)
      data.value = response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || err.message || 'Something went wrong!'
    } finally {
      isLoading.value = false
    }
  }

  return {
    data,
    error,
    isLoading,
    execute,
  }
}
