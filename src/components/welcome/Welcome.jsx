import { useState, useEffect } from "react";
import { ScaleLoader } from 'react-spinners'
import parse from 'html-react-parser'
import './welcome.scss';
import { NavLink } from 'react-router-dom'
import { getAboutUs } from "../../helpers/localservercall";
import { getAboutServices } from "../../helpers/localservercall";

const Welcome = () => {

    const [aboutServices, setAboutServices] = useState()
    const [aboutUs, setAboutUs] = useState()
    const [loading, setLoading] = useState(false)
    const [fejl, setFejl] = useState(false)

    useEffect(() => {

        setLoading(true);

        getAboutUs()
            .then(
                data => {
                    if (data) {
                        console.log(data);
                        setAboutUs(data);
                        setFejl(false);
                    } else {
                        setAboutUs();
                        setFejl(true);
                    }
                }
            )
            .finally(
                setLoading(false)
            )
    }, [])

    useEffect(() => {

        setLoading(true);

        getAboutServices()
            .then(
                data => {
                    if (data) {
                        console.log(data);
                        setAboutServices(data);
                        setFejl(false);
                    } else {
                        setAboutServices();
                        setFejl(true);
                    }
                }
            )
            .finally(
                setLoading(false)
            )
    }, [])

    return (
        <div className="welcomeCon">
            {
                aboutUs && <div className="aboutUs">
                    {

                        <div key={aboutUs._id}>
                            <h2>{parse(aboutUs.title)}</h2>
                            <div className="hrCon"><hr /></div>
                            <p>{ parse(aboutUs.content) }</p>
                            <NavLink to="/more"><button>SE ALLE YDELSER</button></NavLink>
                        </div>

                    }
                    {
                        loading && <div>
                            <ScaleLoader color={"#FF0000"} />
                        </div>
                    }
                    {
                        fejl && <h1>Der er opstået en fejl</h1>
                    }
                </div>
            }
            {
                aboutServices && <div className="aboutServices">
                    {
                        aboutServices.map(a =>
                        <div key={a._id}>
                            <img src={"http://localhost:5023/images/" + a.image} alt="" />
                            <h3>{a.title}</h3>
                            <div><p>{a.content}</p></div>
                        </div>
                        )
                        

                    }
                    {
                        loading && <div>
                            <ScaleLoader color={"#FF0000"} />
                        </div>
                    }
                    {
                        fejl && <h1>Der er opstået en fejl</h1>
                    }
                </div>
            }
        </div>
    )
}

export default Welcome
