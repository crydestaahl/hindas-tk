import * as React from "react"
import LayoutCampaign from '../components/layoutCampaign'

const Campaign = () => {
    return(
        <LayoutCampaign>
            <div 
                style={{
                    padding: '1rem'
                }}
            >
                <h1 style={{fontSize: '2em', fontWeight: 'bolder', marginBottom: '2rem', marginTop: '-5rem'}}>Klart du ska spela tennis!</h1>
                <p>Klicka på länken nedan, välj datum och boka önskad lediga tid.</p>
                <br/>
                <p>Vill du spela på grusbanan bockar du i rutan "Utebana" för att se lediga tider.</p>
                <br/>
                <p>Behöver du låna racket och bollar ringer du till <a href="tel:+46736926360">Christoffer</a> så löser vi det.</p>
                <button className="button" style={{marginTop: '2.5rem', background: '#a70d18'}}><a href="https://www.matchi.se/facilities/hindastk?date=2021-04-13&sport=" style={{color: 'white', textTransform: 'uppercase'}}>Boka bana</a></button>
            </div>
        </LayoutCampaign>
    )
}

export default Campaign; 