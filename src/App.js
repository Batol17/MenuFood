import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListFood from './ListFood'
import NavBar from './component/NavBar';
import { Container } from 'react-bootstrap';
import Header from './component/Header';
import ItemList from './component/ItemList';
import { useState } from 'react';
import Categories from './component/Categories';
function App() {
  const[ dataFood,setDataFood ]=useState(ListFood)

  // console.log(dataFood);
  // filter by category
   const filterCategories=['الكل',...new Set(ListFood.map(item => item.category))]

   const filterByCat=(cat)=>{
    if(cat=='الكل'){
      setDataFood(ListFood)
    }
    else{      
    const newArr=ListFood.filter(item => item.category==cat) 
    setDataFood(newArr)
    }
   }
 
  
  return (
    <div className="App" style={{backgroundColor:'#eee'}} >
      <NavBar/>
      <Container className='py-5'>
        <Header/>
        <Categories filterByCat={filterByCat} filterCategories={filterCategories} />
        <ItemList dataFood={dataFood} />
      </Container>
    </div>
  );
}

export default App;
