class Button extends React.Component {
    constructor(props, context) {
      super(props, context) 
    
        this.state = {
            behavior: ''
        }
    
    }
  
  
    render() {
      return <>
        <button type={this.behavior} onClick={this.props.func} >{this.props.children}</button>
        
        </>
    }
  
}


Button.defaultProps = {
  behavior: 'button'
}


class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    
    this.state = {
      count: 0
    }
  
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    this.reset = this.reset.bind(this)
  
  }

   inc = () => {
     this.setState((state) => ({
         count: this.state.count + 1
     }))
   }
                   
   dec = () => {
     this.setState((state) => ({
         count: this.state.count - 1
     }))
   }
                   
   reset = () => {
     this.setState((state) => ({
         count: 0
     }))
   }
  
   render() {
       return (
       <>
           <h2>Count : {this.state.count}</h2>
           <Button func={this.inc}>Increment</Button>
           
           <Button func={this.dec}>Decrement</Button>
           
           <Button func={this.reset}>Reset</Button>
           
       </>
           
       )
     }
  
}

App.defaultProps = {
  count: 1
}


ReactDOM.render(<App />, document.getElementById('app'))

       
       