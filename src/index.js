//import statements to make App work
//'react' is installed in node_modules as a dependency
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; //youtubes search api library

//local imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyDj7Rt39v17Mg3iTo1Oz5_tXqGLJpf_BHU";


//app is made into a class component in order to keep track of its videos through state
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {videos : []};

    //returns objects with title, thumbnail, description etc of specific videos based off of the search term
    //this was moved inside the constructor becuase we want the user to see something as soon as it loads up
    YTSearch({key : API_KEY, term : 'surfboards'}, (videos) => {
      //this.setState({ videos : videos}); this line can be simplified to the line below using es6 syntax
      this.setState({videos});

    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


//take this component's generated HTML and place into the DOM
//in order for this to work you need to both import react and reactDOM
//also important to note that only component instances can rendered to the dom
ReactDOM.render(<App />, document.querySelector(".container"));
