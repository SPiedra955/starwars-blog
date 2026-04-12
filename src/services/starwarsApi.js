const starwarsApi = {}
const url = 'https://swapi.tech/api'

starwarsApi.getData = async (params) => {
    try {
        const resp = await fetch(`${url}/${params}/?expanded=true`)
        if (!resp.ok) throw new Error('Something went wrong')
        const data = await resp.json()
        console.log(data.results)
        return data
    } catch (error) {
        return error
    }
}

starwarsApi.getRecord = async (param, id) => {
    try {
        const resp = await fetch(`${url}/${param}/${id}`)
        if (!resp.ok) throw new Error('Something went wrong')
        const data = await resp.json()
        return data.result
    } catch (error) {
        return error
    }
}

export default starwarsApi