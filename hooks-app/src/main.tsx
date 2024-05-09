import ReactDOM from 'react-dom/client'

import '@fontsource-variable/rubik';

// import { HooksApp } from './HooksApp'
// import CounterApp from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';

import './index.css'
import { SimpleForm } from './02-useEfect/SimpleForm';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SimpleForm />
)
