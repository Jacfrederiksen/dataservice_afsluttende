import { useState, useEffect } from "react";
import { ScaleLoader } from 'react-spinners'
import './more.scss';
import { NavLink } from 'react-router-dom'
import { getMoreServices } from "../../helpers/localservercall";

const More = () => {

    const [moreServices, setMoreServices] = useState()
    const [loading, setLoading] = useState(false)
    const [fejl, setFejl] = useState(false)

    useEffect(() => {

        setLoading(true);

        getMoreServices()
            .then(
                data => {
                    if (data) {
                        console.log(data);
                        setMoreServices(data);
                        setFejl(false);
                    } else {
                        setMoreServices();
                        setFejl(true);
                    }
                }
            )
            .finally(
                setLoading(false)
            )
    }, [])

    return (

        <div className="moreCon">
                <div className="moreTopBox">
                    <h2>Vores ydelser</h2>
                    <hr />
                    <p>Herunder en oversigt over alle vores services.</p>
                    <p>Hvis du måtte have flere spørgsmål, er du velkommen til at kontakte os.</p>
                </div>
            {
                moreServices && <div className="moreServices">
                    {
                        moreServices.map(s =>
                            <div key={s._id}>
                                <img src={"http://localhost:5023/images/" + s.image} alt="" />
                                <h3>{s.title}</h3>
                                <p>{s.content}</p>
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
                <div className="buttonCon"><NavLink className="navLink" to="/"> <button>TILBAGE</button></NavLink></div>
        </div>
    )
}

export default More
