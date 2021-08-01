import React, {Component}from 'react';
import describedbee from '../images/describedbee.jpg';
import beefordescribe from '../images/beefordescribe.jpg';
import { ActionButton } from '../ActionButton';



export class Anatomy extends Component {

    constructor(props){
        super(props);
        this.state = {
            hair: '',
            torso: '',
            smeyes: '',
            head: '',
            wing: '',
            antennae: '',
            abdomen: '',
            eye: '',
            mouth: '',
            thirdLeg: '',
            basket: '',
            firstLeg: '',
            filister: '',
            claws: '',
            secondLeg: ''

        }
    }

    showBeeDescription = (ev) => {
        this.setState({[ev.target.id]: 'visible-description'})
    }

    showAllBeeDescriptions = () => {
        Object.keys(this.state).forEach(key => this.setState({[key]: 'visible-description'}));
       
    }

    render(){
        return (
            <div>
                <div className = 'dark-line'></div>
                <div className = 'moving-bg bg-2'><p className='sentence'>PSZCZOŁY POSTRZEGAJĄ ŚWIAT INACZEJ NIŻ MY...</p></div>
                <h4 className = 'big-text'><span className = 'letter0'>A</span><span className = 'letter1'>N</span><span className = 'letter2'>A</span><span className = 'letter3'>T</span>
                <span className = 'letter4'>O</span><span className = 'letter5'>M</span><span className = 'letter6'>I</span><span className = 'letter7'>A</span><span className = 'letter8'>&nbsp;</span>
                <span className = 'letter9'>P</span><span className = 'letter10'>S</span><span className = 'letter11'>Z</span><span className = 'letter12'>C</span><span className = 'letter13'>Z</span>
                <span className = 'letter14'>O</span><span className = 'letter15'>Ł</span><span className = 'letter16'>Y</span></h4>
                <div className = 'main-text'>
                    <h5 className = 'first-h'>BUDOWA PSZCZOŁY</h5>
                    <p> Podobnie jak w przypadku wszystkich owadów, ciało pszczoły dzieli się na trzy segmenty - głowę, tułów i odwłok pokryte chitynowym pancerzykiem. Pszczołę dodatkowo pokrywają włoski dotykowe nadające jej nieco bardziej
                        przyjazny wygląd. W głowie znajduje się otwór gębowy oraz narządy zmysłów - oczy i czułki. Narządy ruchu zlokalizowane w obrębie tułowia to trzy pary odnóży i dwie pary skrzydeł.  Na trzeciej, tylnej parze odnóży robotnice posiadają
                        tzw. koszyczki służące do przenoszenia pyłku kwiatowego zbieranego w niewielkie grudki. Na końcu odwłoka mieści się ukryty narząd przypominający kolec. Jest to żądło połączone z gruczołem jadowym, używane przez pszczoły robotnice do obrony i ataku.
                        Ciekawostką jest to, że trutnie nie posiadają żądła, a matki pszczele posiadają lecz używają wyłacznie do walki z innymi matkami. Wielkość pszczoły robotnicy to około 1,5 cm oraz waga 0,1 g.
                        Matka jest sporo większa. Jej długość sięga ponad 2 cm, a waga 0,17 -0,20 g.
                        Trutnie mierzą niecałe 2 cm, ale są cięższe od zarówno od matek jak i robotnic - ważą ok. 0,24 g.
                    
                    </p>
                    <h5>ZMYSŁY PSZCZÓŁ</h5>
                    <p> Pszczoły, postrzegają otoczenie inaczej niż ludzie.
                        Wynika to z faktu, że ich organy zmysłów funkcjonują inaczej niż nasze. </p>   
                    <ul>
                        <li> <b>SMAK</b> - Receptory, które służą pszczołom do smakowania pokarmu znajdują się na czułkach. Dzięki nim potrafią rozróżnić, czy coś ma
                        słodki, słony, czy kwaśny smak i jeśli pszczole smak się spodoba, wysunie z otworu gębowego narząd w kształcie trąbki i pobierze pokarm.</li>
                        <li><b>DOTYK</b> - Receptory dotykowe także umieszczone są na czułkach. Co ciekawe, pszczoły używają ich do mierzenia komórek ula i utrzymywania kontaktu
                        z towarzyszkami, odczytując drgania ich ciał. W odczuwaniu dotyku ważną funkcję spełniają także włoski dotykowe, pokrywające niemal całe ciało pszczoły.  </li>
                        <li><b>ZAPACH</b> - Pszczoły wytwarzają substancje chemiczne zwane feromonami, które roznoszą się w powietrzu na dużych obszarach. Dzięki nim pszczoły są w stanie
                            komunikować się i rozpoznawać obcych w ulu. Jako, że pszczoły nie posiadają nosa, jego funkcję pełnią także czułki, na których umieszczone są receptory.</li>
                        <li><b>SŁUCH</b> - Jest on u pszczoły dość prymitywny, gdyż nie posiada ona  uszu i dobrze wykształconego narządu słuchu. Pszczoła rejestruje dźwięki za pomocą narządu goleniowego,
                         który znajduje się na goleniach pierwszej pary odnóży.</li>
                        <li><b>WZROK</b> - Pszczoły posiadają złożone oczy wyposażone w tysiące receptorów - 4000 tzw. omatidiów u robotnic i 7000 u trutniów.
                        Dzięki nim pszczoły widzą obrazy podzielone na wiele małych punktów. Co więcej, pszczoły widzą inne spektrum kolorów niż ludzie. Ciekawe jest to, że nie
                        potrafią rozpoznać czerwieni, natomiast dostrzegają ultrafiolet, którego nasze oko nie rejestruje. Ponadto pszczoły posiadają na głowie trzy dodatkowe oczy tak zwane przyoczka, które nie widzą kolorów, lecz 
                        rozpoznają ciemność i światło. Są ważne dla pszczół, gdyż pomagają im orientować się w terenie. </li>
                    </ul>
                </div>
                <h4 className = 'yellow-title'>BUDOWA ROBOTNICY</h4>
                <div className = 'describedbee-box'>
                    <div className = 'describedbee'><img src = {describedbee} alt = ''/></div>
                </div>
                <div className = 'grid1'>
                    <div className = 'box-1 child'>
                        <ActionButton className = 'beebutton ' action = {this.showAllBeeDescriptions} id = 'all'/>
                        <p className = 'inline'>pokaż opisy</p>
                    </div>
                    <div className = 'box-2 child'>
                        <p className = {`hair ${this.state.hair}`}>włoski dotykowe (sensili)</p>
                        <ActionButton className='beebutton b-1' action = {this.showBeeDescription} id = 'hair' />
                        <p className = {`torso ${this.state.torso}`}>tułów</p>
                        <ActionButton className='beebutton b-2' action = {this.showBeeDescription} id = 'torso'/>
                    </div>
                    <div className = 'box-3 child'>
                        <p className = {`smeyes ${this.state.smeyes}`}>przyoczka <span className = 'smeyes1'> (oczy proste)</span></p>
                        <ActionButton className = 'beebutton b-3' action = {this.showBeeDescription} id = 'smeyes'/>
                        <p className = {`head ${this.state.head}`}>głowa</p>
                        <ActionButton className = 'beebutton b-4' action={this.showBeeDescription} id = 'head' />
                    </div>
                    <div className = 'box-4 child'></div>
                    <div className = 'box-5 child'>
                        <p className = {`wing ${this.state.wing}`}>skrzydło</p>
                        <ActionButton className = 'beebutton b-5' action={this.showBeeDescription} id = 'wing'/>
                    </div>
                    <div className = 'box-6 child'>
                        <ActionButton className = 'beebutton ' action = {this.showBeeDescription} id = 'antennae'/>
                        <p className = {`antennae ${this.state.antennae}`}>czułki - narząd węchu, smaku</p>
                    </div>
                    <div className = 'box-7 child'>
                        <p className = {`abdomen ${this.state.abdomen}`}>odwłok</p>
                        <ActionButton className = 'beebutton b-6' action = {this.showBeeDescription} id = 'abdomen'/>
                    </div>
                    <div className = 'box-8 child'>
                        <p className = {`eye ${this.state.eye}`}>oko złożone z ok. 4000 omatidiów</p><ActionButton className = 'beebutton b-7' action = {this.showBeeDescription} id = 'eye'/>
                        <p className = {`mouth ${this.state.mouth}`}>aparat gębowy ssąco-gryzący</p><ActionButton className = 'beebutton b-8' action = {this.showBeeDescription} id = 'mouth'/>
                    </div>
                    <div className = 'box-9 child'>
                        <p className = {`third-leg ${this.state.thirdLeg}`}>noga trzeciej pary</p
                        ><ActionButton className = 'beebutton b-9' action={this.showBeeDescription} id = 'thirdLeg'/>
                        <p className = {`basket ${this.state.basket}`}>koszyczek na pyłek</p>
                        <ActionButton className='beebutton b-10' action = {this.showBeeDescription} id = 'basket' />
                        
                    </div>
                    <div className = 'box-10 child'>
                        <p className = {`first-leg ${this.state.firstLeg}`}>noga przednia - w niej znajduje się narząd słuchu</p>
                        <ActionButton className = 'beebutton b-11' action = {this.showBeeDescription} id = 'firstLeg'/>
                    </div>
                    <div className = 'box-11 child'></div>
                    <div className = 'box-12 child'>
                        <p className = {`filister ${this.state.filister}`}>przylga do gładkich powierzchni</p>
                        <ActionButton className = 'beebutton b-12' action = {this.showBeeDescription} id = 'filister'/>
                    </div>
                    <div className = 'box-13 child'>
                        <p className = {`claws ${this.state.claws}`}>pazurki do chodzenia po chropowatych ściankach</p>
                        <ActionButton className = 'beebutton b-13' action = {this.showBeeDescription} id = 'claws'/>
                    </div>
                    <div className = 'box-14 child'>
                        <p className = {`second-leg ${this.state.secondLeg}`}>noga drugiej pary</p>
                        <ActionButton className = 'beebutton' action = {this.showBeeDescription} id = 'secondLeg'/>
                    </div>
                    <div className = 'beefordescribe'><img src = {beefordescribe} alt = ''/></div>
                </div>
            </div>
            )
    }
}