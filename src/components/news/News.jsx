import { useState, useEffect } from 'react'
import { ScaleLoader } from 'react-spinners'
import { hentNyheder } from '../../helpers/newsapicall'
import './news.scss';

const News = () => {

    const [news, setNews] = useState()
    const [loading, setLoading] = useState(false)
    const [fejl, setFejl] = useState(false)

    useEffect(() => {

        setLoading(true);

        hentNyheder()
            .then(
                data => {
                    if (data) {
                        console.log(data);
                        setNews(data); // put data fra api'et i state
                        setFejl(false); // nulstill en evt. tidligere fejl
                    } else {
                        setNews();  //nulstil/tøm evt. tidl.data
                        setFejl(true);
                    }
                }
            )
            .finally(
                setLoading(false)

            )


    }, [])

    return (
        <div className="newsCon">
            {
                news && <div className="news">
                 <h3>Dagens nyheder inden for Science</h3>

                    {
                        news.articles.slice(0,3).map(n => (

                            <div key={n.url}>
                                <h5>{n.title}</h5>
                                <p>{n.source.name}</p>
                            </div>

                        ))
                    }

                </div>
            }
            {
                loading && <div>
                    <h1>Der loades data fra API'et... Vent venligst</h1>
                    <ScaleLoader color={"#FF0000"} />
                </div>
            }
            {
                fejl && <h1>Der er opstået en fejl</h1>
            }
        </div>
    )
}

export default News
