import React from 'react';

//componentes tontos (Constante)  se usa solo para mandar props y solo existen unicamente para recivir props
const InputPro = ({icon='user', handleChange=()=>{} ,name='default',placeholder='placeholder',isPassword }) => {
  
    return (
        <div className="uk-margin">
            <div className="uk-inline">
                <span className="uk-form-icon uk-form-icon-flip" uk-icon={`icon: ${icon}`}></span>
                <input 
                    placeholder={placeholder} 
                    className="uk-input" 
                    type={isPassword ? "password" : "text" } 
                    name={name} 
                    onChange={handleChange} 
                />
            </div>
        </div>
    )
}
//esta cosa siempre trae un return implicito  => ()  

//if ternario estructura => evaludaor ? accion verdader : accion falsa


export default InputPro;
// si tienen algun otro funcionamiento interno donde sea necesario ejercitar ciclos de vida, funciones etc...

// class InputPro extends React.Component{
//     perro = ()=>{
//         console.log('Bonnie ')
//     }
//     render(props){
//         return ()
//     }
// }

// function InputPro (props){
//     const  perro = ()=>{
//         console.log('Bonnie ')
//     }
//     return()
// }