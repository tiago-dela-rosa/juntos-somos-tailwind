interface IMenuItemProps {
  description: string;
}

export default function MenuItem(props: IMenuItemProps) {
  return (
    <li className=" text-black-1 font-bold cursor-pointer mr-4">
      {props.description}
    </li>
  );
}
