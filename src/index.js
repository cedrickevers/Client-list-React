import React from "react";
import ReactDOM from "react-dom";
 
class App extends React.Component {
      state = {
        clients:[
           {id: 1, nom: "Miakis"},
           {id: 2, nom: "Sora"},
           {id: 3, nom: "Ahess"}
       ],
       compteur: 0
   }
   handleClick   = ()=>{
    const clients = this.state.clients.slice();
        clients.push({id: 4, nom : "Kaito"});
        this.setState({clients: clients});
 }

 
    render (){
        const title ="Mont titre en interpollation";
      
     
 
        return(
          <div>
              <h1>{title}</h1>
             <ul> 
                <button onClick={this.handleClick }></button>
                {this.state.clients.map(client =>(
                    <li>
                    {client.nom}<button>x</button>

                    </li>

                ))}

            </ul> 
            <form>
                <input type ="text" placeholder="ajouter un client"></input>
                <button>Confirmer</button>
            </form>
         </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));


//https://www.valentinog.com/blog/babel/ using babel writing code