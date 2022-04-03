import React from 'react';
import SidebarDB from './SidebarItems.json';

function SidebarStructure() {
  let item = 0;
  let sidebarLength = SidebarDB.Sidebar.length;
  let itemsLength = SidebarDB.Sidebar.items.length;
  let submenuLength = SidebarDB.Sidebar.submenu.length;

  console.log(SidebarDB.Sidebar.length);

  let x = 0; // sidebar array number

  // check number of sidebar arrayLength
  // loop over all items inside that

  for (let x = 0; x != sidebarLength; x++) {
    console.log(SidebarDB.Sidebar[x].items);
    // for (let y = 0; y != itemsLength; y++) {}
  }

  //   loop over all items
  //   for (item; item < arrayLength; item++) {
  // retuns only the first items
  // console.log(array.splice(0, 1));

  // console.log(SidebarDB.Sidebar[item].items.splice(0, 1));
  // items 1-1, items 2-1, items 3-1
  // instead of 1-1, 1-2, 1-3, 2-1, 2-2
  //   }

  //   for (let x = 0; x < SidebarDB.Sidebar.length; x++) {
  // console.log(SidebarDB.Sidebar.items.splice(0, 1));
  // if (x != 5) {
  //   for (let y = 0; y < SidebarDB.Sidebar[x].length; y++) {
  //     console.log(SidebarDB.Sidebar.length);
  //   }
  // }
  //   }

  // if sidebar array is not 0, loop over items
  // console.log(SidebarDB.Sidebar.length); // 5

  return <div>Hello World</div>;
}

export default SidebarStructure;
