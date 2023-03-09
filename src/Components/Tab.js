import "./Tab.css";
import {useState} from "react";

function TabItem({item, index, changeTab, activeStage}) {
    function onChangeHandler(e) {
        console.log("This is index > ", index)
        changeTab(index);
    }

    let className = "tab-item";

    if (activeStage) {
        className += " active";
    }
    return (<li key={index} className={className} onClick={onChangeHandler}>
        {item}
    </li>)
}

export default function Tab({headers, children}) {

    let [active, setActive] = useState(0);

    function changeTab(index) {
        setActive(index);
    }

    return (<div className={"tab"}>
        <ul className={"tab-list"}>
            {headers.map((item, index) => <TabItem item={item}
                                                   index={index}
                                                   key={index}
                                                   activeStage={active === index}
                                                   changeTab={changeTab}/>)}
        </ul>

        <div className={"tab-body"}>
            {children[active]}
        </div>
    </div>);
}