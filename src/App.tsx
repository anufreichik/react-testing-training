import React, {FC, createContext, useState} from 'react';
import './App.css';
import Input from "./components/Input";

export enum HairColor {
    Blonde = 'Blonde',
    Brown = 'Brown',
    Pink = 'Pink',
}

interface AppContextInterface {
    name: string;
    age: number;
    country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

export function replaceCamelWithSpaces(colorName:string){
    return colorName.split('')
        .map((el:string, i:number)=>el===el.toUpperCase() && i!==0?' '+ el:el).join('');
    //return colorName.replace(/\B([A-Z])\B/g, ' $1');
}
const App: FC = () => {
    const [buttonColor, setButtonColor] = useState('red');
    const [buttonText, setButtonText] = useState('Change to blue');
    const [disabled, setDisabled]=useState(false);

    const combinedColor = disabled?'gray':buttonColor;
    const contextValue: AppContextInterface = {
        name: 'Marina',
        age: 20,
        country: 'Brazil'
    }

    function handleClick(){
        if(buttonColor==='red'){
            setButtonColor('blue');
            setButtonText('Change to red');
        }


        else{
            setButtonColor('red');
            setButtonText('Change to blue');
        }

    }
    return (
        <AppContext.Provider value={contextValue}>
            <div>
                <button style={{backgroundColor: combinedColor}} onClick={handleClick} disabled={disabled}>{buttonText}</button>
                <input type="checkbox" id="enable-button-checkbox"
                       defaultChecked={disabled}
                       aria-checked={disabled}
                       onChange={(e)=>setDisabled(e.target.checked)}/>
            </div>
            <Input showDiv={true} hairColor={HairColor.Blonde}/>
            <label htmlFor="enable-button-checkbox">Disable button</label>
        </AppContext.Provider>
    );
}

export default App;
