import React, {Component} from 'react';
import {ActionButton} from '../ActionButton';
import {connect} from 'react-redux';
import { checkWrongAnswer, cleanRed, clearAnswers, saveAnswer } from '../store';
import hive from '../images/hive.jpg';

const mapStateToProps = (storeData) => ({
    answers: storeData.answers,
    correctAnswers: storeData.correct,
    wrongAnswers: storeData.red
})

const mapDispatchToProps = {
    saveYourAnswer: saveAnswer,
    checkWrongAnswer: checkWrongAnswer,
    clearAnswers: clearAnswers,
    cleanRed: cleanRed
}

const connectfunction = connect(mapStateToProps, mapDispatchToProps);


export const Quiz  = connectfunction (
    class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                counter: 0,
                disabled: false,
                buttonInvisible: '',
                showResult: 'hide-result',
                correctGreenAnswer: ''
            }
            this.resultRef = React.createRef();
        }


        componentWillUnmount() {
    
            this.props.answers.forEach(answer => this.props.clearAnswers(answer.name));
            this.props.wrongAnswers.forEach(red => this.props.cleanRed(red.answer));
            
         }

        checkAnswers = () => {
            console.log('hej');
            this.setState({disabled: true, buttonInvisible: 'invisible-button', showResult: 'result', correctGreenAnswer: 'green'});
            this.props.answers.forEach((elem, indx) => {
                
                if(elem.answer === this.props.correctAnswers[indx].answer){
                    this.setState((state) => {return {counter: state.counter + 1}})
                }else {
                    this.props.checkWrongAnswer(elem.answer);
                }
            });
            this.resultRef.current.scrollIntoView({behavior: 'smooth'});
        }
        

        render(){
            return (
                <div>
                    <div className = 'dark-line'></div>
                    <div className = 'moving-bg bg-7'><p className = 'sentence'>SPRAWD?? SWOJ?? WIEDZ?? O PSZCZO??ACH...</p></div>
                    <h4 className = 'big-text'><span className = 'letter0'>Q</span><span className = 'letter1'>U</span><span className = 'letter2'>I</span><span className = 'letter3'>Z</span></h4>
                    <h4 className = 'yellow-quiz' >ODPOWIEDZ NA PYTANIA</h4>
                    <div className = 'quiz-box'>
                    <div className = 'quiz-image' ><img src = {hive} alt = ''/></div>
                    <div className='quiz' ref = {this.resultRef}>
                        <div className = {this.state.showResult} ><p>{`Odpowiedzia??e?? dobrze na: ${this.state.counter} z 20 pyta??`}</p></div>
                        <p><b>1. Co wyr????nia pszczo??y miodne na tle innych gatunk??w pszcz?????</b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'distinction' type = 'radio' value = 'social-life' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>spo??eczne ??ycie</label>
                        <label className = {this.props.wrongAnswers[0].color} ><input name = 'distinction' type = 'radio' value = 'lonely-life' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>samotne ??ycie</label>
                        <label className = {this.props.wrongAnswers[1].color}><input name = 'distinction' type = 'radio' value = 'pollination' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>zapylanie ro??lin</label>
                        <div className='decorative-line2'></div>
                        <p><b>2. Za co pszczo??a miodna jest szczeg??lnie ceniona przez cz??owieka?</b></p>
                        <label className = {this.props.wrongAnswers[2].color}><input name = 'appreciation' type = 'radio' value = 'battle-with-pests'onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>za zwalczanie szkodnik??w</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'appreciation' type = 'radio' value = 'pollination-and-honey'onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>za zapylanie ro??lin i mi??d</label>
                        <label className = {this.props.wrongAnswers[3].color}><input name = 'appreciation' type = 'radio' value = 'reduction-wild-pollinators' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>za redukcj?? dzikich zapylaczy</label>
                        <div className='decorative-line2'></div>
                        <p><b>3. Co stanowi najwi??ksze zagro??enie dla pszcz???? miodnych?</b></p>
                        <label className = {this.props.wrongAnswers[4].color}><input name = 'danger' type = 'radio' value = 'wild-pollinators'onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>konkurencja dzikich zapylaczy ro??lin</label>
                        <label className = {this.props.wrongAnswers[5].color}><input name = 'danger' type = 'radio' value = 'poisonous-plants'onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>sadzenie truj??cych ro??lin</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'danger' type = 'radio' value = 'pesticides' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>niew??a??ciwe stosowanie pestycyd??w</label>
                        <div className='decorative-line2'></div>
                        <p><b>4. Ile par odn????y posiada pszczo??a?</b></p>
                        <label className = {this.props.wrongAnswers[6].color}><input name = 'legs' type = 'radio' value = 'two' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>dwie pary</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'legs' type = 'radio' value = 'three' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>trzy pary</label>
                        <label className = {this.props.wrongAnswers[7].color}><input name = 'legs' type = 'radio' value = 'four' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>cztery pary</label>
                        <div className='decorative-line2'></div>
                        <p><b>5. Gdzie znajduje si?? narz??d s??uchu pszcz?????</b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'hearing' type = 'radio' value = 'in-first-leg' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>na pierwszej parze odn????y</label>
                        <label className = {this.props.wrongAnswers[8].color}><input name = 'hearing' type = 'radio' value = 'in-head' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>w g??owie</label>
                        <label className = {this.props.wrongAnswers[9].color}><input name = 'hearing' type = 'radio' value = 'in-abdomen' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>w odw??oku</label>
                        <div className='decorative-line2'></div>
                        <p><b>6. Co to s?? omatidia?</b></p>
                        <label className = {this.props.wrongAnswers[10].color}><input name = 'eye' type = 'radio' value = 'sensili' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>inaczej w??oski czuciowe</label>
                        <label className = {this.props.wrongAnswers[11].color}><input name = 'eye' type = 'radio' value = 'antennae' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>inna nazwa czu??k??w</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'eye' type = 'radio' value = 'eye' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>element oka pszcz????</label>
                        <div className='decorative-line2'></div>
                        <p><b>7. Kt??re zdanie jest fa??szywe?</b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'false' type = 'radio' value = 'color-red' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>pszczo??y widz?? czerwony kolor</label>
                        <label className = {this.props.wrongAnswers[12].color}><input name = 'false' type = 'radio' value = 'ultraviolet' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>pszczo??y widz?? ultrafiolet</label>
                        <label className = {this.props.wrongAnswers[13].color}><input name = 'false' type = 'radio' value = 'small-parts' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>pszczo??y widz?? obraz podzielony na wiele punkt??w</label>
                        <div className='decorative-line2'></div>
                        <p><b>8. Jaki kszta??t ma kom??rka pszczela?</b></p>
                        <label className = {this.props.wrongAnswers[14].color}><input name = 'cells' type = 'radio' value = 'pentagon' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>pi??ciok??tny</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'cells' type = 'radio' value = 'hexagon' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>sze??ciok??tny</label>
                        <label className = {this.props.wrongAnswers[15].color}><input name = 'cells' type = 'radio' value = 'octagon'onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>o??miok??tny</label>
                        <div className='decorative-line2'></div>
                        <p><b>9. Jakie zadanie ma kr??lowa pszcz?????</b></p>
                        <label className = {this.props.wrongAnswers[16].color}><input name = 'queen' type = 'radio' value = 'defense'onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>obrona ula</label>
                        <label className = {this.props.wrongAnswers[17].color}><input name = 'queen' type = 'radio' value = 'food-dispensation' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>rozdzielanie pokarmu</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'queen' type = 'radio' value = 'laying-eggs' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>sk??adanie jaj</label>
                        <div className='decorative-line2'></div>
                        <p><b>10. Jakie prace w ulu wykonuj?? trutnie?</b></p>
                        <label className = {this.props.wrongAnswers[18].color}><input name = 'drones' type = 'radio' value = 'getting-food' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>odbieranie pokarmu od zbieraczek</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'drones' type = 'radio' value = 'nothing' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>trutnie nie maj?? zada?? w ulu</label>
                        <label className = {this.props.wrongAnswers[19].color}><input name = 'drones' type = 'radio' value = 'defense2' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>obrona ula</label>
                        <div className='decorative-line2'></div>
                        <p><b>11. Kt??re zdanie jest prawdziwe?</b></p>
                        <label className = {this.props.wrongAnswers[20].color}><input name = 'true' type = 'radio' value = '10-km' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>zasi??g lot??w pszcz???? zbieraczek wynosi 10 km</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'true' type = 'radio' value = 'guardians' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>pszczo??y stra??niczki kontroluj?? ka??d?? istot?? wchodz??c?? przez wylotek</label>
                        <label className = {this.props.wrongAnswers[21].color}><input name = 'true' type = 'radio' value = 'new-born' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>pszczo??a, kt??ra wygryz??a si?? z kom??rki od razu leci zbiera?? nektar</label>
                        <div className='decorative-line2'></div>
                        <p><b>12. Jak d??ugo ??yje pszczo??a robotnica?</b></p>
                        <label className = {this.props.wrongAnswers[22].color}><input name = 'life' type = 'radio' value = 'one-year'onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>rok</label>
                        <label className = {this.props.wrongAnswers[23].color}><input name = 'life' type = 'radio' value = 'five-years' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>nawet pi???? lat</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'life' type = 'radio' value = 'six-weeks' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>w sezonie letnim ok. 6 tygodni, w zimowym ok. 6 miesi??cy</label>
                        <div className='decorative-line2'></div>
                        <p><b>13. Kt??re z pszcz???? opiekuj?? si?? czerwiem (larwami)? </b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'larvas' type = 'radio' value = 'feeder-bees' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>pszczo??y karmicielki</label>
                        <label className = {this.props.wrongAnswers[24].color}><input name = 'larvas' type = 'radio' value = 'queen' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>matka pszczela</label>
                        <label className = {this.props.wrongAnswers[25].color}><input name = 'larvas' type = 'radio' value = 'flying-bees' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>pszczo??y lotne</label>
                        <div className='decorative-line2'></div>
                        <p><b>14. Jaka jest dieta kr??lowej pszcz????? </b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'queenFood' type = 'radio' value = 'milk' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>tylko mleczko pszczele</label>
                        <label className = {this.props.wrongAnswers[26].color}><input name = 'queenFood' type = 'radio' value = 'honey' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>mi??d</label>
                        <label className = {this.props.wrongAnswers[27].color}><input name = 'queenFood' type = 'radio' value = 'pollen-and-milk' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>py??ek i mleczko pszczele</label>
                        <div className='decorative-line2'></div>
                        <p><b>15. Co to jest warroza? </b></p>
                        <label className = {this.props.wrongAnswers[28].color}><input name = 'varroa' type = 'radio' value = 'larva' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>inaczej czerw otwarty</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'varroa' type = 'radio' value = 'pest' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>roztocz ??eruj??cy na hemolimfie pszcz????</label>
                        <label className = {this.props.wrongAnswers[29].color}><input name = 'varroa' type = 'radio' value = 'locator' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>niegro??ny lokator ula</label>
                        <div className='decorative-line2'></div>
                        <p><b>16. Kiedy rozw??j pszcz???? jest najintensywniejszy?</b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'development' type = 'radio' value = 'spring' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>wiosn??</label>
                        <label className = {this.props.wrongAnswers[30].color}><input name = 'development' type = 'radio' value = 'summer' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>latem</label>
                        <label className = {this.props.wrongAnswers[31].color}><input name = 'development' type = 'radio' value = 'autumn' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>jesieni??</label>
                        <div className='decorative-line2'></div>
                        <p><b>17. Co to jest rojenie si?? pszcz?????</b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'newFamily' type = 'radio' value = 'division' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>podzia?? pszcz???? w celu za??o??enia nowej kolonii</label>
                        <label className = {this.props.wrongAnswers[32].color}><input name = 'newFamily' type = 'radio' value = 'mating' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>lot godowy matki pszczelej</label>
                        <label className = {this.props.wrongAnswers[33].color}><input name = 'newFamily' type = 'radio' value = 'moving' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>szybkie przemieszczanie si?? pszcz???? po plastrach</label>
                        <div className='decorative-line2'></div>
                        <p><b>18. Kt??re zdanie jest fa??szywe?</b></p>
                        <label className = {this.props.wrongAnswers[34].color}><input name = 'false2' type = 'radio' value = 'antibacterial-honey' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>mi??d ma w??a??ciwo??ci antybakteryjne</label>
                        <label className = {this.state.correctGreenAnswer}><input name = 'false2' type = 'radio' value = 'crystal' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>krystalizacja ma negatywny wp??yw na w??a??ciwo??ci miodu</label>
                        <label className = {this.props.wrongAnswers[35].color}><input name = 'false2' type = 'radio' value = 'bee-milk' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>mleczko pszczele to substancja wytwarzana przez robotnice</label>
                        <div className='decorative-line2'></div>
                        <p><b>19. Co to jest propolis?</b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'propolis' type = 'radio' value = 'resin' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>substancja wytwarzana przez pszczo??y z ??ywic</label>
                        <label className = {this.props.wrongAnswers[36].color}><input name = 'propolis' type = 'radio' value = 'fluid-from-leaves' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>lepka, s??odka ciecz zbierana z drzew li??ciastych lub iglastych</label>
                        <label className = {this.props.wrongAnswers[37].color}><input name = 'propolis' type = 'radio' value = 'wax' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>inaczej wosk pszczeli</label>
                        <div className='decorative-line2'></div>
                        <p><b>20. Jak wykorzystuje si?? wosk pszczeli?</b></p>
                        <label className = {this.state.correctGreenAnswer}><input name = 'wax' type = 'radio' value = 'cosmetics-and-candles' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>w kosmetyce oraz do wyrobu ??wiec</label>
                        <label className = {this.props.wrongAnswers[38].color}><input name = 'wax' type = 'radio' value = 'kitchen' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>w kuchni jako przyprawa</label>
                        <label className = {this.props.wrongAnswers[39].color}><input name = 'wax' type = 'radio' value = 'cleaning' onChange = {this.props.saveYourAnswer} disabled = {this.state.disabled}/>jako substancj?? czyszcz??c?? zabrudzenia</label>
                        <ActionButton content = 'SPRAWD?? WYNIKI' className = {`check-button ${this.state.buttonInvisible}`} action = {this.checkAnswers} disabled = {this.state.buttonDisabled}/>
                    </div>
                    </div>
                </div>
                )
    }
}
)