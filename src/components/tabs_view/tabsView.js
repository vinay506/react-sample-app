import React from 'react'

function TabsView() {

    const tabs = ["tab1", "tab2"];

    function getTabs() {
        return (
            <div className="tab">
                {
                    tabs.map(tab => {
                        return <button key={tab} className="tabItem" onClick={()=>{onTabChange(tab)}}>{tab}</button>
                    })
                }
            </div>
        )
    }

    function onTabChange(tab){
        console.log(tab);
    }

    function getTabsConent() {
        return <div className="tab-content">
            {tabs.map(tab=>{
                return getTabContent(tab)
            })}
        </div>
    }

    function getTabContent(tab){
        return <div id={tab}>{tab}</div>
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
