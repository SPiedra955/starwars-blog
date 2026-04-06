const starwarsApi = {}
const url = 'https://swapi.tech/api/'

starwarsApi.getData = async () => {
    try {
        const resp = await fetch(url + 'films')
        if (!resp.ok) throw new Error('Something went wrong')
        const data = await resp.json()
        console.log(data.result)
        return data.result
    } catch (error) {
        return error
    }
}
starwarsApi.getPeopleData = async () => {
    try {
        const resp = await fetch(url + 'people')
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
        const resp = await fetch(url + 'planets')
        if (!resp.ok) throw new Error('Something went wrong')
        const data = await resp.json()
        console.log(data.results, 'ppl')
        return data.results
    } catch (error) {
        return error
    }
}
export default starwarsApi