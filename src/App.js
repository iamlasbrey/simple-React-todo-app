import React, {Component} from 'react'
import Container from './Container/Container'
import './App.css';


class App extends Component {

  state={
    content : "",
      skills:[
        "HTML / CSS",
        "JAVASCRIPT",
        "NODE JS",
        "VUE JS",
        "REACT JS"
      ]
    }

    deleteHandler = (personindex) => {
      const demskills = [...this.state.skills]
      demskills.splice(personindex, 1)
      this.setState({
        skills : demskills
      })
    }

    AddnewSkill = (e) => {
      e.preventDefault()
      if(this.state.content.length > 3){
          const Addnew = [...this.state.skills]
          Addnew.push(this.state.content)
          this.setState({
          skills: Addnew,
          content: ""
        })
      }  
    }

    changeHandler = (event)=>{
      this.setState({
        content: event.target.value
      })
    }


  render(){
    const myskills = this.state.skills.map((myskill, index) =>{
      return <Container 
      variousskills = {myskill}
      key={index} 
      clicked = {()=> this.deleteHandler()}
      />
    })

    return (
      <div className="App">
        <div className="Elements">
        <div className="input_element">
        <div><input className='inputspace'placeholder="ADD SKILL" value={this.state.content} onChange={this.changeHandler} /></div>
        <div><button className="enter_button" onClick = {this.AddnewSkill}>ENTER</button></div>
        </div>

        <p>{myskills}</p>
        </div>
      </div>
    );
  }
}

export default App;
