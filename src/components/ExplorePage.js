import React from "react";
import axios from "axios"


export default class ImageList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`${"querie"}`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
          const array = this.state.persons.photos;
          
          let arr1=array.map((a)=>a.img_src);
          
          var create_img_element = function(targetId,img_src){
            //create the img element
            var img = document.createElement('img');
            //set the source of the image
            img.src = img_src;
            //add the image to a specific element
            document.getElementById(targetId).appendChild(img);
        }
        arr1.forEach(el=>create_img_element('foo',el));
       // create_img_element('foo');
        
        })   
    }
  
    render() {
        
      return (
   <div id="foo"></div>
      )
   }
    
  }
  

  