import { useState } from "react";
import clsx from "clsx";
import icons from "../../assets/iconss.svg";
import css from "./FiltersForm.module.css";
import { useSearchParams } from "react-router-dom";
import LocationInput from "../MIU/LocationInput/LocationInput";
import { vehicleEquipments, vehicleTypes } from "../../helpers/constants";
import Checkbox from "../MIU/CheckBox/Checkbox";
import LoadButton from "../MIU/LoadButton/LoadButton";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(searchParams.get("vehicleTypes"));
  const [filters, setFilters] = useState({
    ac: !!searchParams.get("ac"),
    automatic: !!searchParams.get("automatic"),
    kitchen: !!searchParams.get("kitchen"),
    tv: !!searchParams.get("tv"),
    bathroom: !!searchParams.get("bathroom"),
  });

  const onChangeFilters = (name) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: !prev[name] };
      return newFilters;
    });
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelected((prev) => {
      const newSelected = prev === value ? null : value;
      return newSelected;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      if (value.trim()) data[key] = value;
    });

    Object.keys(filters).forEach((key) => {
      if (filters[key]) data[key] = true;
    });

    const transmissionSelected = filters.automatic;
    if (transmissionSelected) {
      data.transmission = "automatic";
    } else if (!transmissionSelected && filters.manual) {
      data.transmission = "manual";
    }

    setSearchParams(data);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Location</legend>
        <LocationInput
          defaultValue={searchParams.get("location") || ""}
          name="location"
          placeholder="City"
        />
      </fieldset>
      <fieldset className={css.fieldset}>
        <legend className={clsx(css.legend, css.legendFilters)}>Filters</legend>
        <fieldset className={css.fieldsetRadio}>
          <legend className={css.legendRadio}>Vehicle equipment</legend>
          <ul className={css.equipmentsList}>
            {vehicleEquipments.map(({ name, text, iconStyles }) => (
              <li className={css.equipmentsItem} key={name}>
                <Checkbox
                  name={name}
                  type="checkbox"
                  width={32}
                  height={32}
                  iconPath={`${icons}#icon-${name}`}
                  iconStyles={iconStyles}
                  checked={filters[name]}
                  onChange={() => onChangeFilters(name)}
                >
                  {text}
                </Checkbox>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset className={css.fieldsetRadio}>
          <legend className={css.legendRadio}>Vehicle type</legend>
          <ul className={css.typesList}>
            {vehicleTypes.map(({ name, text }) => (
              <li className={css.typesItem} key={name}>
                <Checkbox
                  name="vehicleTypes"
                  type="checkbox"
                  width={40}
                  height={28}
                  value={name}
                  iconPath={`${icons}#icon-${name}`}
                  checked={selected === name}
                  onChange={handleCheckboxChange}
                >
                  {text}
                </Checkbox>
              </li>
            ))}
          </ul>
        </fieldset>
      </fieldset>
      <LoadButton type="submit">Search</LoadButton>
    </form>
  );
};

export default Filters;
