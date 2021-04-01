class Component {
    Tax = 18;
    render() {
      console.log("Class Component - lithesh Method");
    }
  }
  
  class Message extends Component {
    Tax = 16;
    render() {
      console.log("Message Class - render Method");
    }
  }
  
  let m1 = new Message();
  m1.render();
  console.log(m1.Tax);
  let m2 = new Component();
  m2.render();
  console.log(m2.Tax);
