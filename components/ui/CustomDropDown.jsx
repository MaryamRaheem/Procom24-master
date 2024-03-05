import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomDropDown = ({ value, onChangeHandler, min,max, setPartcipantCount }) => {

  const handleValueChange = (newValue) => {
    
    setPartcipantCount(
      parseInt(newValue)
    );
    onChangeHandler(newValue);
  };
  return (
    
    <Select onValueChange={handleValueChange} defaultValue={value}>
      <SelectTrigger className="w-full border-zinc-400 bg-zinc-950">
        <SelectValue placeholder="Select no of participants" />
      </SelectTrigger>
      <SelectContent className="border-zinc-400 bg-zinc-950 text-white">
        <SelectGroup>
          <SelectLabel>No Of Partcipants</SelectLabel>
          {
            // map the number of participants from min to max
            Array.from({ length: max - min + 1 }, (_, i) => (
              <SelectItem key={i} value={`${i + min}`}>
                {i + min}
              </SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomDropDown;
