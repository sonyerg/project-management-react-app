import React from "react";
import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <button>Save</button>
        <button>Cancel</button>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
