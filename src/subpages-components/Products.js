import React, {Component} from 'react';
import honey2 from '../images/honey2.jpg';
import propolis from '../images/propolis.jpg';
import pollen from '../images/pollen.jpg';
import wax from '../images/wax.jpg';


export class Products extends Component {

    render(){
        return (
            <div>
                <div className = 'dark-line'></div>
                <div className = 'moving-bg bg-6'><p className ='sentence'>BOGACTWO DLA ZDROWIA...</p></div>
                <h4 className = 'big-text'><span className = 'letter0'>P</span><span className = 'letter1'>R</span><span className = 'letter2'>O</span><span className = 'letter3'>D</span>
                <span className = 'letter4'>U</span><span className = 'letter5'>K</span><span className = 'letter6'>T</span><span className = 'letter7'>Y</span><span className = 'letter8'>&nbsp;</span>
                <span className = 'letter9'>P</span><span className = 'letter10'>S</span><span className = 'letter11'>Z</span><span className ='letter12'>C</span><span className = 'letter13'>Z</span>
                <span className = 'letter14'>E</span><span className = 'letter15'>L</span><span className = 'letter16'>E</span></h4>
                <div className = 'main-text additional-space'>
                    <h5 className ='first-h' ref = {this.springRef}>MIÓD</h5>
                    <div className = 'product'><img src = {honey2}  alt = ''/></div>
                        <p> Każdy chyba słyszał o dobroczynnych właściwościach miodu. Oprócz tego, że jest smaczny i doskonale nadaje się do słodzenia napojów, ciast, deserów, czy warzenia alkoholi jest też bardzo zdrowy. Wyróżniamy miody nektarowe, spadziowe oraz netarowo - spadziowe. Nektar zbierany jest z kwiatów, natomiast spadź (liściasta lub iglasta) to słodka, lepka ciecz pojawiająca się w postaci kropel, tzw. rosy miodowej, na liściach i gałązkach niektórych gatunków drzew oraz krzewów. Producentem spadzi są niewielkie owady,
                            głównie mszyce i czerwce. Pasożytują one na roślinach, wysysając z ich liści i młodych pędów pożywny sok. Bogata w cukry ciecz, którą wydalają to właśnie spadź. Miód składa się głównie z wody (poniżej 20%) oraz cukrów prostych - fruktozy i glukozy. Wzbogacony jest o enzymy zawarte w ślinie owadów.
                            Ma działanie bakteriobójcze, antybiotyczne oraz hamujące rozwój  drożdży i pleśni. To dlatego miód jest wspaniałym lekiem w przeziębieniach i infekcjach górnych dróg oddechowych. Pozytywne działanie miodu na tym jednak się nie kończy. Różne gatunki miodu są polecane na różne schorzenia. Na przykład miód mniszkowy szczególnie dobrze oddziaływuje na układ pokarmowy, polecany jest w reumatyzmie i niedokrwistości. Miód rzepakowy z kolei stosowany jest na choroby sercowe, a miód malinowy i gryczany działa przeciwmiażdżycowo.
                            Wszystkie rodzaje miodu pozytywnie wpływają na samopoczucie człowieka i uspokajają. Do naturalnych procesów należy krystlizacja miodu. Nie zmienia ona właściwości odżywczo - leczniczych, a jedynie konsystencję.
                        </p>
                        <h5 ref = {this.summerRef}>PROPOLIS - KIT PSZCZELI</h5>
                        <div className = 'product'><img src = {propolis} alt = ''/></div>
                        <p> Kit pszczeli jest również znany jako propolis. Propolis to substancja stała,
                            o intensywnym żywiczno-balsamicznym zapachu i brunatnej barwie. Pszczoły wytwarzają go pobierając różnego rodzaju żywice oraz materiał z pąków roślin, a następnie przerabiają w żuwaczkach. Wykorzystują go do  uszczelniania gniazd na zimę, a także balsamowania ciał intruzów, których nie potrafią wynieś z ula. Kitem pszczelim powlekają też wnętrze ula, chroniąc rodzinę przed chorobami. Popolis jest produktem silnie bakteriobójczym, z tego powodu wykorzystuje się go 
                            do produkcji leków. Z powodzeniem konkuruje nawet z antybiotykami. Wytwarza się z niego między innymi nalewki na bazie spirytusu oraz maście. Pszczelarze pozyskują propolis zeskrobując go ze ścianek ula i ramek, a także specjalnych kitołapek - siateczek, które pszczoły zaklejają propolisem. Tak zaklejone siateczki schładza się w lodówce, a następnie wykrusza zawartość. W ten sposób otrzymuje się czysty produkt. Nie można jednak przesadzać z odbieraniem pszczołom propolisu,
                            gdyż owady niepotrafiące nadążyć z produkcją, mogą zacząć zbierać różne kleiste substancje takie jak lepik czy asfalt co definitywnie dyskwalifikuje produkt. 
                        </p>
                        <h5 ref = {this.autumnRef}>PYŁEK I PIERZGA</h5>
                        <div className = 'product'><img src = {pollen} alt = ''/></div>
                        <p> Pyłek kwiatowy stanowi lekkostrawne białko roślinne, bogate źródło aminokwasów, witamin oraz mikroelementów. W skład pyłku wchodzą: globuliny, peptony, aminokwasy: histydyna, lizyna, walina, fenyloalanina, izoleucyna, seryna,teroniny, kwas asparaginowy i inne. Zawiera też dużą ilość witaminy B<sub>1</sub>, B<sub>2</sub>, B<sub>3</sub>, B<sub>6</sub>, B<sub>12</sub>, PP, P, C, D, K i inne. Pyłek zawiera również węglowodany (głównie glukozę i fruktozę) oraz substancje wzrostowe (hormony), a także eznzymy.
                            Jak widać jego skład jest bardzo bogaty w różnorodne składniki. Pyłek jest produkowany przez rośliny jako komórki męskie niezbędne do
                            zapylenia, w wyniku czego powstaje owoc. Każdy gatunek rośliny posiada pyłek charakterystyczny jeśli chodzi o kształt i kolor. Pszczoły zbierają go umieszczając w koszyczkach pyłkowych na tylnej parze odnóży i przenoszą do ula, aby został ubity w komórkach i zalany miodem.
                            Dochodzi wówczas do fermentacji mlekowej, dzieki czemu powstaje pierzga nazywana pszczelim chlebem. Jest ona potrzebna pszczołom, aby mogły wychowywać larwy, wytwarzać mleczko pszczele oraz wosk, a także zbudować tkankę tłuszczową na zimę. Pszczelarz, bez szkody dla rodziny pszczelej może
                            pozyskać ok. 10% pyłku za pomocą specjalnego poławiacza. Pobrany pyłek należy wysuszyć w ciemnym pomieszczeniu, w niezbyt wysokiej temperaturze i przechowywać w szczelnym naczyniu. Pyłek spozywany przez człowieka wpływa pozytywnie na skład krwi,
                            usprawnia czynności jelit, obniża ciśnienie i działa leczniczo na układ nerwowy, a także reguluje przemianę materii. </p>
                        <h5 ref = {this.winterRef}>WOSK</h5>
                        <div className = 'product'><img src = {wax} alt = ''/></div>
                        <p> Wosk pszczeli to produkt, który pszczoły wytwarzają w 4 parach gruczołów woskowych, umieszczonych na brzusznej stronie odwłoka. Wosk wypływa z nich przez kanaliki w postaci płynnej, po czym w kontakcie z powietrzem szybko zastyga. Tworzy się wtedy cienka płytka zwana lusterkiem woskowym. Pszczoły - robotnice są w stanie produkować wosk między 12, a 18 dniem
                            życia. Ciekawostką jest fakt, że w ciągu roku rodzina pszczela może wyprodukować około 2-3 kg wosku, jednak odbywa się to kosztem produkcji miodu. Wosk pszczeli w temperaturze pokojowej wystepuje w postaci stałej i ma barwę od jasnożółtej, poprzez zielonkawą, pomarańczową nawet do ciemobrązowej. Kolor zależy głównie od wieku plastra i faktu ile pokoleń pszczół się w nim wychowało. Wosk pszczeli jest bardzo aromatyczny i przyjemnie pachnie. 
                            Pszczelarze wytapiają wosk z ramek w wytapiarkach słonecznych lub kociołkach, gdzie pod wpływem temperatury uzyskuje się czysty produkt. Najlepszy jakościowo wosk uzyskuje się z dziewiczych plastrów, czyli takich, w których matka jeszcze nie czerwiła. Jest on wtedy jasnożółty, prawie biały. Wosk może być wykorzystywany przez człowieka w kosmetyce do wyrobu kremów i maści, a także do wytwarzania aromatycznych świec. Wosk pszczeli w postaci plastra z zawartym w nim miodem 
                            można żuć, co powoduje ulgę w katarze siennym, czyści zęby i wzmacnia dziąsła. Plastry takie są sprzedawane pod nazwą miód sekcyjny.
                            </p>
                            <h5 ref = {this.winterRef}>MLECZKO PSZCZELE</h5>
                        <p> Mleczko pszczele to wydzielina z gruczołów gardzielowych pszczół. Produkują go pszczoły karmicielki w 7 - 14 dniu życia. Karmią nim młode larwy trutni i robotnic, a królową karmią nim cały czas - niezależnie od stadium jej rozwoju. To dzięki tej odżywczej substancji z jaja wyrasta w pełni rozwinięta, zdolna do składania jaj samica - matka, która żyje o wiele dłużej niż inne pszczoły (nawet kilka lat). Mleczko pszczele ma jasnokremową barwę i konsystencję półpłynnej śmietany. Smak ma
                            lekko gorzki, cierpki i kwaśnawy. Skład mleczka pszczelego różni się  w zależności od tego, czy jest przeznaczony dla larw robotnic, trutni, czy królowej. Jego skład jest także różny, w zależności od pyłku jakim odżywiają się karmicielki. Mleczko pszczele składa się głównie  z wody, białka, tłuszczów, cukrów, związków mineralnych, aminokwasów, składników homrmonopodobnych, enzymów i witamin. Spożywanie mleczka pszczelego przez człowieka usuwa zmęczenie, poprawia wzrok, samopoczucie i koncentrację. Należy go stosować przy bezsenności, nerwicy, depresji, a także w okresie rekonwalescencji po chorobach i zabiegach.
                            Stosuje się go przy nadciśnieniu i arytmii serca. Mleczko pszczele jest dobre także przy anemii, chorobie wieńcowej, zapaleniu żył, zapaleniu trzustki, dróg żółciowych i niepłodności.
                        </p>
                </div>
            </div>

            )
    }
}