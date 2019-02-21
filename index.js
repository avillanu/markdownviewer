class Markdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "Welcome to the ultimate markdown editor. Enter your code on the right, and see a preview on the left. \n\n#### Headings:  \n# Heading 1\n## Heading 2\n### Heading 3\n---\n#### Hyperlink:   \n[Google](https://google.com)  \n\n---\n#### Inline code:\nFrom the console, run `console.log('Hello world!');` to see the output.    \n\n---\n\n#### Code block:\n```javascript\nfunction sayHello() {\n  return 'Hello world!';\n}\n```\n---\n\n#### List items:\n1. Ordered list item 1  \n2. Ordered list item 2  \n\n\n- Unordered list item  \n- Unordered list item  \n\n---\n\n#### Blockquote:  \n> Let the smile change the world. But don't let the world change your smile. \n\n---\n#### Image:  \n![alt text](https://secure.meetupstatic.com/photos/event/4/c/b/b/600_468259643.jpeg)  \n\n---\n#### Formatted text:\nAs **bolded** or *emphasized* text."
    };
  this.handleChange = this.handleChange.bind(this);
    
  }
 handleChange(e) {
    this.setState({
      input: e.target.value
    });
 }
  render(){
    return(<React.Fragment><h1>Code Editor</h1>
    <textarea rows="8" cols="100" id="editor" value={this.state.input} onChange={this.handleChange} />
 
   <script>
   {document.getElementById('preview').innerHTML =
      marked(this.state.input)}
  </script> 
   </React.Fragment>
       
    );}

  }

  ReactDOM.render(
  <Markdown />,
  document.getElementById('content2')
);
