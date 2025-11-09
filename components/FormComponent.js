import { Button, Input, InputGroup } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function FormComponent({onSearch}) {
  const [textSearch, setTextSearch] = useState("")

  console.log("-textSearch-", textSearch)

  return (
    <div className="py-6 px-4" style={{ background: "linear-gradient(135deg, #F9F8F6 20%, #EFE9E3 120%)" }}>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-3"
            onSubmit={(event)=>{
              event.preventDefault();
              onSearch(textSearch);
            }}
      >
        <InputGroup className="max-w-md">
          <Input 
              placeholder="Search products"
              value={textSearch}
              onChange={(event)=> setTextSearch(event.target.value)}
              style={{
                borderColor: "#0f3460",
                borderWidth: "2px"
              }}
             />
        </InputGroup>

        <Button
          style={{
            background: "linear-gradient(90deg, #074799 30%, #009990 100%)",
            color: "#1a1a2e",
            border: "none",
            fontWeight: "600",
            boxShadow: "0 2px 8px rgba(212, 175, 55, 0.3)",
          }}
          size="sm"
          type="submit"
          className="flex! items-center gap-1 text-white"
        >
          <FaSearch />
          Search
        </Button>
      </form>
    </div>
  );
}
