import React from "react";
import { TextInput } from "./components/TextInput";
import { Envelope } from "phosphor-react";
import "./styles/global.css";
import { Checkbox } from "./components/Checkbox";
import { Text } from "./components/Text";

export function App() {
  return (
    <>
      <h1 className="text-2xl text-cyan-500 ">HW</h1>
      <TextInput.Root>
        <React.Fragment key=".0">
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input placeholder="Type your e-mail address" />
        </React.Fragment>
      </TextInput.Root>
      <div className="flex items-center gap-2">
        <Checkbox />
        <Text size="sm">Lembrar de mim por 30 dias</Text>
      </div>
    </>
  );
}
