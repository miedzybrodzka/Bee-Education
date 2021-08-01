import React, {Component} from 'react';
import melifera from '../images/melifera.jpg';
import carnica from '../images/carnica.jpg';
import caucasica from '../images/caucasica.jpg';
import ligustica from '../images/ligustica.jpg';



export class ApisMelifera extends Component {

    render(){
        return (
        <div>
            <div className = 'dark-line'></div>
            <div className = 'moving-bg bg-1'><p className = 'sentence'>ISTNIENIE PSZCZCZÓŁ NA ZIEMI SIĘGA MILIONÓW LAT...</p></div>
                <h4 className = 'big-text'><span className = 'letter0'>P</span><span className = 'letter1'>S</span><span className = 'letter2'>Z</span><span className = 'letter3'>C</span>
                <span className = 'letter4'>Z</span><span className = 'letter5'>O</span><span className = 'letter6'>Ł</span><span className = 'letter7'>A</span><span className = 'letter8'>&nbsp;</span>
                <span className = 'letter9'>M</span><span className = 'letter10'>I</span><span className = 'letter11'>O</span><span className = 'letter12'>D</span><span className = 'letter13'>N</span>
                <span className = 'letter14'>A</span></h4>
            <div className = 'main-text'>
                <h5 className = 'first-h'>KIEDY POJAWIŁY SIĘ PSZCZOŁY?</h5>
                <p> Według badań paleontologów pszczoły pojawiły się na Ziemi wraz z kwitnącymi kwiatami około 146-147 milionów lat temu w okresie kredy. Była to ostatnia era, w której
                    żyły dinozaury. Ciekawostką jest to, że od tamtego czasu prawie nie zmieniły swojego wyglądu. Naukowcy twierdzą, że pszczoły pochodzą od owadożernych os, które zmieniły dietę i zaczęły się żywić nektarem. Najstarsze skamieliny pszczół udało się
                    odnaleźć w Stanach Zjednoczonych i należą do gatunku pszczół bezżądłych <i>Trigona prisca</i>, który żył ponad 60 milionów lat temu. Ten gatunek zresztą żyje do dziś 
                    i zamieszkuje obszary subtropikalne i tropikalne naszej planety. Pszczoła miodna <i>(Apis mellifera)</i> pojawiła się dość niedawno, około 2 miliony lat temu
                    pod koniec trzeciorzędu. Dziś jest najpopularniejszym gatunkiem na świecie spośród udomowionych pszczół. Od czasów starożytnych z Europy, Azji, Afryki stopniowo
                    trafiała na pozostałe kontynenty oprócz Antarktydy, gdzie jest dla niej za zimno.
                </p>
                <h5>PSZCZOŁA MIODNA</h5>
                <p> W Polsce żyje ok. 470 gatunków pszczół, a pszczoła miodna jest tylko jednym z nich. W wiekszości są to dzicy zapylacze nie tworzący w zorganizowanych społeczności. Podobnie jak pszczoła miodna przyczyniają się
                    się do zwiększenia plonów z roślin wykorzystywanych gospodarczo przez człowieka jednak ich wydajność jest mniejsza, a pozyskiwanie od nich miodu i innych pszczelich produktów jest niemożliwe. Pszczoła miodna <i>(Apis mellifera)</i> daje gospodarce człowieka znacznie większe dochody, gdyż 
                    wykonuje ponad 80% pracy zapylaczy roślin uprawnych. Spowodowane jest to tym, że żyjąc w zorganizowanych społecznościach może dysponować bardzo licznymi zastępami pszczół robotnic - średnio 50-60 tysięcy a nawet więcej, w szczycie sezonu. Zimuje gromadnie, 
                    co powoduje, że już od bardzo wczesnej wiosny, z każdej rodziny, do pracy w polu wylatuje od kilku do kilkunastu tysięcy pszczół. Z kolei w przypadku dzikich zapylaczy, na roślinach kwitnących pracują pojedyncze osobniki, stąd ich mniejszy udział w zapylaniu roślin.
                     Pszczoła miodna jest wysoce ceniona ze względu na to, że produkuje miód, wosk, propolis, pyłek ,a także mleczko pszczele będące dla człowieka produktami o właściwościach zdrowotnych. Pszczoła miodna wykazuje duże zróżnicowanie, można wyodrębnić
                    różne podgatunki, odmiany, rasy. </p>
                <p><b>W Polsce oficjalnie dopuszczone do hodowli są cztery rasy pszczół <i>Apis mellifera</i> :</b></p>
                <ul>
                    <li><i>Apis mellifera mellifera (M)</i> - rasa środkowoeuropejska</li>
                    <li><i>Apis mellifera carnica (car)</i> - rasa kraińska</li>
                    <li><i>Apis mellifera caucasica (cau)</i> - rasa kaukaska</li>
                    <li><i>Apis mellifera ligustica (lig)</i> - rasa włoska </li>
                </ul>

            </div>
            <h4 className = 'yellow-title'>RASY PSZCZÓŁ</h4>
            <div className = 'bees-types-box'>
                <div className = 'picture-box'>
                    <div className = 'first-child'>
                        <div className = 'img-box'><img src={melifera}alt=''/></div>
                    </div>
                    <div className = 'second-child'>
                        <h5>RASA ŚRODKOWOEUROPEJSKA</h5>
                        <p>Rodzima pszczoła, która pierwotnie zasiedlała teren Polski. Różni się od pszczół południowych stosunkowo większym tułowiem i odwłokiem.
                            Odnóża, skrzydła i języczek są stosunkowo krótkie. Pszczoła ta jest ciemno ubarwiona, a owłosienie grzbietowych płytek pierścieni odwłoka ma
                            krótsze, rzadsze i ciemniejsze niż krainka. Podgatunek odznacza się cennymi zaletami - łatwo się mnoży i rozrasta, jest przystosowany 
                            do długiego zimowania, wykazuje odporność na choroby, intensywnie zbiera pyłek oraz zużywa mało pokarmu. Jego wadą jest dość duża żądliwość, rojliwość oraz niska miodność.
                        </p>
                    </div>
                </div>
                <div className = 'decorative-line'></div>
                <div className = 'picture-box'>
                    <div className = 'first-child'>
                        <div className = 'img-box'><img src={carnica} alt = ''/></div>
                    </div>
                    <div className = 'second-child'>
                        <h5>RASA KRAIŃSKA</h5>
                        <p>Pierwotny obszar zamieszkiwania obejmował Półwysep Bałkański, południowo-wschodnie Alpy, teren Czech i Słowacji oraz pas pogórza
                            na terenie Polski. Pszczoły kraińskie cechuje ciemne ubarwienie, ale ze względu na owłosienie grzbietowych płytek pierścieni odwłoka, które jest gęste
                            i jasnoszare, pszczoły wydają się jaśniejsze niż północne. Pszczoła kraińska podobnie jak włoska i kaukazka odznacza się małą żądliwością oraz ma wiele innych cech cennych gospodarczo.
                            Znosi długie zimy lepiej niż pszczoła włoszka, jest odporna na choroby czerwiu, nadaje się na tereny z wczesnymi pożytkami, szybko adaptuje się do środowiska. Jej nadmierną rojliwość udało się nieco załagodzić dzięki selekcji. Pszczoła kraińska jest w zasadzie pszczołą górską.
                        </p>
                    </div>
                </div>
                <div className = 'decorative-line'></div>
                <div className = 'picture-box'>
                    <div className = 'first-child'>
                        <div className = 'img-box'><img src={caucasica}alt = ''/></div>
                    </div>
                    <div className = 'second-child'>
                        <h5>RASA KAUKASKA</h5>
                        <p>Pszczoły kaukaskie są ciemne i  wyróżniają się spośród wszystkih podgatunków <i>Apis mellifera</i> największą długością trąbki. Między innymi
                        ze względu na tą właściwość były importowane z Rosji i Gruzji do różnych krajów jako dobre zapylaczki koniczyny czerwonej, do której inne pszczoły nie mają dostępu. Pszczoła kaukaska jest łagodna i produkuje duże ilości kitu.
                         Choć jest odporna na niskie temperatury, długie zimy niekorzystnie wpływają na przebieg jej zimowli. W naszym
                         klimacie łatwo zapada na chorobę <i>Nosema apis</i>.  Tworzy małe rodziny i wolno się rozwija.
                        Nie jest polecana na tereny spadziowe, natomiast dobrze pracuje na pożytkach kwiatowych.</p>
                    </div>
                </div>
                <div className = 'decorative-line'></div>
                <div className = 'picture-box'>
                    <div className = 'first-child'>
                        <div className = 'img-box'><img src={ligustica}alt = ''/></div>
                    </div>
                    <div className = 'second-child'>
                        <h5>RASA WŁOSKA</h5>
                        <p>Jest to pszczoła nizinna, dlatego jej naturalny zasięg wystepowania ograniczony był od północy Alpami. Jej charakterystyczą cechą jest jasnożółta częśc odwłoka. Pszczoła włoska posiada szereg zalet. Między innymi
                            jest łagodna, wykazuje  niższą skłonność do rójki niż inne rasy, wychowuje dużą ilość czerwiu i dba o czystość. Jest znakomita do pasiek towarowych i wędrownych. Wady to natomiast brak witalności, skłonność do nadmiernego
                            wychowu czerwiu, podatność na choroby i duże zużycie zapasów. Pracuje na krótszych dystansach niż pszczoła kraińska i środkowoeuropejska, toteż może gorzej radzić sobie przy słabych pożytkach. Nie nadaje się do hodowli w chłodnych regionach nadmorskich.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}