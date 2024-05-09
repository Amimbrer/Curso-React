import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from '@/HelloWorldApp';
// import FirstApp from '@/FirstApp';
import CounterAPP from '@/CounterApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        {/* <FirstApp subTittle='hola' /> */}
        <CounterAPP value={100} />
    </React.StrictMode>
);