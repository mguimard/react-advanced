import React, { useState } from "react";
import './Tabs.css';

export default function Tabs() {

    let [active, setActive] = useState('tab-1');

    return (
        <>
            <ul>
                <li onClick={() => setActive('tab-1')} className={active === 'tab-1' ? 'active' : ''}>Tab 1</li>
                <li onClick={() => setActive('tab-2')} className={active === 'tab-2' ? 'active' : ''}>Tab 2</li>
                <li onClick={() => setActive('tab-3')} className={active === 'tab-3' ? 'active' : ''}>Tab 3</li>
            </ul>

            <div className="tabs">
                <div className={active === 'tab-1' ? 'active' : ''}>This is some content for Tab 1</div>
                <div className={active === 'tab-2' ? 'active' : ''}>This is some content for Tab 2</div>
                <div className={active === 'tab-3' ? 'active' : ''}>This is some content for Tab 3</div>
            </div>
        </>
    )
}
