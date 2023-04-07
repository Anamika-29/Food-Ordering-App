import React,{Component} from "react";
import Navbar from "./navbar";
import { Route,Switch,Redirect } from "react-router-dom";

class MainComponent extends Component{
    state = {
        
sizes:["Regular","Medium","Large"],
crusts:["New Hand Tossed","Wheat Thin Crust","Cheese Burst","Fresh Pan Pizza","Classic Hand Tossed"],
data :
[
{"id":"MIR101","image":"https://i.ibb.co/SR1Jzpv/mirinda.png","type":"Beverage","name":"Mirinda","desc":"Mirinda","veg":"Yes",change:false},
{"id":"PEP001","image":"https://i.ibb.co/3vkKqsF/pepsiblack.png","type":"Beverage","name":"Pepsi Black Can","desc":"Pepsi Black Can","veg":"Yes",change:false},
{"id":"LIT281","image":"https://i.ibb.co/27PvTng/lit.png","type":"Beverage","name":"Lipton Iced Tea","desc":"Lipton Iced Tea","veg":"Yes",change:false},
{"id":"PEP022","image":"https://i.ibb.co/1M9xDZB/pepsi-new20190312.png","type":"Beverage","name":"Pepsi New","desc":"Pepsi New","veg":"Yes",change:false},
{"id":"BPCNV1","image":"https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png","type":"Burger Pizza","name":"Classic Non Veg","desc":"Oven-baked buns with cheese, peri-peri chicken, tomato &capsicum in creamy mayo","veg":"No",change:false},
{"id":"BPCV03","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Classic Veg","desc":"Oven-baked buns with cheese, tomato &capsicum in creamy mayo","veg":"Yes",change:false},
{"id":"BPPV04","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Premium Veg","desc":"Oven-baked buns with cheese, paneer,tomato, capsicum & red paprika in creamy mayo","veg":"Yes",change:false},
{"id":"DIP033","image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"SideDish","name":"Cheesy Dip","desc":"An all-time favorite with your Garlic Breadsticks & Stuffed GarlicBread for a Cheesy indulgence","veg":"Yes",change:false},
{"id":"DIP072","image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"SideDish","name":"Cheesy Jalapeno Dip","desc":"A spicy, tangy flavored cheese dip is a an absolutedelight with your favourite Garlic Breadsticks","veg":"Yes",change:false},
{"id":"GAR952","image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"SideDish","name":"Garlic Breadsticks","desc":"Baked to perfection. Your perfect pizza partner! Tastesbest with dip","veg":"Yes",change:false},
{"id":"PARCH1","image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"SideDish","name":"Chicken Parcel","desc":"Snacky bites! Pizza rolls with chicken sausage & creamyharissa sauce","veg":"No",change:false},
{"id":"PARVG7","image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"Side Dish","name":"VegParcel","desc":"Snacky bites! Pizza rolls with paneer & creamy harissa sauce","veg":"Yes",change:false},
{"id":"PATNV7","image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"SideDish","name":"White Pasta Italiano Non-Veg","desc":"Creamy white pasta with pepper barbecuechicken","veg":"No",change:false},
{"id":"PATVG4","image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"SideDish","name":"White Pasta Italiano Veg","desc":"Creamy white pasta with herb grilledmushrooms","veg":"Yes",change:false},
{"id":"DES044","image":"https://i.ibb.co/gvpDKPv/Butterscotch.png","type":"Dessert","name":"Butterscotch Mousse Cake","desc":"Sweet temptation! Butterscotch flavored mousse","veg":"Yes",change:false},
{"id":"DES028","image":"https://i.ibb.co/nm96NZW/ChocoLava.png","type":"Dessert","name":"Choco Lava Cake","desc":"Chocolate lovers delight! Indulgent,gooey molten lava inside chocolate cake","veg":"Yes",change:false},
{"id":"PIZVDV","image":"https://i.ibb.co/F0H0SWG/deluxeveg.png","type":"Pizza","name":"DeluxeVeggie","desc":"Veg delight - onion, capsicum, grilled mushroom, corn & paneer","veg":"Yes",change:false},
{"id":"PIZVFH","image":"https://i.ibb.co/4mHxB5x/farmhouse.png","type":"Pizza","name":"Farmhouse","desc":"Delightful combination of onion, capsicum, tomato & grilled mushroom","veg":"Yes",change:false},
{"id":"PIZVIT","image":"https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png","type":"Pizza","name":"Indi Tandoori Paneer","desc":"It is hot. It is spicy. It is oh-soIndian. Tandoori paneer with capsicum, red paprika & mint mayo","veg":"Yes",change:false},
{"id":"PIZVMG","image":"https://i.ibb.co/MGcHnDZ/mexgreen.png","type":"Pizza","name":"Mexican Green Wave","desc":"Mexican herbs sprinkled on onion, capsicum, tomato &jalapeno","veg":"Yes",change:false},
{"id":"PIZVPP","image":"https://i.ibb.co/cb5vLX9/peppypaneer.png","type":"Pizza","name":"PeppyPaneer","desc":"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika","veg":"Yes",change:false},
{"id":"PIZVVE","image":"https://i.ibb.co/gTy5DTK/vegextra.png","type":"Pizza","name":"VegExtravaganza","desc":"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno &extra cheese","veg":"Yes",change:false},
{"id":"PIZNCP","image":"https://i.ibb.co/b5qBJ9d/cheesepepperoni.png","type":"Pizza","name":"Chicken Pepperoni","desc":"A classic American taste! Relish the delectable flavor of Chicken Pepperoni,topped with extra cheese","veg":"No",change:false},
{"id":"PIZNCD","image":"https://i.ibb.co/GFtkbB1/ChickenDominator10.png","type":"Pizza","name":"Chicken Dominator","desc":"Loaded with double pepperbarbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers","veg":"No",change:false},
{"id":"PIZNPB","image":"https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png","type":"Pizza","name":"Pepper Barbecue & Onion","desc":"A classic favourite with pepperbarbeque chicken & onion","veg":"No",change:false},
{"id":"PIZNIC","image":"https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png","type":"Pizza","name":"Indi Chicken Tikka","desc":"The wholesome flavour of tandoorimasala with Chicken tikka, onion, red paprika & mint mayo","veg":"No",change:false}
],
cart:[],
view:0,
item:{size:"",crust:""},


    }

    handleClick = (id) =>{
        let s1 = {...this.state};
        s1.data.find(ele=>ele.id===id).change = true;
        this.setState(s1);
    }

    handleBlur = (id) =>{
        let s1 = {...this.state};
        s1.data.find(ele=>ele.id===id).change = false;
        this.setState(s1);
    }
    
    handleChange = (e) =>{
        const {currentTarget: input} = e;
        let s1 = {...this.state};
        s1.item[input.name] = input.value;

        this.setState(s1);

    }
    
    filterfunction = (products)=>{
        let{category,price,instock}= this.state.product;
        let products1 = category!="" ? products.filter(ele=>ele.category===category) : products;
        let products2 = price==="<10" ? products1.filter(ele=>ele.price<10) : price==="10-20" ? products1.filter(ele=>ele.price>=10 && ele.price<=20) : price===">20" ? products1.filter(ele=>ele.price>20) :products1;
        let products3 = instock ? products2.filter(ele=>ele.instock===instock) : products2;

        return products3;
    }
    increase = (id) => {
        let s1 = {...this.state};
        let index1 =  s1.cart.findIndex(ele=>ele.id===id);
        let index2 = s1.data.findIndex(ele=>ele.id===id);

        
        s1.data[index2].quantity++;
        s1.cart[index1].quantity++;
        this.setState(s1);
    }
    decrease = (id) => {
        let s1 = {...this.state};
        let index1 =  s1.cart.findIndex(ele=>ele.id===id);
        let index2 = s1.data.findIndex(ele=>ele.id===id);
        
        
        if(s1.cart[index1].quantity===1) {s1.cart.splice(index1,1);
            s1.data[index2].quantity="";
        }
        else {s1.data[index2].quantity--;
            s1.cart[index1].quantity--;};
        this.setState(s1);
    }
    


    changeView = (num) =>{
        let s1 = {...this.state};
        s1.view = num;
        this.setState(s1);
    }

    handleProduct = (product) => {
        
        let s1 = {...this.state};
        s1.editProductIndex>=0 ? s1.products[s1.editProductIndex]=product :
        s1.products.push(product);
        s1.view=0;
        s1.editProductIndex=-1;
        this.setState(s1);

    }

    editProduct = (index) => {
        let s1 = {...this.state};
        s1.view = 1;
        s1.editProductIndex = index;
        this.setState(s1);
    }

    makeDropdown = (id,arr,value,name,label,disable) => (

        <div className="form-group">
        <select className="form-control" disabled={disable ? true : false} name={name} value={value}  onChange={((e) => this.handleChange(e, id))}>
            <option value="">
                {label}
            </option>
            {arr.map(ele=>(<option >{ele}</option>))}
            </select>
    
    </div>
    );

    addToCart = (id) =>{
        
        let s1 = {...this.state};
        let find = s1.data.find(ele=>ele.id===id);
        let index = s1.data.findIndex(ele=>ele.id===id);
        

        let json = {...find,crust:s1.item.crust,size:s1.item.size,quantity:1};
        if(find.type==="Pizza" && !s1.item.size){alert('Select the size')}
        else if(find.type==="Pizza" && !s1.item.crust){alert('Select the crust')}
        else
        {
            s1.cart.push(json);
            s1.data[index]={...find,quantity:1}
            s1.item = {size:"",crust:""}
        
        
        this.setState(s1);
        }


    
}

  
render(){
    
    let{data,view,cart,sizes,crusts} = this.state;
    let{size,crust} = this.state.item;
    let vegPizza = data.filter(ele=> (ele.type=="Pizza"&&ele.veg=="Yes"));
    let nonVegPizza = data.filter(ele=> (ele.type=="Pizza"&&ele.veg=="No"));
    let sideDish = data.filter(ele=> (ele.type=="SideDish"));
    let other = data.filter((ele)=> (ele.type!="Pizza"&&ele.type!="SideDish"));
    
return(<div className="container">
    <Navbar changeView={this.changeView}/>
    
    {view === 1 ? <React.Fragment>
        <div className="container border">
            <div className="row">
                <div className="col-9 border">
                    <div className="row">
                        {vegPizza.map((ele,index)=><div className="col-6">
        <div className="card text-center">
            <img className="card-img-top" src={ele.image}></img>
            <div className="card-body">
                <h4 className="card-title">{ele.name}</h4>
                <p className="card-text">{ele.desc}</p>
                <div className="row">
                {ele.quantity ? <div className="col-6" onClick={()=>this.handleClick(ele.id)} onBlur={()=>this.handleBlur(ele.id)}>{ele.change ? this.makeDropdown(ele.id,sizes,size,"size","Select Size","disabled") :this.makeDropdown(ele.id,sizes,"","size","Select Size","disabled")}</div> : <div className="col-6" onClick={()=>this.handleClick(ele.id)} onBlur={()=>this.handleBlur(ele.id)}>{ele.change ? this.makeDropdown(ele.id,sizes,size,"size","Select Size","") :this.makeDropdown(ele.id,sizes,"","size","Select Size","")}</div>}
                
               
                {ele.quantity ? <div className="col-6" onClick={()=>this.handleClick(ele.id)} onBlur={()=>this.handleBlur(ele.id)}>{ele.change ? this.makeDropdown(ele.id,crusts,crust,"crust","Select Crust","disabled") :this.makeDropdown(ele.id,crusts,"","crust","Select Crust","disabled")}</div> : <div className="col-6" onClick={()=>this.handleClick(ele.id)} onBlur={()=>this.handleBlur(ele.id)}>{ele.change ? this.makeDropdown(ele.id,crusts,crust,"crust","Select Crust","") :this.makeDropdown(ele.id,crusts,"","crust","Select Crust","")}</div>}
                
                </div><br/>
                <div className="text-center">{ele.quantity ?<div className="text-center"><button className="col-1 m-1 btn btn-sm btn-danger" onClick={()=>this.decrease(ele.id)}>-</button> <button className="btn btn-sm btn-secondary col-1 m-1 ">{ele.quantity}</button> <button className="btn btn-sm btn-primary col-1 m-1 " onClick={()=>this.increase(ele.id)}>+</button></div> :<button className="btn btn-primary" onClick={()=>this.addToCart(ele.id)}>Add To Cart</button>}
                    </div>

                
            </div>
            </div>
        </div>)}
                    </div>

                </div>
                
                <div className="col-3 border">
                    {cart ? cart.map((ele,index)=><div className="row col-12">
                        
                        <div  className="col-3">
                        <img width="60" src={ele.image} />
                        </div>
                        <div className="col-9">
                            <h4>{ele.name}</h4>
                            <p>{ele.desc}</p>
                            <p><b>{ele.size} | {ele.crust}</b></p>
                            <button className="btn btn-sm btn-danger" onClick={()=>this.decrease(ele.id)}>-</button> <button className="btn btn-sm btn-secondary">{ele.quantity}</button> <button className="btn btn-sm btn-primary" onClick={()=>this.increase(ele.id)}>+</button>
                            </div>
                        </div>) :<h6 className="text-center"><b>Cart is Empty</b></h6>}
                    
                </div>
            </div>

        </div>
    </React.Fragment> :view === 2 ? <React.Fragment>
        <div className="container border">
            <div className="row">
                <div className="col-9 border">
                    <div className="row">
                        {nonVegPizza.map((ele,index)=><div className="col-6">
        <div className="card text-center">
            <img className="card-img-top" src={ele.image}></img>
            <div className="card-body">
                <h4 className="card-title">{ele.name}</h4>
                <p className="card-text">{ele.desc}</p>
                <div className="row">
                {ele.quantity ? <div className="col-6" onClick={()=>this.handleClick(ele.id)} onBlur={()=>this.handleBlur(ele.id)}>{ele.change ? this.makeDropdown(ele.id,sizes,size,"size","Select Size","disabled") :this.makeDropdown(ele.id,sizes,"","size","Select Size","disabled")}</div> : <div className="col-6" onClick={()=>this.handleClick(ele.id)} onBlur={()=>this.handleBlur(ele.id)}>{ele.change ? this.makeDropdown(ele.id,sizes,size,"size","Select Size","") :this.makeDropdown(ele.id,sizes,"","size","Select Size","")}</div>}
                
               
                {ele.quantity ? <div className="col-6" onClick={()=>this.handleClick(ele.id)} onBlur={()=>this.handleBlur(ele.id)}>{ele.change ? this.makeDropdown(ele.id,crusts,crust,"crust","Select Crust","disabled") :this.makeDropdown(ele.id,crusts,"","crust","Select Crust","disabled")}</div> : <div className="col-6" onClick={()=>this.handleClick(ele.id)} onBlur={()=>this.handleBlur(ele.id)}>{ele.change ? this.makeDropdown(ele.id,crusts,crust,"crust","Select Crust","") :this.makeDropdown(ele.id,crusts,"","crust","Select Crust","")}</div>}
                
                </div><br/>
                <div className="text-center">{ele.quantity ?<div className="text-center"><button className="col-1 m-1 btn btn-sm btn-danger" onClick={()=>this.decrease(ele.id)}>-</button> <button className="btn btn-sm btn-secondary col-1 m-1 ">{ele.quantity}</button> <button className="btn btn-sm btn-primary col-1 m-1 " onClick={()=>this.increase(ele.id)}>+</button></div> :<button className="btn btn-primary" onClick={()=>this.addToCart(ele.id)}>Add To Cart</button>}
                    </div>

                
            </div>
            </div>
        </div>)}
                    </div>

                </div>
                
                <div className="col-3 border">
                    {cart ? cart.map((ele,index)=><div className="row col-12">
                        
                        <div  className="col-3">
                        <img width="60" src={ele.image} />
                        </div>
                        <div className="col-9">
                            <h4>{ele.name}</h4>
                            <p>{ele.desc}</p>
                            <p><b>{ele.size} | {ele.crust}</b></p>
                            <button className="btn btn-sm btn-danger" onClick={()=>this.decrease(ele.id)}>-</button> <button className="btn btn-sm btn-secondary">{ele.quantity}</button> <button className="btn btn-sm btn-primary" onClick={()=>this.increase(ele.id)}>+</button>
                            </div>
                        </div>) :<h6 className="text-center"><b>Cart is Empty</b></h6>}
                    
                </div>
            </div>

        </div>
    </React.Fragment> : view === 3 ? <React.Fragment>
        <div className="container border">
            <div className="row">
                <div className="col-9 border">
                    <div className="row">
                        {sideDish.map((ele,index)=><div className="col-6">
        <div className="card text-center">
            <img className="card-img-top" src={ele.image}></img>
            <div className="card-body">
                <h4 className="card-title">{ele.name}</h4>
                <p className="card-text">{ele.desc}</p>
                
                <div className="text-center">{ele.quantity ?<div className="text-center"><button className="col-1 m-1 btn btn-sm btn-danger" onClick={()=>this.decrease(ele.id)}>-</button> <button className="btn btn-sm btn-secondary col-1 m-1 ">{ele.quantity}</button> <button className="btn btn-sm btn-primary col-1 m-1 " onClick={()=>this.increase(ele.id)}>+</button></div> :<button className="btn btn-primary" onClick={()=>this.addToCart(ele.id)}>Add To Cart</button>}
                    </div>

                
            </div>
            </div>
        </div>)}
                    </div>

                </div>
                
                <div className="col-3 border">
                    {cart ? cart.map((ele,index)=><div className="row col-12">
                        
                        <div  className="col-3">
                        <img width="60" src={ele.image} />
                        </div>
                        <div className="col-9">
                            <h4>{ele.name}</h4>
                            <p>{ele.desc}</p>
                            <p><b>{ele.size} | {ele.crust}</b></p>
                            <button className="btn btn-sm btn-danger" onClick={()=>this.decrease(ele.id)}>-</button> <button className="btn btn-sm btn-secondary">{ele.quantity}</button> <button className="btn btn-sm btn-primary" onClick={()=>this.increase(ele.id)}>+</button>
                            </div>
                        </div>) :<h6 className="text-center"><b>Cart is Empty</b></h6>}
                    
                </div>
            </div>

        </div>
    </React.Fragment>:view === 4 ? <React.Fragment>
        <div className="container border">
            <div className="row">
                <div className="col-9 border">
                    <div className="row">
                        {other.map((ele,index)=><div className="col-6">
        <div className="card text-center">
            <img className="card-img-top" src={ele.image}></img>
            <div className="card-body">
                <h4 className="card-title">{ele.name}</h4>
                <p className="card-text">{ele.desc}</p>
                
                <div className="text-center">{ele.quantity ?<div className="text-center"><button className="col-1 m-1 btn btn-sm btn-danger" onClick={()=>this.decrease(ele.id)}>-</button> <button className="btn btn-sm btn-secondary col-1 m-1 ">{ele.quantity}</button> <button className="btn btn-sm btn-primary col-1 m-1 " onClick={()=>this.increase(ele.id)}>+</button></div> :<button className="btn btn-primary" onClick={()=>this.addToCart(ele.id)}>Add To Cart</button>}
                    </div>

                
            </div>
            </div>
        </div>)}
                    </div>

                </div>
                
                <div className="col-3 border">
                    {cart ? cart.map((ele,index)=><div className="row col-12">
                        
                        <div  className="col-3">
                        <img width="60" src={ele.image} />
                        </div>
                        <div className="col-9">
                            <h4>{ele.name}</h4>
                            <p>{ele.desc}</p>
                            <p><b>{ele.size} | {ele.crust}</b></p>
                            <button className="btn btn-sm btn-danger" onClick={()=>this.decrease(index)}>-</button> <button className="btn btn-sm btn-secondary">{ele.quantity}</button> <button className="btn btn-sm btn-primary" onClick={()=>this.increase(index)}>+</button>
                            </div>
                        </div>) :<h6 className="text-center"><b>Cart is Empty</b></h6>}
                    
                </div>
            </div>

        </div>
    </React.Fragment>: ""}
    


    </div>)
}

}
export default MainComponent;