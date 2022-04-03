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

// let sidebarLength = SidebarDB.Sidebar.length;
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
            {SidebarDB.Sidebar.map((data) => {
              //   let x = 0;
              //   console.log(data.items);
              //   console.log(data.subitems);
              return (
                <div>
                  <SubMenu title={data.title}>
                    {data.items.map((itemName, index) => (
                      <MenuItem key={index}>{itemName}</MenuItem>
                    ))}
                    {/* <SubMenu title={data.subtitle}>
                      {data.subitems.map((subItemName, i) => (
                        <div>
                          {subItemName !== undefined || null ? (
                            <>
                              <MenuItem key={i}>{subItemName}</MenuItem>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      ))}
                    </SubMenu> */}
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

        <SidebarFooter>"Account.Name"</SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
