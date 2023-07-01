import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Checkbox,
} from "@material-tailwind/react";

export default function SelectItems({
  sections,
  userPerSection,
  users,
  sectionUser,
  children,
  setItems
}) {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedSection, setCheckedSection] = useState([]);

  const handleCheckAll = (event) => {
    setCheckedAll(event.target.checked);
    if (event.target.checked) {
      setCheckedItems(users);
      setCheckedSection(sections);
      setItems(users);
    } else {
      setCheckedItems([]);
      setCheckedSection([]);
    }
  };

  const handleCheckAllSectionUser = (event) => {
    const value = event.target.value;
    const ar = userPerSection[value];

    if (event.target.checked) {
      setCheckedSection([...checkedSection, value]);

      const items = checkedItems;
      for (let index = 0; index < ar.length; index++) {
        const element = ar[index];
        if (!items.includes(element)) items.push(element);
      }
      setCheckedItems(items);
      setItems(checkedItems);
    } else {
      for (let index = 0; index < ar.length; index++) {
        const element = ar[index];
        if (checkedItems.includes(element)) {
          setCheckedItems(checkedItems.filter((item) => item !== element));
          setItems(checkedItems.filter((item) => item !== element));
        }
      }

      setCheckedSection(checkedSection.filter((item) => item !== value));
    }
  };

  const handleCheckItem = (event) => {
    const value = event.target.value;
    if (event.target.checked === true) {
      setCheckedItems([...checkedItems, event.target.value]);
      if (checkedItems.length >= users.length - 1) setCheckedAll(true);
      for (let key in userPerSection) {
        const ar = userPerSection[key];
        for (let index = 0; index < ar.length; index++) {
          const element = ar[index];
          if (value === element && !checkedItems.includes(element)) {
            setCheckedSection([...checkedSection, key]);
          }
        }
      }
      setItems([...checkedItems, event.target.value]);
    } else if (event.target.checked === false) {
      setCheckedItems(
        checkedItems.filter((item) => item !== event.target.value)
      );
      setCheckedAll(false);
      for (let key in userPerSection) {
        const ar = userPerSection[key];
        for (let index = 0; index < ar.length; index++) {
          const element = ar[index];
          if (value === element && checkedItems.includes(element)) {
            setCheckedSection(checkedSection.filter((item) => item !== key));
          }
        }
      }
      setItems(checkedItems.filter((item) => item !== event.target.value));
    }
  };

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          {children}
        </AccordionHeader>
        <AccordionBody>
          <Checkbox
            label="selectionner tous les membres"
            checked={checkedAll}
            onChange={handleCheckAll}
          />
          {sectionUser.map((item) => (
            <div className={sections.includes(item) ? "ml-4" : "ml-8"}>
              <Checkbox
                key={item}
                value={item}
                checked={
                  sections.includes(item)
                    ? checkedSection.includes(item)
                    : checkedItems.includes(item)
                }
                label={
                  sections.includes(item)
                    ? "Selectionner tous les membres de cette section" + item
                    : item
                }
                onChange={
                  sections.includes(item)
                    ? handleCheckAllSectionUser
                    : handleCheckItem
                }
              />
            </div>
          ))}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
