import React from 'react';
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

import SidebarItems from './SidebarItems.json';

function Sidebar() {
  //   console.log(SidebarItems); json runs in DOM
  //   console.log(SidebarItems.Sidebar);
  return (
    <div>
      <ProSidebar>
        <SidebarHeader>Coin Gecko</SidebarHeader>

        <SidebarContent>
          {SidebarItems.Sidebar[0].map((data, index) => {
            return (
              <div key={index}>
                <SubMenu title="title">
                  <MenuItem>{data.items}</MenuItem>
                </SubMenu>
              </div>
            );
          })}
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

            <hr />
            <MenuItem>Portfolio</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>Sign Up</MenuItem>
          </Menu>
        </SidebarContent> */}

        <SidebarFooter>Ricky Felix</SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
