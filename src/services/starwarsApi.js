const starwarsApi = {}
const url = 'https://swapi.tech/api'

starwarsApi.getData = async (params) => {
    try {
        const resp = await fetch(`${url}/${params}/?expanded=true`)
        if (!resp.ok) throw new Error('Something went wrong')
        const data = await resp.json()
        console.log(data.results)
        return data.results
    } catch (error) {
        return error
    }
}

export default starwarsApi