import {React,Component} from "react";
import CameraMenu from "./menu"
import CameraMenu2 from "./menu2";
import "./choseBar.css";
import axios from "axios";
import Sol from "./Sol";


class  ChooseBar extends Component {
    state ={
      value : "curiosity",
      value2: 100, 
      value3: "fhaz",
      
    }
    
    onChange = e =>{
      this.setState({[e.target.name] : e.target.value})
      console.log(e.target.name)  
      console.log(e.target.value) 
      }
  
    componentDidMount() {
    const {value,value2,value3} =this.state
    const querie =`https://api.nasa.gov/mars-photos/api/v1/rovers/${value}/photos?sol=${value2}&camera=${value3}&api_key=cySQVhAkvHmCaxqcLfdJLZrNNPkxd1WF3HyeM9sK`
      console.log(querie) 
    axios.get(`${querie}`)
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
     showPhotos(){
    console.log(1)
    }
   
    render(){
      const {value,value2,value3} =this.state 
      return(
          <div>
      
  <div className="rovers">   
             
              <div  className="rover">
              <h3>Curiosity</h3>
              <img   width="300px" height="200px" src="https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg" alt="hp"
             
              ></img>
              <input onChange={this.onChange} checked={value==="curiosity"}  type="radio" id="curiosity" name="value" value="curiosity" ></input>
          <label htmlFor="curiosity">curiosity</label>
             <CameraMenu/>
              </div>
  
              <div className="rover">
              <h3>Opportunity</h3>
              <img width="300px" height="200px" src="https://fainaidea.com/wp-content/uploads/2018/10/nasa-rover-e1528913266643.jpg" alt="hp"
              
              ></img>
              <input onChange={this.onChange} checked={value==="opportunity"}  type="radio" id="opportunity" name="value" value="opportunity" ></input>
          <label htmlFor="opportunity">opportunity</label>
              <CameraMenu2/>
              </div>
  
              <div className="rover rover3">
              <h3>Spirit</h3>
              <img width="300px" height="200px" src="https://solarsystem.nasa.gov/system/content_pages/main_images/1068_rover2-1.jpg" alt="hp"
              
              ></img>
              <input onChange={this.onChange} checked={value==="spirit"}  type="radio" id="spirit" name="value" value="spirit" ></input>
          <label htmlFor="spirit">spirit</label>
              <CameraMenu2/>
              </div> 
              
           </div>
           <Sol/>
            <button onClick={this.showPhotos()}>Show photos</button>

           <div id="foo"></div>
           </div>
 
      )
    }
  }
   
    
  
    

export {ChooseBar, }