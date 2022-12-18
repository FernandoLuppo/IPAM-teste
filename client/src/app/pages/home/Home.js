//  NPM
import { Link } from "react-router-dom"
//  Componentes
import { Header } from "../../shared/components"
//  CSS
import "./home.css"

export const Home = () => {
    return (
        <div>   
            <Header />
            <div className="home-container">
                <div className="home-background"></div>
                <main>
                    <section>
                        <div className="home-title">
                            <h1>Teste IPAM</h1>
                            <h3>Desenvolvedor Front-End</h3>
                        </div>
                        <div className="home-content">
                            <h3>Desafio</h3>
                            <div>
                                <p>
                                    O desafio consiste em criar dois selects um para selecionar um estado e o outro um município,
                                    utilizando a API do IBGE, com base nos valores escolhidos pelo usuário deverá retornar
                                    as seguintes informações: informações de microrregião, mesorregião, UF e região do município.
                                </p>
                            </div>
                        </div>
                        <div className="home-content">
                            <h3>Para realizar esse teste utilizei as seguintes tecnologias:</h3>
                            <div>
                                <ul>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Redux Toolkit</li>
                                    <li>Axios</li>
                                </ul>
                            </div>
                        </div>
                        <div className="home-button">
                            <Link to="/search" className="home-link"><button>Pesquise Aqui</button></Link>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}