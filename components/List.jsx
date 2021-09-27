import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

export default function List() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
        setLoading(false);
      });
  }, []);
  console.log(List);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
