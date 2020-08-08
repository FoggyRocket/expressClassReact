import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputPro from './app/components/InputPro';
import AcordionContainer from './app/components/AcordionContainer';
import AcordionElement from './app/components/AcodionElement';
import MiniCard from './app/components/MiniCard';
import cards from './app/json/cards.json'
// function App() {
//   return (
//     <div className="App">
// {/* (      <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>) */}

//       <section>
//         <form>

//           <div className="uk-margin">
//               <div className="uk-inline">
//                   <span className="uk-form-icon" uk-icon="icon: user"></span>
//                   <input className="uk-input" type="text" />
//               </div>
//           </div>

//         <InputPro user={true} />
//         <InputPro pass={true} />
//         <InputPro />

//         </form>

//       </section>
//     </div>
//   );
// }

class App extends Component{
  state={
    user:{},
    register:{},
    perro:"bonnie",
    numero:123123123123,
    isLogged:false,
    element1:[
      {
        img:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1592500145/Screen_Shot_2020-06-18_at_12.08.48_zxgfr8.png",
        text:"Llena el formulario que se encuentra en la información del perrito que deseas apadrinar."
      },
      {
        img:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1592500145/Screen_Shot_2020-06-18_at_12.08.48_zxgfr8.png",
      },
      {
        img:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1592500145/Screen_Shot_2020-06-18_at_12.08.48_zxgfr8.png",
        text:"Llena el formulario que se encuentra en la información del perrito que deseas apadrinar."
      },
    ]
  }

  handleChange=(event,nameForm)=>{
    //esta linea sirve para asignar varirables directamente de los items del state
    // conservando su valor 
    const {user,register} = this.state

    //destructuracion event.target 
    const {name,value} = event.target;
   
    if(nameForm === "login"){
      //esto es para asignar o agregar si no existe en el objeto
      // se modifica si ya existe en el objeto
      // objeto[llave] = valor
      // de esta manera se va llenando de datos un objeto vacio o modificando un objeto
      // en simples palabras de esta manera vas agregando propiedades a un objeto dinamicamente
      user[name]= value

    }else{
      register[name]= value
    }
    //es para modificar el state osea que se agreguen los nuevos valores 
    this.setState({user,register})
  }

  sendData=(event)=>{
    event.preventDefault()
    const {name} = event.target
    if(name === "Login"){
      console.log("este es el state", this.state.user)
      this.setState({user:{}})
    }else{
      console.log("este es el register", this.state.register)
    }
    
  }
 
  render(){
    return(
    <div className="App">
   
        <section>
          <form name='Login' onSubmit={this.sendData}>

            <InputPro icon="user" name="username"  handleChange={(e)=>this.handleChange(e,"login")}/>
            <InputPro icon="lock" name="password"  handleChange={(e)=>this.handleChange(e,"login")} isPassword/>
            
            <button type="submit">
              Puchame
            </button>
          </form>

          <form name="register" onSubmit={this.sendData}>

            <InputPro 
              icon="user" 
              name="username" 
              handleChange={(e)=>this.handleChange(e,"register")} 
              placeholder="Nombre de usuario" 
              />
            <InputPro icon="user" name="name"  handleChange={(e)=>this.handleChange(e,"register")}  placeholder="Nombre"/>
            <InputPro icon="user" name="last_name"  handleChange={(e)=>this.handleChange(e,"register")} placeholder="Apellido"/>
            <InputPro icon="user" name="email"  handleChange={(e)=>this.handleChange(e,"register")} placeholder="Correo Electronico"/>
            <InputPro icon="lock" name="password"  handleChange={(e)=>this.handleChange(e,"register")} placeholder="Contraseña" isPassword/>
            <InputPro icon="lock" name="password_confirm"  handleChange={(e)=>this.handleChange(e,"register")} placeholder="Confirma tu contraseña" isPassword/>
            
            <button type="submit">
              Puchame
            </button>
          </form>

        </section>

        <section>
        <AcordionContainer>
          <AcordionElement title="Dylan">
            <div uk-grid="true">
              {this.state.element1.map((item,index)=><MiniCard key={index} {...item} />)}
            </div>
          </AcordionElement>
          <AcordionElement title="El nuevo">
            <div uk-grid="true">
              {cards.element2.map((item,index)=><MiniCard key={index} {...item} />)}
            </div>
          </AcordionElement>
        </AcordionContainer>
        {/* <ul uk-accordion>
        <li>
          <a class="uk-accordion-title paw-accordion-tittle" href="#">Proceso para ser un padrino</a>
          <div class="uk-accordion-content paw-accordion">
            <div uk-grid>
                <div class="uk-width-1-5@m">
                    <div class="paw-post">
                        <figure class="paw-image">
                        <img src="assets/images/paw5.jpg"/>
                        </figure>
                        <span class="paw-overlay">
                        <p>
                            <span class="paw-commentary">Llena el formulario que se encuentra en la información
                                        del perrito que deseas apadrinar.</span>
                        </p>
                        </span>
                    </div>
                </div>
                <div class="uk-width-1-5@m">
                    <div class="uk-width-1-2@s">
                        <figure class="paw-image-four">
                            <img src="assets/images/huella.svg"/>
                        </figure>
                    </div>
                    <div class="uk-width-2-2@s">
                        <figure class="paw-image-four">
                            <img src="assets/images/huella.svg"/>
                        </figure>
                    </div>
                    <div class="uk-width-1-2@s">
                        <figure class="paw-image-four">
                            <img src="assets/images/huella.svg"/>
                        </figure>
                    </div>
                    <div class="uk-width-2-2@s">
                        <figure class="paw-image-four">
                            <img src="assets/images/huella.svg"/>
                        </figure>
                    </div>
                </div>
                <div class="uk-width-1-5@m">
                    <div class="paw-post">
                        <figure class="paw-image">
                          <img src="assets/images/paw6.jpg"/>
                        </figure>
                        <span class="paw-overlay">
                          <p>
                            <span class="paw-commentary">Te enviamos un email con la información para hacer los donativos.
                            </span>
                          </p>
                        </span>
                      </div>
                </div>
                <div class="uk-width-1-5@m">
                    <div class="uk-width-1-2@s">
                        <figure class="paw-image-four">
                            <img src="assets/images/huella.svg"/>
                        </figure>
                    </div>
                    <div class="uk-width-2-2@s">
                        <figure class="paw-image-four">
                            <img src="assets/images/huella.svg"/>
                        </figure>
                    </div>
                    <div class="uk-width-1-2@s">
                        <figure class="paw-image-four">
                            <img src="assets/images/huella.svg"/>
                        </figure>
                    </div>
                    <div class="uk-width-2-2@s">
                        <figure class="paw-image-four">
                            <img src="assets/images/huella.svg"/>
                        </figure>
                    </div>
                </div>
                <div class="uk-width-1-5@m">
                    <div class="paw-post">
                        <figure class="paw-image">
                          <img src="assets/images/paw7.jpg"/>
                        </figure>
                        <span class="paw-overlay">
                          <p>
                            <span class="paw-commentary">Te enviamos evidencias.</span>
                          </p>
                        </span>
                      </div>
                </div>
            </div>  
          </div>
        </li>
        </ul> */}
        </section>
    </div>
    )
  }
}

export default App;
