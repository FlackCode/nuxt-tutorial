export default defineEventHandler(async (event) => {

    const { code } = event.context.params

    const { currencyKey } = useRuntimeConfig()

    // Construct API URL
    //const url = `https://api.currencyapi.com/v3/latest?currencies=GBP&apiKey=${currencyKey}`
  
    try {
      // Fetch data from the API
      const response = await $fetch(url)
      return response
    } catch (error) {
      // Handle errors
      throw createError({
        statusCode: error.response?.status || 500,
        message: error.response?.statusText || 'Internal Server Error'
      })
    }

})