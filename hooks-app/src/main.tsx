import ReactDOM from 'react-dom/client'

import '@fontsource-variable/rubik';

// import { HooksApp } from './HooksApp'
// import CounterApp from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEfect/SimpleForm';
// import { FormWithCustomHook } from './02-useEfect/FormWithCutomHook';
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
import Layout from './05-useLayoutEffect/Layout';



import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Layout />
)
