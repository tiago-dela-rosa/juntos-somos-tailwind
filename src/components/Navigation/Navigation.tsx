import styles from "./Navigation.module.css";
import { useState } from "react";
import { menuItems } from "./helper";

export default function Navigation() {
  const [headerItems, setheaderItems] = useState(menuItems);

  const clickItem = (index: number) => {
    setheaderItems(() => {
      const newItems = [...headerItems];
      newItems.forEach((item, i) => {
        item.selected = i === index;
      });
      return newItems;
    });
  };

  return (
    <section className="bg-gray-2">
      <div className="container mx-auto">
        <ul className="flex flex-row">
          {headerItems.map((item, index) => (
            <li
              onClick={() => clickItem(index)}
              key={index}
              className={`${styles.item} ${
                item.selected ? styles.item_selected : ""
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
