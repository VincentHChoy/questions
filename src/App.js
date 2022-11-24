import "./App.css";

import React from "react";
const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: this.props.links};
  }
  render() {
    const gallery = this.state.list.map((link, index) => {
      return (
        <div key={index} className="image">
          <img src={link} />
          <button
            className="remove"
            onClick={() => {
              this.state.list.splice(index, 1);
              this.setState((state)=>({
              list: state.list
              }))
            }}
          >
            X
          </button>
        </div>
      );
    });
    return <div>{gallery}</div>;
  }
}

// React is loaded and is available as React and ReactDOM
// imports should NOT be used

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (
    <ul>
      {items.map((item, index) =>
        <TodoItem 
        item={item} 
        key={index} 
        onClick={this.handleItemClick.bind(this, item)} />)}
    </ul>);
  }

  handleItemClick(item, event) {
    if (!item.done) {
      event.persist();
      this.props.onItemClick(item, event);
    }
  }
}

const items = [{ text: 'Buy grocery', done: true },
{ text: 'Play guitar', done: false },
{ text: 'Romantic dinner', done: false }
];


function App() {
  return (
    <div className="App">
      <a href="https://www.testdome.com/questions/react-js/image-gallery-app/62228">Image Gallary</a>
      <ImageGallery links={links} />
      <a href="https://www.testdome.com/questions?sort=none&sets=public&term=react&question=76484">To do List</a>
      <TodoList
        items={items}
        onListClick={(event) => console.log("List clicked!")}
        onItemClick={(item, event) => { console.log(item, event) }}
      />
    </div>
  );
}

export default App;
