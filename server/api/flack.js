export default defineEventHandler(async (event) => {

    //params
    //const { name } = getQuery(event)

    //post
    //const { age } = await readBody(event) 

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_RaLoc4OgN05X8YCvTcgXwV6qd9tfTHING7AlJ88U')

    //return {
    //    message: `Hello ${name}, you are ${age} years old.`
    //}

    return data
})