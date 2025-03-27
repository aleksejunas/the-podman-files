import React from "react";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/calendar";

const HomePage = () => {
  return (
    <div>
      <h1>Hello from the Home Page</h1>
      <button className="bg-bg-primary  p-2 rounded-xl text-white hover:text-fg-secondary ">
        Click Me
      </button>
      <Button>Click Me</Button>
      <Calendar
        mode="single"
        // selected={Date.now()}
        // onSelect={setDate}
        className="rounded-3xl border bg-pink-300 w-auto text-white flex justify-center items-center"
      />
    </div>
  );
};

export default HomePage;
