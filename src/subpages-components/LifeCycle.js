import React, {Component} from 'react';
import { ActionButton } from '../ActionButton';
import sunnbee1 from '../images/sunnbee1.jpg';
import beeEgg from '../images/beeegg.jpg';
import worms from '../images/worms.jpg';
import chrysalis from '../images/chrysalis.jpg';
import imago from '../images/imago.jpg';

export class LifeCycle extends Component {

    constructor(props){
        super(props);
        this.state={
            start: '',
            egg: 'hidden',
            worm: 'hidden',
            chrysalis: 'hidden',
            imago: 'hidden'
        }
    }

    setLifeCycleDescription  = (ev) => {
        Object.keys(this.state).forEach(key => this.setState({[key]: 'hidden'}));
        this.setState({[ev.target.id]: 'show-description'})
    }

    render(){
        return (
                <div>
                    <div className = 'dark-line'></div>
                    <div className = 'moving-bg bg-4'><p className = 'sentence'>PSZCZOŁY ŻYJĄ KRÓTKO ALE INTENSYWNIE...</p></div>
                    <h4 className = 'big-text'><span className = 'letter0'>C</span><span className = 'letter1'>Y</span><span className = 'letter2'>K</span><span className = 'letter3'>L</span>
                    <span className = 'letter4'>&nbsp;</span><span className = 'letter5'>Ż</span><span className = 'letter6'>Y</span><span className = 'letter7'>C</span><span className = 'letter8'>I</span>
                    <span className = 'letter9'>A</span></h4>
                    <h4 className = 'yellow'>ROZWÓJ PSZCZÓŁ</h4>
                    <div className = 'life-cycle-box'>
                        <div className = 'buttons-wrap'>
                            <div className = 'buttons-box'>
                                < ActionButton className = 'life-button button-1' action = {this.setLifeCycleDescription } id ='egg'/>
                                <div className = 'seperating-line'></div>
                                < ActionButton className = 'life-button button-2' action = {this.setLifeCycleDescription } id ='worm'/>
                                <div className = 'seperating-line'></div>
                                < ActionButton className = 'life-button button-3' action = {this.setLifeCycleDescription } id = 'chrysalis'/>
                                <div className = 'seperating-line'></div>
                                < ActionButton className='life-button button-4' action = {this.setLifeCycleDescription } id = 'imago'/>
                            </div>
                        </div>
                        <div className = {`life-stadium-text ${this.state.start}`}>
                            <div className = 'img-for-presentation'><img src = {sunnbee1} alt = ''/></div>
                            <h5>POZNAJ ŻYCIE PSZCZOŁY</h5>
                            <p>Czas trwania rozwoju pszczoły do czasu osiągnięcia dorosłej formy, długość życia, a także fakt jak to życie wygląda, zależy od tego czy mamy do czynienia z 
                                królową, robotnicą czy trutniem. Jest to dość zróżnicowane, gdyż królowa rozwija się najszybciej - 16 dni, a żyje najdłużej, nawet 5 lat (zasługa mleczka pszczelego). Robotnice, rozwijają się 21 dni, a żyją latem około 6 tygodni, zimą zaś nawet 6 miesięcy.
                                Najdłużej trwa rozwój trutni - 24 dni, a ich życie trwa około 3 miesiące. Jako, że życie robotnic wydaje się najciekawsze i najbardziej zróżnicowane, możesz poznać je bliżej <b> klikając w stadia rozwojowe na obrazkach</b>. </p>
                        </div>
                        <div className = {`life-stadium-text ${this.state.egg}`}>
                            <div className = 'img-for-presentation'><img src = {beeEgg} alt = ''/></div>
                            <h5>STADIUM JAJA (3 DNI)</h5>
                            <p>Rozwój pszczoły robotnicy zaczyna się od złożonego przez matkę na dnie komórki małego, podłużnego, białego jajeczka. Oczywiście robotnica rozwinie się tylko z jaja, które zostało zapłodnione.
                                Początkowo jajo ustawione jest pionowo, by zaraz zacząć się przechylać w stronę dna komórki. Przy temperaturze wynoszącej 35 &deg;C, po trzech dobach, z jaja wydostanie się mała 1,5 milimetrowa larwa.
                                </p>
                        </div>
                        <div className = {`life-stadium-text ${this.state.worm}`}>
                            <div className = 'img-for-presentation'><img src = {worms} alt = ''/></div>
                            <h5>STADIUM LARWY - CZERW OTWARTY (5 DNI)</h5>
                            <p>Młoda larwa, tuż po wykluciu się z jaja, natychmiast karmiona jest mleczkiem pszczelim przez pszczoły karmicielki. Mleczko pszczele stanowi jej jedyny pokarm
                                przez około 36 - 48 godzin życia. Po tym czasie larwa przestawiana jest na pokarm mieszany, przygotowywany z miodu i pyłku. Czerw bardzo szybko rośnie i po upływie 5 dni przeistacza się  w wypełniająca całą komórkę, perłowobiałą, okrągłą larwę wyprostowaną.
                                Po tym czasie waży  500 razy więcej niż na początku, co jest efektem 2 do 3 tysięcy karmień. W fazie rozwojowej czerwiu otwartego, larwa intensywnie pobiera pokarm, wydala i przygotowuje się do przepoczwarzenia.  </p>
                        </div>
                        <div className = {`life-stadium-text ${this.state.chrysalis}`}>
                            <div className = 'img-for-presentation'><img src = {chrysalis} alt = ''/></div>
                            <h5>STADIUM POCZWARKI - CZERW ZAMKNIĘTY (13 DNI) </h5>
                            <p>W dziewiątym dniu od złożenia jaja, komórka z wyrośniętą larwą zostaje zamknięta przez robotnice woskowym wieczkiem. Rozpoczyna się stadium czerwiu zamkniętego. Larwa w komórce rozciąga się i staje przedpoczwarką , a następnie poczwarką. W tym czasie nie pobiera już żadnego pokarmu.
                                W ukryciu, przez 13 dni rozwija się dojrzały, w pełni wykształcony owad. 21 dnia od złożenia jaja, pszczoła wygryza się z zamkniętej komórki i wychodzi na świat. </p>
                        </div>
                        <div className = {`life-stadium-text ${this.state.imago}`}>
                            <div className = 'img-for-presentation'><img src = {imago} alt = ''/></div>
                            <h5>IMAGO - POSTAĆ DOJRZAŁA</h5>
                            <p> Oto rozpoczyna się pracowite życie pszczoły robotnicy. Do pierwszych jej zadań po wygryzieniu i krótkim odpoczynku należy oczyszczenie własnej  i cudzych komórek. Pszczoła usuwa wtedy nieczystości i poleruje je. Zachowanie czystości w ulu jest istotne, gdyż
                                pomaga uchronić gniazdo  od chorób. W ramach porządków pszczoły wynoszą martwe osobniki, ciała obce, rozpoznają i wyrzucają chore potomstwo, czyszczą i polerują przestrzeń, w której mieszkają, a także zabezpieczają kitem to czego nie dadzą rady usunąć.</p>
                                <p> Kolejnym etapem w życiu młodych robotnic jest opieka nad czerwiem. Jeżeli młode pszczoły są dobrze odżywione, rozwijają się u nich gruczoły mleczne. Robotnice w wieku 6-12 dni karmią białym mleczkiem  młode larwy robotnic i trutni, a także królową. Królowa jest wyjątkowo przez nie pielęgnowana, czyszczona i dotykana czułkami co służy rozprzestrzenianiu jej feromonów.
                                Warto wspomnieć, że około 9 - 10 dnia życia młoda pszczoła wykonuje swój pierwszy oblot na zewnątrz ula. Robi to w celu wypróżnienia, oraz zapamiętania położenia ula w otoczeniu. Lata wtedy wokół niego zataczając kręgi.</p>
                                <p> Gdy pszczoła liczy 10 - 18 dni jej gruczoły woskowe, znajdujące się na brzusznej części odwłoka, osiągają maksimum wydajności. Robotnica pełni teraz funkcję woszczarki i buduje plastry. Wosk wydostający się z gruczołów ma postać płynną, jednak w kontakcie z powietrzem natychmiast się utwardza. </p>
                                <p> Do zadań pszczół pracujących w ulu należy także odbieranie dóbr od zbieraczek pracujących na zewnątrz. Robotnice ulowe mają wtedy za zadanie zagęścić odebrany nektar poprzez pobranie go do wola i  wyrzucanie na języczek, aby nadmiar wody odparował. W celu zagęszczenia nanoszą też kropelki młodego miodu na ścianki komórek. Dopiero, gdy miód osiągnie swoją dojrzałość i odpowiednią konsystencję,
                                    przenoszą go do docelowych komórek miodowych. Pszczoły ulowe zajmują się też świeżym pyłkiem, ubijając go w komórkach i dodając enzymy zawarte w ślinie, co powoduje utworzenie się tak zwanej pierzgi.</p>
                                <p>Pod koniec etapu życia w ulu, tj. około 18 - 21 dnia życia, pszczoły przyjmują funkcję strażniczek. W pełni rozwinięty jest wtedy gruczał jadowy i żądło. Strażniczki  stoją tuż przy wejściu do ula na tylnych odnóżach i z uniesionymi przednimi odnóżami  kontrolują nadlatujące pszczoły. Kto im się nie spodoba jest odstraszany, gryziony, kłuty, a nawet rozrywany. Do wnętrza ula wpuszczane są zaś młode robotnice, trutnie i zbieraczki z pełnym ładunkiem nektaru oraz pyłku.</p>
                                <p>Ostatni etap życia pszczół odbywa się na zewnątrz ula. Pełnią one wtedy funkcje zbieraczek. Ich zadaniem jest dostarczanie rodzinie pożywienia. Starsze pszczoły latające można poznać po mniejszej ilości włosków, które zdążyły już utracić. Pszczoły zbieraczki doskonale zapamiętują położenie poszczególnych kwitnących roślin i przekazują te informacje innym zbieraczkom. Jeśli chodzi o orientację w terenie, ważnym punktem orientacyjnym jest dla pszczół słońce. Zasięg lotów zbieraczek to teren w promieniu około 3 kilometrów, choć najbardziej opłacalne są loty w promienu 1,5 kilometra.
                                    Ostatnim zadaniem pszczół lotnych jest dostarczanie wody do ula. Spracowane robotnice sezonowe giną po około 6 tygodniach.
                                </p>
                        </div>
                        
                    </div>
                </div>
                )
            }
}