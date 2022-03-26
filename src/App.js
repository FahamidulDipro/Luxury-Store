import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import HowReactWorks from './components/HowReactWorks/HowReactWorks';
import PropsVsState from './components/PropsVsState/PropsVsState';
import HowUseStateWorks from './components/HowUseStateWorks/HowUseStateWorks';

function App() {
  return (
    <div className="App">
     <Shop></Shop>
     <HowReactWorks></HowReactWorks>
     <PropsVsState></PropsVsState>
     <HowUseStateWorks></HowUseStateWorks>
    </div>
  );
}

export default App;
