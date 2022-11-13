import {Route, Switch} from 'react-router-dom'
import { DetailPage } from './pages/DetailPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  
  return(
    <>
    <Switch>
      <Route path='/about/:id' component={DetailPage}></Route>
      <Route path='/' component={ProductsPage}></Route>
    </Switch>
    </>
  )
}

export default App;