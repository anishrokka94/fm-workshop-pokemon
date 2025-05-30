import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import { Pokemon, AdvancedSearchProps } from "./AdvancedSearch.d";
import useFetchFilterTypes from "../../../hooks/useFetchFilterTypes";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { fetchPokedexDetails } from "../../../services/pokedexService";

interface FormData {
  searchText: string;
  types: { value: string; label: string }[];
  habitats: { value: string; label: string }[];
  classifications: { value: string; label: string }[];
}

const AdvancedSearch = ({ onSearch }: AdvancedSearchProps) => {
  // const [allPokemons, setAllPokemons] = useState([]);
  const { filterCategories } = useFetchFilterTypes();
  // const { getPokedex } = useFetch();

  const typeOptions = [
    {
      label: "Types",
      options: filterCategories?.types.map((type) => ({
        value: type,
        label: type.charAt(0).toUpperCase() + type.slice(1),
      })),
    },

    {
      label: "Habitats",
      options: filterCategories?.habitats.map((habitat) => ({
        value: habitat,
        label: habitat.charAt(0).toUpperCase() + habitat.slice(1),
      })),
    },
    {
      label: "Classifications",
      options: filterCategories?.classifications.map((classification) => ({
        value: classification,
        label: classification.charAt(0).toUpperCase() + classification.slice(1),
      })),
    },
  ];

  // console.log("type options", typeOptions);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // console.log("data", data);
    const allSelectedValues = data.types?.map((option) => option.value) || [];

    const payload = {
      searchText: data.searchText || "",
      types: allSelectedValues,
    };

    try {
      const res = await axios.post<{ count: number; results: Pokemon[] }>(
        "http://localhost:4000/api/search",
        payload
      );

      // Fetch detailed info for each result (based on name)
      const detailedResults = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const details = await fetchPokedexDetails(pokemon.name);
          return {
            ...pokemon,
            ...details,
          };
        })
      );

      console.log("res", detailedResults);
      onSearch(detailedResults);
    } catch (err) {
      console.error("Failed to search:", err);
    }
  };
  const handleClear = () => {
    reset({
      searchText: "",
      types: [],
    });
  };
  return (
    <>
      <form
        className="row align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            {...register("searchText")}
          />
        </div>
        <div className="col-6">
          <Controller
            name="types"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={typeOptions}
                isMulti
                placeholder="Select types"
              />
            )}
          />
        </div>

        <div className="col-md-2">
          <div className="d-flex gap-2">
            <button className="btn btn-dark btn-sm" disabled={isSubmitting}>
              {" "}
              {isSubmitting ? "Filtering..." : "Filter"}{" "}
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              onClick={handleClear}
            >
              {" "}
              Clear{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdvancedSearch;
