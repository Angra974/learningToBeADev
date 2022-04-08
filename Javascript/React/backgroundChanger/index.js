class Input extends React.Component {
    constructor(props, context) {
      super(props, context)
    }
  
    render() {
      return (<>
          <input type="text" value={this.props.inputValue} />
          </>
          )
    }
}

Input.defaultProps = {
    inputValue: '#FFFFFF'
}

Input.propTypes = {

}


class Button extends React.Component {
    constructor(props, context) {
      super(props, context)
        this.state = {
        backgroundColor: '#FFFFFF',
        behavior: 'button'
      }
      
        this.changeBackground = this.changeBackground.bind(this);
     }
      
      changeBackground = () => {
          let color = "#" + Math.random().toString(16).slice(2,8)
          
          this.setState((state) => ({
              backgroundColor:  this.state.backgroundColor = color
          }))
        
          console.log(this.state.backgroundColor)
          document.body.style.background = this.state.backgroundColor;
      }

  
      render() {
        return (
          <button 
            onClick={this.changeBackground}
            type={this.state.behavior}>{this.props.children}</button>
        )
      }
              
}


class App extends React.Component {
     constructor(props, context) {
       super(props, context)
     } 
   
  
    render() {
      return (
      <>
          <Button behavior="button">Change color</Button>
          <Input inputValue={this.props.inputValue} />              
      </>)
    }
}


ReactDOM.render(<App />, document.getElementById('app'))