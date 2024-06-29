"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { changeFiltredProducts } from "@/redux/features/filterProducts/filterProductsSlice";
import { useDispatch } from "react-redux";
import { fetchData } from "@/utils/fetchData";
import styles from "./Filter.module.scss";

interface IFilterProps {
  categories?: string[];
  css: string;
}

const Filter = ({ categories, css }: IFilterProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useSearchParams();

  return (
    <ul className={`${styles.filter} ${css}`}>
      <li>
        <button
          className={`${styles.filter__button} ${
            params.get("filter") === null &&
            "bg-[--accent-color] text-[--white-color]"
          }`}
          onClick={() => {
            fetchData("products").then((data) => {
              dispatch(changeFiltredProducts(data.success));
              router.push("/", { scroll: false });
            });
          }}
        >
          All
        </button>
      </li>
      {categories &&
        categories.map((category, i) => {
          return (
            <li key={i}>
              <button
                className={`${styles.filter__button} ${
                  params.get("filter") === category &&
                  "bg-[--accent-color] text-[--white-color]"
                }`}
                onClick={() => {
                  fetchData(`products/category/${category}`).then((data) => {
                    dispatch(changeFiltredProducts(data.success));
                    router.push(`/?filter=${category}`, { scroll: false });
                  });
                }}
              >
                {capitalizeFirstLetter(category)}
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default Filter;
