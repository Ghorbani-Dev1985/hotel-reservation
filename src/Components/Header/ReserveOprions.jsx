import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
const ReserveOprions = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="bg-violet-900">۱ بزرگسال - ۲ خردسال - ۱ اتاق</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ReserveOprions;