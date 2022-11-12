import {Route, Switch} from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { DetailPage } from './pages/DetailPage';
import ProductsPage from './pages/ProductsPage';


function App() {
  
  return(
    <>
    <Navigation/>
    <Switch>
      <Route path='/about' component={DetailPage}></Route>
      <Route path='/' component={ProductsPage}></Route>
    </Switch>
    </>
  )
}

export default App;