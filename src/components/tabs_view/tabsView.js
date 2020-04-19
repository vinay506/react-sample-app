import React,{useState} from 'react'
import './tabsViewStyles.scss';

function TabsView() {

    const tabs = [{name:"tab1"},{name:"tab2"}];
    const [currentTab,setCurrentTab] = useState({name:"tab1"});

    function getTabs() {
        return (
            <div className="tab">
                {
                    tabs.map(tab => {
                        return <button key={tab.name} className={currentTab.name === tab.name ? 'active':'inactive'} onClick={()=>{onTabChange(tab)}}>{tab.name}</button>
                    })
                }
            </div>
        )
    }

    function onTabChange(tab){
        console.log(tab);
        setCurrentTab(tab);
    }

    function getTabsConent() {
        return <div className="tab-content">
            {tabs.map(tab=>{
                return getTabContent(tab)
            })}
        </div>
    }

    function getTabContent(tab){
        return <div id={tab.name} className={currentTab.name === tab.name ? 'active':'inactive'}>{tab.name}</div>
    }

    return (
        <div>
            <div>
                <select className="form-controll">
                    <option value="first">First</option>
                    <option value="second">Second</option>
                </select>

            </div>
            <div>
                {getTabs()}
                {getTabsConent()}
            </div>

        </div>

    )
}

export default TabsView;
