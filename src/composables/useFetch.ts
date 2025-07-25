import { onBeforeUnmount, ref } from 'vue';
import axios, { AxiosRequestConfig } from 'axios'



export function useFetch<T = unknown>() {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const isLoading = ref(false)
  let controller: AbortController | null = null;

  const execute = async (url: string, config?: AxiosRequestConfig): Promise<void> => {
    isLoading.value = true
    error.value = null
    data.value = null

    controller = new AbortController()

    try {
      const response = await axios(url, {
        ...config,
        signal: controller.signal
      })
      data.value = response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || err.message || 'Something went wrong!'
    } finally {
      isLoading.value = false
      controller = null
    }
  }

  onBeforeUnmount(() => {
    if (controller) {
      controller.abort()
    }
  })

  return {
    data,
    error,
    isLoading,
    execute,
  }
}
