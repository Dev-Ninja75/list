import React from "react";
import { NativeRouter, Route } from "react-router-native";
import List from "./components/List";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={List} />
    </NativeRouter>
  );
}
