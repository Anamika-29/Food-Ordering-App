import React,{Component} from "react";
import {Link } from "react-router-dom";
class Navbar extends Component{
   
render() {
    
return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <a href="#" className="navbar-brand m-2">MyFavPizza</a>

<div className="">
<ul className="navbar-nav mr-auto">
<li className="nav-item">
<a href="#" className="nav-link" onClick={()=>this.props.changeView(1)}>Veg Pizza 
</a>
</li>
<li className="nav-item">
<a href="#" className="nav-link" onClick={()=>this.props.changeView(2)}>Non-Veg Pizza 
</a>
</li>
<li className="nav-item">
<a href="#" className="nav-link" onClick={()=>this.props.changeView(3)}>Side Dishes 
</a>
</li>
<li className="nav-item">
<a href="#" className="nav-link" onClick={()=>this.props.changeView(4)}>Other Items 
</a>
</li>

</ul>
</div>
</nav>
);
}


}
export default Navbar;