const starwarsApi = {}
const url = 'https://www.swapi.tech/api/'

starwarsApi.getData = async () => {
    try {
        const resp = await fetch(url + 'vehicles/?expanded=true')
        if (!resp.ok) throw new Error('Something went wrong')
        const data = await resp.json()
        console.log(data.results)
        return data.results
    } catch (error) {
        return error
    }
}
starwarsApi.getPeopleData = async () => {
    try {
        const resp = await fetch(url + 'people/?expanded=true')
        if (!resp.ok) throw new Error('Something went wrong')
        const data = await resp.json()
        console.log(data.results)
        return data.results
    } catch (error) {
        return error
    }
}


starwarsApi.getPlanetData = async () => {
    try {
        const resp = await fetch(url + 'planets/?expanded=true')
        if (!resp.ok) throw new Error('Something went wrong')
        const data = await resp.json()
        console.log(data.results)
        return data.results
    } catch (error) {
        return error
    }
}
export default starwarsApi