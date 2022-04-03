import React from 'react';
import SidebarDB from './SidebarItems.json';

import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  SubMenu,
  MenuItem
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import SidebarStructure from './SidebarStructure';

let sidebarLength = SidebarDB.Sidebar.length;
// let itemsLength = SidebarDB.Sidebar.items.length;
// let submenuLength = SidebarDB.Sidebar.submenu.length;

function Sidebar() {
  //   console.log(SidebarDB); json runs in DOM
  //   console.log(SidebarDB.Sidebar);

  return (
    <div>
      <ProSidebar>
        <SidebarHeader>Coin Gecko</SidebarHeader>

        <SidebarContent>
          <Menu>
            {SidebarDB.Sidebar.map((data, index) => {
              //   let x = 0;
              return (
                <div key={index}>
                  <SubMenu title={data.title}>
                    <MenuItem>{data.items}</MenuItem>
                  </SubMenu>
                </div>
              );
            })}

            <hr />
            <MenuItem>Portfolio</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>Sign Up</MenuItem>
          </Menu>
        </SidebarContent>

        {/* <SidebarContent>
          <Menu>
            <SubMenu title="Coins">
              <MenuItem>Market Cap Rank</MenuItem>
              <MenuItem>Recently Added</MenuItem>
              <MenuItem>Categories</MenuItem>
              <MenuItem>Discover</MenuItem>
              <MenuItem>Large Movers</MenuItem>
              <MenuItem>High Volumes</MenuItem>
              <SubMenu title="Derivatives">
                <MenuItem>Large Movers</MenuItem>
                <MenuItem>High Volumes</MenuItem>
              </SubMenu>
            </SubMenu>

            <SubMenu title="Exchanges">
              <MenuItem>Spot</MenuItem>
              <MenuItem>DEX</MenuItem>
              <MenuItem>Derivatives</MenuItem>
            </SubMenu>


        </SidebarContent> */}

        <SidebarFooter>Ricky Felix</SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
