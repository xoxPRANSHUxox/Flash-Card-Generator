import React from "react";
import LogoBar from "../LogoBar";
import NavBar from "../Navbar/NavBar";
import CreateGroup from "./Create New Component/CreateGroup";
export default function CreateNew() {
  return (
    <div>
      <LogoBar />
      <NavBar />

      {/* Create New Starts from here*/}
      <CreateGroup/>
    </div>
  );
}
