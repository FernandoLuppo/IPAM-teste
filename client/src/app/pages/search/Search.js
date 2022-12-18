//  NPM
import axios from "axios"
import { getStates } from "../../shared/redux/states/states"
import { useSelector, useDispatch } from "react-redux"
//  Hooks
import { useEffect, useState } from "react"
//  Components
import { Header } from "../../shared/components"
//  CSS
import "./search.css"

export const Search = () => {
    const [cities, setCities] = useState()
    const [city, setCity] = useState()

    const states = useSelector(state => state.states)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getStates())
    }, [])

    const handleSelectorState = (e) => { 
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.target.value}/municipios`)
        .then(response => {
            setCities(response.data)
        })
    }
    
    const handleSelectorCity = (e) => {
        cities.forEach(response => {
            if(response.nome == e.target.value) {
                console.log(response);
                setCity(response)
            }
        })
    }

    return (
        <div>
            <Header />
            <div className="search-container">
                <div>
                    <div className="search-content">
                        <h1>Selecione um estado e um município</h1>
                        <div className="search-select">
                            <div>
                                <h3>Selecione um Estado</h3>
                                <select onChange={handleSelectorState}>
                                    <option selected disabled>Selecione...</option>
                                    {states.data && states.data.map(state => {
                                        return <option value={state.sigla}>{state.nome}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <h3>Selecione uma Cidade</h3>
                                <select onChange={handleSelectorCity}>
                                    <option selected disabled>Selecione...</option>
                                    {cities && cities.map(city => {
                                        return <option value={city.nome}>{city.nome}</option>                    
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="search-container-data">
                            {city && (
                                <div className="search-data">
                                    <h2>Resultados</h2>
                                    <div>
                                        <h3>Microrregião</h3>
                                        <div>
                                            <p><strong>ID:</strong> {city.microrregiao.id}</p>
                                            <p><strong>Nome:</strong> {city.microrregiao.nome}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Mesorregião</h3>
                                        <div>
                                            <p><strong>ID:</strong> {city.microrregiao.mesorregiao.id}</p>
                                            <p><strong>Nome:</strong> {city.microrregiao.mesorregiao.nome}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>UF</h3>
                                        <div>
                                            <p><strong>ID:</strong> {city.microrregiao.mesorregiao.UF.id}</p>
                                            <p><strong>Sigla:</strong> {city.microrregiao.mesorregiao.UF.sigla}</p>
                                            <p><strong>Nome:</strong> {city.microrregiao.mesorregiao.UF.nome}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Região</h3>
                                        <div>
                                            <p><strong>ID:</strong> {city.microrregiao.mesorregiao.UF.regiao.id}</p>
                                            <p><strong>Sigla:</strong> {city.microrregiao.mesorregiao.UF.regiao.sigla}</p>
                                            <p><strong>Nome:</strong> {city.microrregiao.mesorregiao.UF.regiao.nome}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}